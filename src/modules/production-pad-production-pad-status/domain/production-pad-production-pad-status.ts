import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ProductionPadProductionPadStatus {
  @IDField(() => ID)
  id: number;

  @Field()
  productionPadId: number;

  @Field()
  productionPadStatusId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
