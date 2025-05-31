import { Design } from '@/modules/design/entities/design.entity';
import { Image } from '@/modules/image/entities/image.entity';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';

export class InvoiceItemViewModel {
  public id: number;
  public name: string;
  public width: number;
  public length: number;
  public colors: null | string;
  public price_per_inch: number;
  public price: number;
  public discount: number;
  public count: number;
  public total_price: number;
  public total_discount: number;
  public product: null | Product;
  public subproduct: null | Subproduct;
  public design: null | Design;
  public with_pad: number;
  public pad_id: number;
  public total_coupon_discount: number;
  public is_coupon_applicable: number;
  public invoice_product_items_created: string;
  public description: string;
  public invoice_product_description: string;
  public items_to_produce: number;
  public items_from_depot: number;
  public related_product_id: number;
  public related_subproduct_id: number;
  public stock_count: number;
  public placeToUseIds: number[];
  public gift = 0;
  public bundle_count = 0;
  public bundle_price = 0;
  public manually_added = 0;

  public prepare(invoiceProduct: InvoiceProduct) {
    let image: null | Image = null;
    let path: null | string = null;
    let filename: null | string = null;
    let invoiceItemImage: null | string = null;

    for (const carpetUsagePlace of invoiceProduct.carpetUsagePlaceInvoiceProducts.map(
      (item) => item.carpetUsagePlace
    )) {
      this.placeToUseIds.push(carpetUsagePlace.id);
    }

    if (invoiceProduct.subproductId) {
      this.subproduct = invoiceProduct.subproduct;
      this.product = invoiceProduct.product;
      const basicCarpetColor = this.subproduct.basicCarpetColor;
      const width = this.subproduct.width;
      const length = this.subproduct.length;
      this.name =
        this.product.name +
        ' - ' +
        Number(width) +
        ' در ' +
        Number(length) +
        (basicCarpetColor ? ' - ' + basicCarpetColor.title : '');
      this.colors = this.product.colors ?? null;
      image = this.product.image;
      if (image) {
        path = image.path;
        filename = image.filename.replace('.', '/480');
      }
      invoiceItemImage = (path || '') + filename;

      this.subproduct = new Subproduct();
      this.product = new Product();
    } else if (invoiceProduct.productId) {
      this.product = invoiceProduct.product;
      const width = this.product.width;
      const length = this.product.length;
      this.name =
        this.product.name + ' - ' + Number(width) + ' در ' + Number(length);
      this.description = 'Main Product';
      this.colors = this.product.colors ?? null;
      image = this.product.image;
      if (image) {
        path = image.path;
        filename = image.filename.replace('.', '/480');
      }
      invoiceItemImage = (path || '') + filename;
      this.subproduct = new Subproduct();
    }
  }
}
