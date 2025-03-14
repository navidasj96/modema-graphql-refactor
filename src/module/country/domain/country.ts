import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Country {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  sortName?: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  phoneCode?: number;

  @Field({ nullable: true })
  chaparId?: number;

  @Field({ nullable: true })
  tipaxId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
