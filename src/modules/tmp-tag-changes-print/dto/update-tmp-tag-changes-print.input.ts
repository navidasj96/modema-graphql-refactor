import { CreateTmpTagChangesPrintInput } from './create-tmp-tag-changes-print.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTmpTagChangesPrintInput extends PartialType(CreateTmpTagChangesPrintInput) {
  @Field(() => Int)
  id: number;
}
