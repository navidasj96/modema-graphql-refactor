import { CreateBasicCarpetDesignInput } from './create-basic-carpet-design.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBasicCarpetDesignInput extends PartialType(CreateBasicCarpetDesignInput) {
  @Field(() => Int)
  id: number;
}
