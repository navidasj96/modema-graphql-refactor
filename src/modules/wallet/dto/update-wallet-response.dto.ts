import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('updateWalletResponse')
export class UpdateWalletResponseDto {
  @Field()
  walletId: number;
}
