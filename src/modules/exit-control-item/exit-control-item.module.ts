import { Module } from '@nestjs/common';
import { ExitControlItemService } from './exit-control-item.service';
import { ExitControlItemResolver } from './exit-control-item.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ExitControlItem } from './entities/exit-control-item.entity';
import { ExitControlItem as ExitControlItemGaphQL } from './domain/exit-control-item';
import { CreateExitControlItemInput } from './dto/create-exit-control-item.input';

@Module({
  providers: [ExitControlItemResolver, ExitControlItemService],
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
