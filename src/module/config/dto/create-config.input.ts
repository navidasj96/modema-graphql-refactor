import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateConfigInput {
  @Field()
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
