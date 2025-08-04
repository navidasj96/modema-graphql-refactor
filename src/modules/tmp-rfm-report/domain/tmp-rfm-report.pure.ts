import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('TmpRfmReportPureDomain')
@ObjectType()
export class TmpRfmReportPure {
  @Field(() => ID)
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
