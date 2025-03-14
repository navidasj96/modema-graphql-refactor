import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ContactForm } from './entities/contact-form.entity';
import { ContactForm as ContactFormGraphQL } from './domain/contact-form';
import { CreateContactFormInput } from './dto/create-contact-form.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ContactForm])],
      resolvers: [
        {
          EntityClass: ContactForm,
          DTOClass: ContactFormGraphQL,
          CreateDTOClass: CreateContactFormInput,
        },
      ],
    }),
  ],
})
export class ContactFormModule {}
