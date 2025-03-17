import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ProductionRoll {
  @IDField(() => ID)
  id: number;

  @Field()
  rollNumber: string;

  @Field()
  width: number;

  @Field()
  length: number;

  @Field()
  weight: number;

  @Field({ nullable: true })
  billNumber?: string;

  @Field({ nullable: true })
  closeDate?: Date;

  @Field()
  isShaggy: boolean;

  @Field({ nullable: true })
  shaggyColor?: string;

  @Field()
  isClosed: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  createdBy?: number;

  @Field({ nullable: true })
  closedBy?: number;
}
