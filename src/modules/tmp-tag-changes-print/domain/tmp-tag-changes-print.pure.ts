import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('TmpTagChangesPrintPureDomain')
@ObjectType()
export class TmpTagChangesPrintPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  size?: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  count?: number;

  @Field({ nullable: true })
  oldCode?: string;
}
