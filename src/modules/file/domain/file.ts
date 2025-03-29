import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { FileNegotiation } from '@/modules/file-negotiation/domain/file-negotiation';

@InputType('FileDomain')
@ObjectType()
export class File {
  @IDField(() => ID)
  id: number;

  @Field()
  filename: string;

  @Field()
  mime: string;

  @Field()
  originalFilename: string;

  @Field()
  uploadSource: string;

  @Field({ defaultValue: '/' })
  path: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [FileNegotiation])
  fileNegotiations: FileNegotiation[];
}
