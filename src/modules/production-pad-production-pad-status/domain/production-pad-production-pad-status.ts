import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';
import { ProductionPad } from '@/modules/production-pad/domain/production-pad';
import { ProductionPadStatus } from '@/modules/production-pad-status/domain/production-pad-status';

@InputType('ProductionPadProductionPadStatusDomain')
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

  @Field(() => User)
  user: User;

  @Field(() => ProductionPad)
  productionPad: ProductionPad;

  @Field(() => ProductionPadStatus)
  productionPadStatus: ProductionPadStatus;
}
