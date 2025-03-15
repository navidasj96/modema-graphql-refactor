import { Module } from '@nestjs/common';
import { AutomationRfmScore as AutomationRfmScoreGraphQL } from './domain/automation-rfm-score';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateAutomationRfmScoreInput } from './dto/create-automation-rfm-score.input';
import { AutomationRfmScore } from './entities/automation-rfm-score.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AutomationRfmScore])],
      resolvers: [
        {
          EntityClass: AutomationRfmScore,
          DTOClass: AutomationRfmScoreGraphQL,
          CreateDTOClass: CreateAutomationRfmScoreInput,
        },
      ],
    }),
  ],
})
export class AutomationRfmScoreModule {}
