import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StatusValue {
  @Field()
  key: string;

  @Field(() => Int)
  value: number;
}

@ObjectType()
export class ReportPadsToProduceOutput {
  @Field(() => Int)
  size_id: number;

  @Field()
  size_title: string;

  @Field(() => Int)
  total: number;

  @Field(() => [StatusValue])
  statuses: StatusValue[];
}
