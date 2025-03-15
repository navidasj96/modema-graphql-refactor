import { Field, InputType } from '@nestjs/graphql';

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
}
