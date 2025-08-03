import { CustomerRequestPure } from '@/modules/customer-request/domain/customer-request.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CustomerRequestFilePureDomain')
@ObjectType()
export class CustomerRequestFilePure {
  @Field(() => ID)
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

  @Field(() => CustomerRequestPure)
  customerRequest: CustomerRequestPure;
}
