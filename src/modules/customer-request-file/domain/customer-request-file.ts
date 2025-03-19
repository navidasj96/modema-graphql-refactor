import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { CustomerRequest } from '@/modules/customer-request/domain/customer-request';

@ObjectType()
export class CustomerRequestFile {
  @IDField(() => ID)
  id: number;

  @Field()
  customerRequestId: number;

  @Field({ defaultValue: '/' })
  path: string;

  @Field()
  filename: string;

  @Field()
  mime: string;

  @Field()
  originalFilename: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CustomerRequest)
  customerRequest: CustomerRequest;
}
