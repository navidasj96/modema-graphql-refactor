import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateCarpetSizeInput')
export class CreateCarpetSizeInput {
  @Field()
  id: number;

  @Field()
  width: number;

  @Field()
  length: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
