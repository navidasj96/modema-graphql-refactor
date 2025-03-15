import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateModelHasPermissionInput {
  @Field()
  permissionId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: string;
}
