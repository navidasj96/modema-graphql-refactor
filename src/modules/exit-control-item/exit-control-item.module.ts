import { ExitControlItemReportProvider } from '@/modules/exit-control-item/providers/exit-control-item-report.provider';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ExitControlItem as ExitControlItemGaphQL } from './domain/exit-control-item';
import { CreateExitControlItemInput } from './dto/create-exit-control-item.input';
import { ExitControlItem } from './entities/exit-control-item.entity';
import { ExitControlItemResolver } from './exit-control-item.resolver';
import { ExitControlItemService } from './exit-control-item.service';

@Module({
  providers: [
    ExitControlItemResolver,
    ExitControlItemService,
    ExitControlItemReportProvider,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ExitControlItem])],
      resolvers: [
        {
          EntityClass: ExitControlItem,
          DTOClass: ExitControlItemGaphQL,
          CreateDTOClass: CreateExitControlItemInput,
        },
      ],
    }),
  ],
})
export class ExitControlItemModule {}
