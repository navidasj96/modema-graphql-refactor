import { Injectable } from '@nestjs/common';
import { CreateShippingServiceInput } from './dto/create-shipping-service.input';
import { UpdateShippingServiceInput } from './dto/update-shipping-service.input';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { ShippingServiceEnum } from '@/utils/ShippingServiceEnum';
import { CreateShipmentChaparProvider } from '@/modules/shipping-service/providers/create-shipment-chapar.provider';
import { SnappAuthenticationControllerProvider } from '@/modules/shipping-service/providers/snapp-authentication-controller.provider';
import { InjectRepository } from '@nestjs/typeorm';
import { ShippingService } from '@/modules/shipping-service/entities/shipping-service.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ShippingServiceService {
  constructor(
    /**
     * inject CreateShipmentChaparProvider
     */
    private readonly createShipmentChaparProvider: CreateShipmentChaparProvider,
    /**
     * inject SnappAuthenticationControllerProvider
     */
    private readonly snappAuthenticationControllerProvider: SnappAuthenticationControllerProvider,
    /**
     * inject shippingServiceRepository
     */
    @InjectRepository(ShippingService)
    private readonly shippingServiceRepository: Repository<ShippingService>
  ) {}

  create(createShippingServiceInput: CreateShippingServiceInput) {
    return 'This action adds a new shippingService';
  }

  findAll() {
    return `This action returns all shippingService`;
  }

  async findOne(options: FindOneOptions<ShippingService>) {
    return await this.shippingServiceRepository.findOne(options);
  }

  update(id: number, updateShippingServiceInput: UpdateShippingServiceInput) {
    return `This action updates a #${id} shippingService`;
  }

  remove(id: number) {
    return `This action removes a #${id} shippingService`;
  }

  async createShipping(invoice: Invoice, shippingServiceId: number) {
    let result;
    if (
      shippingServiceId == ShippingServiceEnum.SHIPPING_SERVICE_CHAPAR_GROUND
    ) {
      result = await this.createShipmentChapar(invoice);
    } else if (
      shippingServiceId ==
      ShippingServiceEnum.SHIPPING_SERVICE_MAHEX_DOOR_TO_DOOR
    ) {
      result = await this.createShipmentMahex(invoice);
    }
    return result;
  }

  async createShipmentChapar(invoice: Invoice) {
    return await this.createShipmentChaparProvider.createShipmentChapar(
      invoice
    );
  }

  async createShipmentMahex(invoice: Invoice) {}

  async getOrCreateSnappToken() {
    return await this.snappAuthenticationControllerProvider.getOrCreateSnappToken();
  }
}
