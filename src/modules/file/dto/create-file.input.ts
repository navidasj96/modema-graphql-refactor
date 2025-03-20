import { Field, InputType } from '@nestjs/graphql';
import { FileNegotiation } from '@/modules/file-negotiation/domain/file-negotiation';

@InputType('CreateFileInput')
export class CreateFileInput {
  @Field()
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
