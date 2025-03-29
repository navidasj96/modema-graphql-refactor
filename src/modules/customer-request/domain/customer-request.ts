import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { CustomerRequestFile } from '@/modules/customer-request-file/domain/customer-request-file';
import { User } from '@/modules/user/domain/user';

@InputType('CustomerRequestDomain')
@ObjectType()
export class CustomerRequest {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  uuid?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CustomerRequestFile])
  customerRequestFiles: CustomerRequestFile[];

  @Field(() => User)
  user: User;
}
