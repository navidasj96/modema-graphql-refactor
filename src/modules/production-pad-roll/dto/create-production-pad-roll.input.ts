import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('CreateProductionPadRollInput')
export class CreateProductionPadRollInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
