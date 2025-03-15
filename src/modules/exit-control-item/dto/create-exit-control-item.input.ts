import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateExitControlItemInput {
  @Field()
  id: number;

  @Field()
  exitControlId: number;

  @Field()
  invoiceProductItemId: number;

  @Field()
  boxNo: number;

  @Field({ defaultValue: false })
  carpetScanned: boolean;

  @Field({ defaultValue: false })
  carpetPadScanned: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
