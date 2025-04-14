import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field(() => Int, { nullable: true })
  isActive?: number;

  @Field(() => Int, { nullable: true })
  isGuest?: number;

  @Field(() => Int, { nullable: true })
  phoneVerified?: number;

  @Field(() => Int, { nullable: true })
  sepidarId?: number;

  @Field(() => Int, { nullable: true })
  sepidarCode?: number;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  isPreorderApplicant?: boolean;
}
