import { Product } from '@/modules/product/entities/product.entity';

export class SubmitInvoiceProductDamageInput {
  id: number;
  damageCause: string;
  damageType: number;
  newProducts: any;
}
