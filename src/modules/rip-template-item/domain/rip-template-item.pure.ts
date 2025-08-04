import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { RipTemplatePure } from '@/modules/rip-template/domain/rip-template.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('RipTemplateItemPureDomain')
@ObjectType()
export class RipTemplateItemPure {
  @Field(() => ID)
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

  @Field(() => BasicCarpetSizePure)
  basicCarpetSize: BasicCarpetSizePure;

  @Field(() => RipTemplatePure)
  ripTemplate: RipTemplatePure;
}
