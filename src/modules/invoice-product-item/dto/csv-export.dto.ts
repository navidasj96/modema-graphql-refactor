import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class CSVExportDto {
  @Field(() => [GraphQLJSON])
  data: any[];

  @Field(() => [String])
  columns: string[];

  @Field(() => String)
  filename: string;
}
