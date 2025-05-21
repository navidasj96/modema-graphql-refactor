import { Field, InputType } from '@nestjs/graphql';

@InputType('ChangeInvoicesStatusInput')
export class ChangeInvoicesStatusInput {
  @Field(() => [String])
  ids: string[];

  @Field(() => Number)
  statusId: number;
}
