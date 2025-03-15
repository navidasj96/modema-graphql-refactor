import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Discount {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field()
  type: number;

  @Field()
  discount: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field({ nullable: true })
  minProductPrice?: string;

  @Field({ nullable: true })
  maxDiscountPrice?: string;

  @Field({ defaultValue: false })
  withPad: boolean;

  @Field({ defaultValue: false })
  redisIsDeleted: boolean;

  @Field({ defaultValue: false })
  redisForShowoffIsDeleted: boolean;

  @Field({ nullable: true })
  showoffStartDate?: Date;

  @Field({ nullable: true })
  showoffEndDate?: Date;

  @Field({ defaultValue: false })
  hasStockCountOnly: boolean;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true, defaultValue: 1 })
  isActive?: number;

  @Field({ nullable: true })
  createdBy?: number;

  @Field({ nullable: true })
  updatedBy?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
