import { PreorderPreorderStatusPure } from '@/modules/preorder-preorder-status/domain/preorder-preorder-status.pure';
import { PreorderPure } from '@/modules/preorder/domain/preorder.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PreorderStatusPureDomain')
@ObjectType()
export class PreorderStatusPure {
  @Field(() => ID)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [PreorderPreorderStatusPure])
  preorderPreorderStatuses: PreorderPreorderStatusPure[];

  @Field(() => [PreorderPure])
  preorders: PreorderPure[];
}
