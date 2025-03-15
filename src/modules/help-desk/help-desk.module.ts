import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { HelpDesk } from './entities/help-desk.entity';
import { HelpDesk as HelpDeskGraphQL } from './domain/help-desk';
import { CreateHelpDeskInput } from './dto/create-help-desk.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([HelpDesk])],
      resolvers: [
        {
          EntityClass: HelpDesk,
          DTOClass: HelpDeskGraphQL,
          CreateDTOClass: CreateHelpDeskInput,
        },
      ],
    }),
  ],
})
export class HelpDeskModule {}
