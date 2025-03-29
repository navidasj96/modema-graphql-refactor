import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';
import { RipTemplate } from '@/modules/rip-template/domain/rip-template';

@InputType('RipTemplateItemDomain')
@ObjectType()
export class RipTemplateItem {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  ripTemplateId: number;

  @Field()
  basicCarpetSizeId: number;

  @Field()
  width: number;

  @Field()
  length: number;

  @Field(() => BasicCarpetSize)
  basicCarpetSize: BasicCarpetSize;

  @Field(() => RipTemplate)
  ripTemplate: RipTemplate;
}
