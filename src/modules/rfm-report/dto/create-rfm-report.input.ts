import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRfmReportInput {
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

  @Field()
  kharid6: string;

  @Field()
  kharid7: string;

  @Field()
  kharid8: string;

  @Field()
  kharid9: string;

  @Field()
  kharid10: string;

  @Field()
  kharid11: string;

  @Field()
  kharid12: string;

  @Field()
  kharid13: string;

  @Field()
  kharid14: string;

  @Field()
  kharid15: string;

  @Field()
  kharid16: string;

  @Field()
  kharid17: string;

  @Field()
  kharid18: string;

  @Field()
  kharid19: string;

  @Field()
  kharid20: string;
}
