import { Product } from '@/modules/product/entities/product.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { AttributeGroupViewModel } from './attribute-group.viewModel';
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

    const attributes = subproduct.attributeSubproducts.map(
      (sub) => sub.attribute
    );
    if (attributes.length > 0) {
      const attributeGroupCollections: AttributeGroupViewModel[] = [];

      for (const attribute of attributes) {
        let attributeGroup = attribute.attributeAttributeGroups?.map(
          (att) => att.attributeGroup
        )[0];
        const attributeViewModel = new AttributeViewModel(attribute);
        let checkAttrGroupCollection = attributeGroupCollections.find(
          (attGroup) => attGroup.id == attributeGroup?.id
        );
        if (checkAttrGroupCollection) {
          checkAttrGroupCollection.attributes.push(attributeViewModel);
        } else {
          let attributeGroupViewModel = new AttributeGroupViewModel();
          attributeGroup &&
            attributeGroupViewModel.attributes.push(
              attributeGroupViewModel.prepare(attributeGroup)
            );
          attributeGroupCollections.push(attributeGroupViewModel);
        }
      }
      this.attributeGroups = attributeGroupCollections;
    }

    let tags: Tag[] | TagViewModel[] = subproduct.productTags.map(
      (tags) => tags.tag
    );
    if (tags) {
      tags = tags.map((tag) => new TagViewModel(tag, 0));
    }

    let image: Image | ImageViewModel = subproduct.image;
    if (image) {
      image = new ImageViewModel(subproduct.image);
    }
    let otherImages: Image[] | ImageViewModel[] = [];
    if (loadOtherImages) {
      otherImages = subproduct.imageSubproducts.map((img) => img.image);

      if (otherImages.length > 0) {
        otherImages = otherImages.map((img) => new ImageViewModel(img));
      }
    }

    let productVideos: Video[] | VideoViewModel[] | ProductVideo[] = [];
    if (loadVideos) {
      productVideos = product.productVideos.map(
        (productVideo) => productVideo.video
      );

      //todo: check if this is a correct implementation (specially sortOrder)
      if (productVideos.length > 0) {
        let basicCarpetColorId = subproduct.basicCarpetColorId;
        productVideos = productVideos
          .flatMap((video) => video.productVideos)
          .filter(
            (productVideo) =>
              productVideo.basicCarpetColorId == basicCarpetColorId
          )
          .map(
            (productVideo) =>
              new VideoViewModel(productVideo.video, productVideo.sortOrder)
          );
      }
      let video: Video | VideoViewModel = subproduct.video;
      if (video) {
        video = new VideoViewModel(video);
      }

      let othervideos: Video[] | VideoViewModel[] =
        subproduct.subproductVideos.map(
          (subproductVideo) =>
            new VideoViewModel(subproductVideo.video, subproductVideo.sortOrder)
        );
      let videos = [...productVideos];
      if (video) {
        videos.push(video);
      }
      if (othervideos.length > 0) {
        videos = videos.concat(othervideos);
      }
      this.videos = videos;
    }

    //todo:check the productColorImages to be truly received
    let productColorImages:
      | null
      | {
          image: Image;
          sortOrder: number | undefined;
          basicCarpetColorId: number | undefined;
        }[] = null;
    if (loadColorImages) {
      productColorImages = product.productColorImages.map(
        (productColorImages) => {
          return {
            image: productColorImages.image,
            sortOrder: productColorImages.sortOrder,
            basicCarpetColorId: productColorImages.basicCarpetColorId,
          };
        }
      );

      if (productColorImages) {
        let basicCarpetColorId = subproduct.basicCarpetColorId;
        const productColorImages = product.productColorImages
          .filter(
            (productColorImage) =>
              productColorImage.basicCarpetColorId === basicCarpetColorId
          )
          .map(
            (productColorImage) => new ImageViewModel(productColorImage.image)
          );
      }
    }
    let images:
      | {
          image: Image;
          sortOrder: number | undefined;
          basicCarpetColorId: number | undefined;
        }[]
      | Image[]
      | ImageViewModel[] = productColorImages ? [...productColorImages] : [];

    if (otherImages && otherImages.length > 0) {
      images = [...otherImages, ...images];
    }
  }
}
