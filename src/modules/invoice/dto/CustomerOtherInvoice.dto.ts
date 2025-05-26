import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CustomerOtherInvoiceDto {
  @Field()
  id: number;

  @Field()
  status: string;

  // Add more fields as needed
}
