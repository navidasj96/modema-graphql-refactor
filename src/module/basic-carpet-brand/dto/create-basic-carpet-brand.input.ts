import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBasicCarpetBrandInput {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
