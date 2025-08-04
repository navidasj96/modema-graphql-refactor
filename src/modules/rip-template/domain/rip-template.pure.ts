import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { PrintRipPure } from '@/modules/print-rip/domain/print-rip.pure';
import { RipTemplateItemPure } from '@/modules/rip-template-item/domain/rip-template-item.pure';
import { UserPure } from '@/modules/user/domain/user.pure';

@InputType('RipTemplatePureDomain')
@ObjectType()
export class RipTemplatePure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  name: string;

  @Field({ nullable: true })
  userId?: number;

  @Field(() => [PrintRipPure])
  printRips: PrintRipPure[];

  @Field(() => [RipTemplateItemPure])
  ripTemplateItems: RipTemplateItemPure[];

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;
}
