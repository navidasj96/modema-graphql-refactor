import { Field, InputType } from '@nestjs/graphql';
import { ExitControlItem } from '@/modules/exit-control-item/domain/exit-control-item';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateExitControlInput {
  @Field()
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
