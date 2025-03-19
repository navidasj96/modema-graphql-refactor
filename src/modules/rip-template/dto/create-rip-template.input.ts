import { Field, InputType } from '@nestjs/graphql';
import { PrintRip } from '@/modules/print-rip/domain/print-rip';
import { RipTemplateItem } from '@/modules/rip-template-item/domain/rip-template-item';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateRipTemplateInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  name: string;

  @Field({ nullable: true })
  userId?: number;

  @Field(() => [PrintRip])
  printRips: PrintRip[];

  @Field(() => [RipTemplateItem])
  ripTemplateItems: RipTemplateItem[];

  @Field(() => User, { nullable: true })
  user?: User;
}
