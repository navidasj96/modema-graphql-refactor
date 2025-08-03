import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ExportProductPureDomain')
@ObjectType()
export class ExportProductPure {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  price?: number;
}
