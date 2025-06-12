import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerVideoProduct } from '@/modules/customer-video-product/entities/customer-video-product.entity';
import { ProductVideo } from '@/modules/product-video/entities/product-video.entity';
import { ReturnRequestItemVideo } from '@/modules/return-request-item-video/entities/return-request-item-video.entity';
import { SubproductVideo } from '@/modules/subproduct-video/entities/subproduct-video.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';

@Entity('videos', { schema: 'modema' })
export class Video {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'filename', length: 191 })
  filename: string;

  @Column('varchar', { name: 'mime', length: 191 })
  mime: string;

  @Column('varchar', { name: 'original_filename', length: 191 })
  originalFilename: string;

  @Column('varchar', { name: 'upload_source', length: 191 })
  uploadSource: string;

  @Column('varchar', { name: 'path', length: 191, default: () => "'/'" })
  path: string;

  @Column('varchar', { name: 'alt_text', nullable: true, length: 191 })
  altText?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => CustomerVideoProduct,
    (customerVideoProduct) => customerVideoProduct.video
  )
  customerVideoProducts: CustomerVideoProduct[];

  @OneToMany(() => ProductVideo, (productVideo) => productVideo.video)
  productVideos: ProductVideo[];

  @OneToMany(
    () => ReturnRequestItemVideo,
    (returnRequestItemVideo) => returnRequestItemVideo.video
  )
  returnRequestItemVideos: ReturnRequestItemVideo[];

  @OneToMany(() => SubproductVideo, (subproductVideo) => subproductVideo.video)
  subproductVideos: SubproductVideo[];

  @OneToMany(() => Subproduct, (subproduct) => subproduct.video)
  subproducts: Subproduct[];
}
