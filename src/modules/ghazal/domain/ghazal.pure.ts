import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('GhazalPureDomain')
@ObjectType()
export class GhazalPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  explanation?: string;

  @Field({ nullable: true })
  poem?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
