import { Field, InputType } from '@nestjs/graphql';

@InputType()
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
}
