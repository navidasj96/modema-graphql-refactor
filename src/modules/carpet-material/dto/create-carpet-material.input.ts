import { Field, InputType } from '@nestjs/graphql';
import { Design } from '@/modules/design/domain/design';

@InputType('CreateCarpetMaterialInput')
export class CreateCarpetMaterialInput {
  @Field()
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
