import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class CarpetShape {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  minWidth: number;

  @Field()
  maxWidth: number;

  @Field()
  minLength: number;

  @Field()
  maxLength: number;

  @Field({ defaultValue: true })
  hasLength: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;
}
