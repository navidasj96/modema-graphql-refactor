import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('ProductionPadRollPureDomain')
export class ProductionPadRollPure {
  @Field(() => ID)
  id: number;

  @Field()
  rollNumber: string;

  @Field()
  width: number;

  @Field()
  length: number;

  @Field()
  weight: number;

  @Field(() => String, { nullable: true })
  billNumber: string | null;

  @Field(() => Date, { nullable: true })
  closeDate: Date | null;

  @Field()
  isClosed: number;

  @Field(() => Number, { nullable: true })
  createdBy: number | null;

  @Field(() => Number, { nullable: true })
  closedBy: number | null;

  @Field(() => Date, { nullable: true })
  createdAt: Date | null;

  @Field(() => Date, { nullable: true })
  updatedAt: Date | null;

  @Field(() => UserPure, { nullable: true })
  closedBy2: UserPure;

  @Field(() => UserPure, { nullable: true })
  createdBy2: UserPure;
}
