import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateModemaAcceleratorInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  jobCategory: string;

  @Field()
  phone: string;

  @Field()
  hasOffice: string;

  @Field()
  pro: string;

  @Field()
  instagram: string;

  @Field()
  details: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
