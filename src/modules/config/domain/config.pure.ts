import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ConfigPureDomain')
@ObjectType()
export class Config {
  @Field(() => ID)
  id: number;

  @Field()
  key: string;

  @Field({ nullable: true })
  value?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
