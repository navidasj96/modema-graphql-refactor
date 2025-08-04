import { ProductionPadStatusPure } from '@/modules/production-pad-status/domain/production-pad-status.pure';
import { ProductionPadPure } from '@/modules/production-pad/domain/production-pad.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductionPadProductionPadStatusPureDomain')
@ObjectType()
export class ProductionPadProductionPadStatusPure {
  @Field(() => ID)
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

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => ProductionPadPure)
  productionPad: ProductionPadPure;

  @Field(() => ProductionPadStatusPure)
  productionPadStatus: ProductionPadStatusPure;
}
