import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class FedexAddressValidationAttribute {
  @IDField(() => ID)
  id: number;

  @Field()
  code: string;

  @Field()
  correctValue: boolean;

  @Field()
  description: string;

  @Field({ defaultValue: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Field({ defaultValue: () => "'0000-00-00 00:00:00'" })
  updatedAt: Date;
}
