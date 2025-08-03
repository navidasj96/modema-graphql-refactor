import { FileNegotiation } from '@/modules/file-negotiation/domain/file-negotiation';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('FilePureDomain')
@ObjectType()
export class FilePure {
  @Field(() => ID)
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
