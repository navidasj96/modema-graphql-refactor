import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateTmpRfmReportInput')
export class CreateTmpRfmReportInput {
  @Field()
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
