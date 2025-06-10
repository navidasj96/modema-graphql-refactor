import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceProductItemsInput {
  @Field(() => [Number])
  ids: number[];

  @Field(() => Number)
  selectedStatus: number;

  @Field(() => String, { nullable: true })
  deliverToRepositoryDate?: string;
}
