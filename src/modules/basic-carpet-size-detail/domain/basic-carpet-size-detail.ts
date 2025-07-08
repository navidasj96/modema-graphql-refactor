import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { FilterableRelation, IDField } from '@ptc-org/nestjs-query-graphql';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';

@InputType('BasicCarpetSizeDetailDomain')
@ObjectType()
@FilterableRelation('basicCarpetSize', () => BasicCarpetSize)
export class BasicCarpetSizeDetail {
  @IDField(() => ID)
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

  @Field(() => BasicCarpetSize)
  basicCarpetSize: BasicCarpetSize;
}
