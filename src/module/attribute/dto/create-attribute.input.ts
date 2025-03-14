import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAttributeInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  type: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
