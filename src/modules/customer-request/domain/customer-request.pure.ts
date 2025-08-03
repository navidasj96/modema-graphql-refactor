import { CustomerRequestFilePure } from '@/modules/customer-request-file/domain/customer-request-file.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CustomerRequestPureDomain')
@ObjectType()
export class CustomerRequestPure {
  @Field(() => ID)
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

  @Field(() => [CustomerRequestFilePure])
  customerRequestFiles: CustomerRequestFilePure[];

  @Field(() => UserPure)
  user: UserPure;
}
