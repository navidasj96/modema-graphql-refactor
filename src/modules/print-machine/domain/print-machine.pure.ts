import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PrintMachinePureDomain')
@ObjectType()
export class PrintMachinePure {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date | null;

  @Field(() => Date, { nullable: true })
  updatedAt: Date | null;
}
