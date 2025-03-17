import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class RipTemplateItem {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  ripTemplateId: number;

  @Field()
  basicCarpetSizeId: number;

  @Field()
  width: number;

  @Field()
  length: number;
}
