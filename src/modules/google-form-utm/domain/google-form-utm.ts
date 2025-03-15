import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class GoogleFormUtm {
  @IDField(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  formId: string;

  @Field()
  url: string;

  @Field()
  utm: string;

  @Field({ defaultValue: false })
  status: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
