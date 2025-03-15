import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateExportProductInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  price?: number;
}
