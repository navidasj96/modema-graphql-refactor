import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Attribute {
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
