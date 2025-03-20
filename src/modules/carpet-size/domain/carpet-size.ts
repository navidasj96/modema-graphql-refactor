import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('CarpetSizeDomain')
@ObjectType()
export class CarpetSize {
  @IDField(() => ID)
  id: number;

  @Field()
  width: number;

  @Field()
  length: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
