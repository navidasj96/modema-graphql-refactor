import { CreateJobInput } from './create-job.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJobInput extends PartialType(CreateJobInput) {
  @Field(() => Int)
  id: string;
}
