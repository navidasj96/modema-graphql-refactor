import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InvoiceAddressPrepareProvider {
  constructor() {}

  public InvoiceAddressPrepare(address: InvoiceAddress) {
    return {
      id: address.id,
      user_id: Number(address.userId),
      address_id: Number(address.addressId),
      country_id: Number(address.countryId),
      country_name: address.country.name,
      state_id: Number(address.stateId),
      state_name: address.state.name,
      city_id: Number(address.cityId),
      city_name: address.city.name,
      zip_code: address.zipCode,
      address: address.address,
      address2: address.address2,
      phone: address.phone,
      phone2: address.phone2,
      longitude: Number(address.longitude),
      latitude: Number(address.latitude),
      fullname: address.fullname,
    };
  }
}
