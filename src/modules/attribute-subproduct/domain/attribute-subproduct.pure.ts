import { AttributeItemPure } from '@/modules/attribute-item/domain/attribute-item.pure';
import { AttributePure } from '@/modules/attribute/domain/attribute.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('AttributeSubproductPureDomain')
@ObjectType()
export class AttributeSubproductPure {
  @Field()
  id: number;

  @Field()
  attributeId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  attributeItemId?: number;

  @Field({ nullable: true })
  value?: string;

  @Field({ nullable: true })
  isChecked?: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => AttributePure)
  attribute: AttributePure;

  @Field(() => AttributeItemPure)
  attributeItem?: AttributeItemPure;

  @Field(() => SubproductPure)
  subproduct: SubproductPure;
}
