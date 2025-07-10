import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableUnPagedRelation,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';
import { PrintRip } from '@/modules/print-rip/domain/print-rip';
import { RipTemplateItem } from '@/modules/rip-template-item/domain/rip-template-item';
import { User } from '@/modules/user/domain/user';

@InputType('RipTemplateDomain')
@QueryOptions({
  pagingStrategy: PagingStrategies.NONE,
})
@FilterableUnPagedRelation('ripTemplateItems', () => RipTemplateItem)
@ObjectType()
export class RipTemplate {
  @IDField(() => ID)
  id: number;

  @FilterableField({ nullable: true })
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
