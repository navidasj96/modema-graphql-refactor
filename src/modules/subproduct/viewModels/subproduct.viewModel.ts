import { Product } from '@/modules/product/entities/product.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { AttributeGroupViewModel } from '../../../view-models/manage-products/attribute-group.viewModel';
import { sub } from 'date-fns-jalali';
import { AttributeViewModel } from '@/view-models/manage-products/attribute.viewModel';
import { TagViewModel } from '@/view-models/manage-products/tag.viewModel';
import { Tag } from '@/modules/tag/entities/tag.entity';
import { ImageViewModel } from '@/view-models/manage-products/image.viewModel';
import { Image } from '@/modules/image/entities/image.entity';
import { Video } from '@/modules/video/entities/video.entity';
import { VideoViewModel } from '@/view-models/manage-products/video.viewModel';
import { ProductVideo } from '@/modules/product-video/entities/product-video.entity';

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
  videos: (Video | VideoViewModel)[];
  // activeDiscount: ActiveDiscountViewModel | null;
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
  }
}
