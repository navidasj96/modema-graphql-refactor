import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class TmpRfmReport {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  phone?: string;

  @Field()
  kharid1: string;

  @Field()
  kharid2: string;

  @Field()
  kharid3: string;

  @Field()
  kharid4: string;

  @Field()
  kharid5: string;
}
