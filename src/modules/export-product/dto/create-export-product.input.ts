import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateExportProductInput')
export class CreateExportProductInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  price?: number;
}
