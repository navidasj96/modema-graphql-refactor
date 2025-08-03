import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('HyperPureDomain')
@ObjectType()
export class HyperPure {
  @Field(() => ID)
  code: string;

  @Field({ nullable: true })
  depot?: number;

  @Field({ nullable: true })
  produce?: number;
}
