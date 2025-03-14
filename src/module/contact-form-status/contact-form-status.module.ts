import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ContactFormStatus } from './entities/contact-form-status.entity';
import { ContactFormStatus as ContactFormStatusGraphQL } from './domain/contact-form-status';
import { CreateContactFormStatusInput } from './dto/create-contact-form-status.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ContactFormStatus])],
      resolvers: [
        {
          EntityClass: ContactFormStatus,
          DTOClass: ContactFormStatusGraphQL,
          CreateDTOClass: CreateContactFormStatusInput,
        },
      ],
    }),
  ],
})
export class ContactFormStatusModule {}
