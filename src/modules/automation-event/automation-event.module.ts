import { Module } from '@nestjs/common';
import { AutomationEvent } from './entities/automation-event.entity';
import { AutomationEvent as AutomationEventGraphQL } from './domain/automation-event';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateAutomationEventInput } from './dto/create-automation-event.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AutomationEvent])],
      resolvers: [
        {
          EntityClass: AutomationEvent,
          DTOClass: AutomationEventGraphQL,
          CreateDTOClass: CreateAutomationEventInput,
        },
      ],
    }),
  ],
})
export class AutomationEventModule {}
