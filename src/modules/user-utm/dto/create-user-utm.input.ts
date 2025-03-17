import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserUtmInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  utmId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
