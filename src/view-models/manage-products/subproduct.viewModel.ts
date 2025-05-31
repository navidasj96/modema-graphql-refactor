import { Product } from '@/modules/product/entities/product.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { AttributeGroupViewModel } from './attribute-group.viewModel';
import { AttributeViewModel } from './attribute.viewModel';
import { TagViewModel } from './tag.viewModel';
import { ImageViewModel } from './image.viewModel';
import { VideoViewModel } from './video.viewModel';
import { ActiveDiscountViewModel } from '../general/active-discount.viewModel';

export class SubproductViewModel {
  id: number;
  productId: number;
  name: string;
  code: string;
  price: number;
  padPrice: number;
  description: string;
  saleCount: number;
  totalLike: number;
  totalDislike: number;
  rate: number;
  rateCount: number | undefined;
  size: number;
  width: number | undefined;
  length: number | undefined;
  colors: string | undefined;
  sizeIsCustomizable: boolean;
  sizeId: number;
  colorId: number;
  sizeTitle: string;
  colorTitle: string;
  basicCarpetSizeId: number;
  isActive: boolean;
  nameEn: string | undefined;
  attributeGroups: AttributeGroupViewModel[];
  tags: TagViewModel[];
  image: ImageViewModel | null;
  images: ImageViewModel[];
  videos: VideoViewModel[];
  activeDiscount: ActiveDiscountViewModel | null;
  colorCategories: { id: number }[];
  stockCount: number;
  stockCountFaked: boolean;
  stockCountReal: number;
  childProduct: any; // Replace with ProductViewModel if available
  priceMinusDiscount: number;
  padPriceMinusDiscount: number;
  borderColor: string;
  bundlePrice: number;
  bundlePadPrice: number;
  bundlePriceMinusDiscount: number;
  bundlePadPriceMinusDiscount: number;
  isOutOfStock: boolean;

  constructor(
    subproduct: Subproduct,
    product: Product,
    options?: {
      loadOtherImages?: boolean;
      loadVideos?: boolean;
      loadColorImages?: boolean;
      loadChildrenBySize?: boolean;
    }
  ) {
    // Set defaults for options
    const {
      loadOtherImages = true,
      loadVideos = true,
      loadColorImages = true,
      loadChildrenBySize = false,
    } = options || {};

    this.id = subproduct.id;
    this.productId = subproduct.productId;
    this.name = subproduct.name;
    this.code = subproduct.code?.toLowerCase() ?? '';
    this.price = Number(subproduct.price);
    this.padPrice = Number(subproduct.padPrice);
    this.description = subproduct.description ?? '';
    this.saleCount = subproduct.saleCount;
    this.totalLike = subproduct.totalLike;
    this.totalDislike = subproduct.totalDislike;
    this.rate = subproduct.rate;
    this.rateCount = subproduct.rateCount;
    this.size = subproduct.size;
    this.width = subproduct.width;
    this.length = subproduct.length;
    this.colors = subproduct.colors;
    this.sizeIsCustomizable = !!subproduct.sizeIsCustomizable;
    this.sizeId = subproduct.basicCarpetSize?.id ?? 0;
    this.sizeTitle = subproduct.basicCarpetSize?.title ?? '';
    this.basicCarpetSizeId = subproduct.basicCarpetSize?.id ?? 0;
    this.colorId = subproduct.basicCarpetColor?.id ?? 0;
    this.colorTitle = subproduct.basicCarpetColor?.title ?? 'پد';
    this.isActive = !!subproduct.isActive;
    this.nameEn = subproduct.nameEn;

    // Attributes
    this.attributeGroups = (subproduct.attributes || []).map((attr) => {
      // You may need to group attributes by group here
      return new AttributeGroupViewModel(attr.attributeGroup, [
        new AttributeViewModel(attr),
      ]);
    });

    // Tags
    this.tags = (subproduct.tags || []).map((tag) => new TagViewModel(tag));

    // Images
    this.image = subproduct.image ? new ImageViewModel(subproduct.image) : null;
    this.images = [];
    if (loadOtherImages && subproduct.images) {
      this.images = subproduct.images.map((img) => new ImageViewModel(img));
    }

    // Videos
    this.videos = [];
    if (loadVideos && product.videos) {
      const basicCarpetColorId = subproduct.basicCarpetColor?.id;
      this.videos = product.videos
        .filter(
          (video) => video.pivot?.basicCarpetColorId === basicCarpetColorId
        )
        .map((video) => new VideoViewModel(video, video.pivot?.sortOrder));
    }

    // Active Discount
    this.activeDiscount = subproduct.activeDiscount
      ? new ActiveDiscountViewModel(subproduct.activeDiscount, subproduct.price)
      : null;

    // Color Categories
    this.colorCategories = (subproduct.colorCategories || []).map((cat) => ({
      id: cat.id,
    }));

    // Stock
    this.stockCount = subproduct.stockCount;
    this.stockCountFaked = false;
    this.stockCountReal = subproduct.stockCount;

    // Price minus discount
    this.priceMinusDiscount = Number(
      subproduct.priceMinusDiscount ?? subproduct.price
    );
    this.padPriceMinusDiscount = Number(
      subproduct.padPriceMinusDiscount ?? subproduct.padPrice
    );

    // Bundle prices
    this.bundlePrice = Number(subproduct.bundlePrice ?? 0);
    this.bundlePadPrice = Number(subproduct.bundlePadPrice ?? 0);
    this.bundlePriceMinusDiscount = Number(
      subproduct.bundlePriceMinusDiscount ?? 0
    );
    this.bundlePadPriceMinusDiscount = Number(
      subproduct.bundlePadPriceMinusDiscount ?? 0
    );

    // Other fields
    this.borderColor = subproduct.borderColor ?? '';
    this.isOutOfStock = !!subproduct.isOutOfStock;

    // Child product (optional, implement if needed)
    this.childProduct = null;
  }

  static prepareSimple(subproduct: Subproduct) {
    return {
      id: subproduct.id,
      name: subproduct.name,
    };
  }
}
