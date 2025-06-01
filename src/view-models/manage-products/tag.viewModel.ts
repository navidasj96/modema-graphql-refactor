import { Image } from '@/modules/image/entities/image.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { RelatedProduct } from '@/modules/related-product/entities/related-product.entity';
import { TagDetail } from '@/modules/tag-detail/entities/tag-detail.entity';
import { Tag } from '@/modules/tag/entities/tag.entity';
import { ImageViewModel } from '@/view-models/manage-products/image.viewModel';
import { RelatedProductViewModel } from '@/view-models/manage-products/realted-product.viewModel';
import { JSDOM } from 'jsdom';

export class TagViewModel {
  public id: number;
  public title: string;
  public image: ImageViewModel | null;
  public sliderImage: ImageViewModel | null;
  public sortOrder: number | undefined;
  public isActive: number | undefined;
  public totalLike: number | undefined;

  public discount: number | undefined;
  public specialOffer: number;
  public columnWidth: number;
  public columnOrder: number;
  public products: RelatedProductViewModel[];
  public metaTags: string[];
  public pageTitle?: string | undefined;
  public urlSlug: string | undefined;

  public titleEn: string;
  public metaTagsEn: string[];
  public pageTitleEn: string | undefined;
  public description: string | undefined;
  public urlSlugEn: string | undefined;
  public detail: TagDetail[];
  constructor(tag: Tag, loadTopProducts: number = 0) {
    let image = tag.image ? tag.image : null;
    let image_data: null | ImageViewModel = null;
    let sliderImage_data: null | ImageViewModel = null;
    if (image) {
      image_data = new ImageViewModel(image);
    }

    let sliderImage = tag.sliderImage ? tag.sliderImage : null;
    if (sliderImage) {
      image = sliderImage;
      sliderImage_data = new ImageViewModel(image);
    }

    this.id = tag.id;
    this.title = tag.title;
    this.image = image_data;
    this.sliderImage = sliderImage_data;
    this.description = tag.description;
    this.sortOrder = tag.sortOrder;
    this.isActive = tag.isActive;
    this.discount = tag.discount;
    this.specialOffer = tag.specialOffer;
    this.columnWidth = tag.columnWidth;
    this.columnOrder = tag.columnOrder;
    if (loadTopProducts) {
      let products = tag.productTags
        .slice(0, 6)
        .map((productTag) => productTag.product)
        .map((product) => new RelatedProductViewModel(product));
      this.products = products;
    }

    let arrayMeta: any[] = [];
    let metaTags = tag.metaTags;

    //todo:check if this is a currect implementation
    if (metaTags && metaTags != '') {
      try {
        const dom = new JSDOM(metaTags);
        const metaElements = dom.window.document.getElementsByTagName('meta');

        for (const meta of metaElements) {
          const attributes: Record<string, string> = {};

          for (const attr of Array.from(meta.attributes)) {
            const attribute = attr as Attr;
            attributes[attribute.name] = attribute.value;
          }

          if (Object.keys(attributes).length > 0) {
            arrayMeta.push(attributes);
          }
        }
      } catch (error) {}
    }

    let arrayMetaEn: any[] = [];
    let metaTagsEn = tag.metaTagsEn;
    if (metaTagsEn && metaTagsEn != '') {
      try {
        const dom = new JSDOM(metaTags);
        const metaElements = dom.window.document.getElementsByTagName('meta');

        for (const meta of metaElements) {
          const attributes: Record<string, string> = {};

          for (const attr of Array.from(meta.attributes)) {
            const attribute = attr as Attr;
            attributes[attribute.name] = attribute.value;
          }

          if (Object.keys(attributes).length > 0) {
            arrayMetaEn.push(attributes);
          }
        }
      } catch (error) {}
    }

    this.metaTags = arrayMeta;
    this.pageTitle = tag.pageTitle;
    this.urlSlug = tag.urlSlug;
    this.titleEn = tag.titleEn ? tag.titleEn : tag.title;
    this.metaTagsEn = arrayMetaEn;
    this.pageTitleEn = tag.pageTitleEn ?? tag.titleEn;
    this.urlSlugEn = tag.urlSlugEn;

    // Added 1399/12/09: multiple category details
    let details = tag.tagDetails;

    if (details) {
      details = details
        .filter((detail) => detail.isActive == 1)
        .map((detail) => {
          let detailViewModel: Record<string, any> = {};
          detailViewModel.id = detail.id;
          detailViewModel.title = detail.title;
          detailViewModel.detailText = detail.detailText;
          detailViewModel.sortOrder = detail.sortOrder;
          detailViewModel.isActive = detail.isActive;
          detailViewModel.titleEn = detail.titleEn;
          detailViewModel.detailTextEn = detail.detailTextEn;
          return detailViewModel as TagDetail;
        });
    }
    this.detail = details;
  }
}
