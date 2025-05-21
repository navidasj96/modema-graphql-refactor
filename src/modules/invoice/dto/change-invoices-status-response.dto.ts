import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChangeInvoicesStatusResponseDto {
  @Field()
  status: true | false;

  @Field()
  message: string;
}
