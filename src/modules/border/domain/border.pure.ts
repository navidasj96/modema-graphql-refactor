import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('BorderPureDomain')
@ObjectType()
export class BorderPure {
  @Field(() => ID)
  id: number;

  @Field()
  code: string;

  @Field({ nullable: true })
  count?: number;
}
