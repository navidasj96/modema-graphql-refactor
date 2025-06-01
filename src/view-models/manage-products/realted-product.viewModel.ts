import { Image } from '@/modules/image/entities/image.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { ImageViewModel } from '@/view-models/manage-products/image.viewModel';

export class RelatedProductViewModel {
  public id: number;
  public name: string;
  public price?: string | undefined;
  public image: ImageViewModel | null;
  public mainCategory: string;
  public mainCategoryId: number;
  public urlSlug: string | undefined;

  constructor(relatedProduct: Product) {
    let image: Image | ImageViewModel | null = relatedProduct.image
      ? relatedProduct.image
      : null;
    if (image) {
      image = new ImageViewModel(image);
    }

    let productCategory = relatedProduct.productProductCategories.map(
      (prodctCatg) => prodctCatg.productCategory
    )[0];
    this.mainCategory = productCategory.name;
    this.mainCategoryId = productCategory.id;
    this.id = relatedProduct.id;
    this.name = relatedProduct.name;
    this.price = relatedProduct.price;
    this.image = image;
    this.urlSlug = relatedProduct.urlSlug;
  }
}
