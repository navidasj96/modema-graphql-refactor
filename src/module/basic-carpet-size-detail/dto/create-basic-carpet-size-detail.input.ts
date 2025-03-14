import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBasicCarpetSizeDetailInput {
  @Field()
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
}
