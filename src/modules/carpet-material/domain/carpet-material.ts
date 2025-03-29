import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Design } from '@/modules/design/domain/design';

@InputType('CarpetMaterialDomain')
@ObjectType()
export class CarpetMaterial {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  pricePerInch: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Design])
  designs: Design[];
}
