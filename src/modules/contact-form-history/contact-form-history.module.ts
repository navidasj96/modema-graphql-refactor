import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ContactFormHistory } from './entities/contact-form-history.entity';
import { ContactFormHistory as ContactFormHistoryGraphQL } from './domain/contact-form-history';
import { CreateContactFormHistoryInput } from './dto/create-contact-form-history.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ContactFormHistory])],
      resolvers: [
        {
          EntityClass: ContactFormHistory,
          DTOClass: ContactFormHistoryGraphQL,
          CreateDTOClass: CreateContactFormHistoryInput,
        },
      ],
    }),
  ],
})
export class ContactFormHistoryModule {}
