import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ExitControlItem } from '@/modules/exit-control-item/domain/exit-control-item';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class ExitControl {
  @IDField(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  exitDate: string;

  @Field()
  driverName: string;

  @Field()
  driverPhone: string;

  @Field()
  plateNo: string;

  @Field({ defaultValue: false })
  isClosed: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ExitControlItem])
  exitControlItems: ExitControlItem[];

  @Field(() => User)
  user: User;
}
