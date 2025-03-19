import { Field, InputType } from '@nestjs/graphql';
import { CustomerRequest } from '@/modules/customer-request/domain/customer-request';

@InputType()
export class CreateCustomerRequestFileInput {
  @Field()
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
