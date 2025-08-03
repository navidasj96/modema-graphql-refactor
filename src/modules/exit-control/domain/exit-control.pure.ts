import { ExitControlItemPure } from '@/modules/exit-control-item/domain/exit-control-item.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ExitControlPureDomain')
@ObjectType()
export class ExitControlPure {
  @Field(() => ID)
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

  @Field(() => [ExitControlItemPure])
  exitControlItems: ExitControlItemPure[];

  @Field(() => UserPure)
  user: UserPure;
}
