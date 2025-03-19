import { Field, InputType } from '@nestjs/graphql';
import { PreorderPreorderStatus } from '@/modules/preorder-preorder-status/domain/preorder-preorder-status';
import { Preorder } from '@/modules/preorder/domain/preorder';

@InputType()
export class CreatePreorderStatusInput {
  @Field()
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [PreorderPreorderStatus])
  preorderPreorderStatuses: PreorderPreorderStatus[];

  @Field(() => [Preorder])
  preorders: Preorder[];
}
