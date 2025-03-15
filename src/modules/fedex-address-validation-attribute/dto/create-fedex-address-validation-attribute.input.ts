import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFedexAddressValidationAttributeInput {
  @Field()
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
