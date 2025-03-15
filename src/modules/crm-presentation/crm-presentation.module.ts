import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CrmPresentation } from './entities/crm-presentation.entity';
import { CrmPresentation as CrmPresentationGraphQL } from './domain/crm-presentation';
import { CreateCrmPresentationInput } from './dto/create-crm-presentation.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CrmPresentation])],
      resolvers: [
        {
          EntityClass: CrmPresentation,
          DTOClass: CrmPresentationGraphQL,
          CreateDTOClass: CreateCrmPresentationInput,
        },
      ],
    }),
  ],
})
export class CrmPresentationModule {}
