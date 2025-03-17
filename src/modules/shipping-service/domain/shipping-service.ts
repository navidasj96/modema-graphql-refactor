import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ShippingService {
  @IDField(() => ID)
  id: number;

  @Field()
  code: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  fullDescription?: string;

  @Field()
  isActive: boolean;
}
