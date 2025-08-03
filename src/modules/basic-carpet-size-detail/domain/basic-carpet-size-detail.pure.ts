import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('BasicCarpetSizeDetailPureDomain')
@ObjectType()
export class BasicCarpetSizeDetailPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  basicCarpetSizeId?: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  detailText?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  titleEn?: string;

  @Field({ nullable: true })
  detailTextEn?: string;

  @Field(() => BasicCarpetSizePure)
  basicCarpetSize: BasicCarpetSizePure;
}
