import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';

@ObjectType()
export class SubproductsDepotInProgressOutput {
  @Field(() => GraphQLJSONObject)
  subproductsDepotInProgress: Record<string, any>;
}
