import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('AttributePureDomain')
@ObjectType()
export class AttributePure {
  @Field(() => ID)
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
