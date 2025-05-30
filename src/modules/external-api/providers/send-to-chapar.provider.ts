import { SendToChaparInput } from '@/modules/external-api/dtos/send-to-chapar-input';
import { ShippingServiceEnum } from '@/utils/ShippingServiceEnum';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { format } from 'date-fns-jalali';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SendToChaparProvider {
  constructor(
    /**
     * inject configService
     */
    private readonly configService: ConfigService,
    /**
     * inject httpService
     */
    private readonly httpService: HttpService
  ) {}

  public async sendToChapar(sendToChaparInput: SendToChaparInput) {
    const nowJalali = format(new Date(), 'yyyyMMdd');
    const today = new Date().toISOString().slice(0, 10);

    const username = this.configService.get<string>('general.CHAPAR_USERNAME');
    const password = this.configService.get<string>('general.CHAPAR_PASSWORD');
    const proxy = this.configService.get<string>('general.THIRD_PARTIES_PROXY');
    const baseURL = this.configService.get<string>(
      'general.CHAPAR_API_BASE_URI'
    );
    const { invoice, invoiceAddress, options } = sendToChaparInput;

    if (!username || !password || !proxy || !baseURL) {
      throw new Error('Chapar credentials are not set in the env file');
    }
    const reference = `${nowJalali}-${invoice.id}`;

    const input = {
      user: {
        username,
        password,
      },
      bulk: [
        {
          cn: {
            reference,
            date: today,
            assinged_pieces: String(options.assignedPieces),
            service: options.service,
            value: String(options.value),
            payment_term: options.paymentType,
            weight: String(options.weight),
            inv_value: String(options.inv_value),
          },
          receiver: {
            person: invoiceAddress.fullname,
            company: '',
            city_no: String(invoiceAddress.cityId),
            telephone: invoiceAddress.phone2 || '',
            mobile: invoiceAddress.phone || '',
            email: invoiceAddress.email || '',
            address: `${invoiceAddress.state.name} ${invoiceAddress.city.name} ${invoiceAddress.address} ${invoiceAddress.address2 || ''}`,
            post_code: invoiceAddress.zipCode || '',
          },
        },
      ],
    };

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'APP-AUTH': Buffer.from(`${username}:${password}`).toString('base64'),
    };

    try {
      const { data, status } = await firstValueFrom(
        this.httpService.post(
          '/v1/bulk_import',
          { input: JSON.stringify(input) },
          {
            baseURL,
            headers,
            timeout: 30000,
            proxy: proxy
              ? {
                  host: new URL(proxy).hostname,
                  port: parseInt(new URL(proxy).port),
                }
              : false,
          }
        )
      );

      if (status >= 200 && status < 300) {
        const result = data;
        if (result.result === true) {
          const trackingCode = result.objects?.result?.[0]?.tracking;
          invoice.trackingCode = trackingCode;
          invoice.isChaparDelivery = 1;
          invoice.selectedShippingServiceId =
            ShippingServiceEnum.SHIPPING_SERVICE_CHAPAR_GROUND;

          return { status: true, message: 'OK' };
        } else {
          return {
            status: false,
            message:
              'پاسخ مناسب از سرویس کالارسانان چاپار دریافت نگردید. لطفا مجددا نسبت به تغییر وضعیت این صورتحساب اقدام نمایید. ' +
              result.message,
          };
        }
      } else {
        return {
          status: false,
          message: 'ارسال به چاپار موفق نبود. لطفا بعداً امتحان کنید.',
        };
      }
    } catch (err) {
      return {
        status: false,
        message:
          'ارتباط با سیستم پستی چاپار برای دریافت و ارسال محصول وجود ندارد. لطفا دقایقی بعد دوباره تلاش نمایید.',
      };
    }
  }
}
