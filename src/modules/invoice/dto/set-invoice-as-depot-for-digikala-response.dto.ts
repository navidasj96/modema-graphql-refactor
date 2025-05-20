import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SetInvoiceAsDepotForDigikalaResponseDto {
  @Field()
  status: true | false;

  @Field()
  message: string;
}
