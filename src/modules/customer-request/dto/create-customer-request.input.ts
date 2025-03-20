import { Field, InputType } from '@nestjs/graphql';
import { CustomerRequestFile } from '@/modules/customer-request-file/domain/customer-request-file';
import { User } from '@/modules/user/domain/user';

@InputType('CreateCustomerRequestInput')
export class CreateCustomerRequestInput {
  @Field()
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
