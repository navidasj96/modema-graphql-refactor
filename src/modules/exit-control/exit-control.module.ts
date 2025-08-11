import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ExitControl as ExitControlGraphQL } from './domain/exit-control';
import { CreateExitControlInput } from './dto/create-exit-control.input';
import { ExitControl } from './entities/exit-control.entity';
import { ExitControlResolver } from './exit-control.resolver';
import { ExitControlService } from './exit-control.service';

@Module({
  providers: [ExitControlResolver, ExitControlService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ExitControl])],
      resolvers: [
        {
          EntityClass: ExitControl,
          DTOClass: ExitControlGraphQL,
          CreateDTOClass: CreateExitControlInput,
        },
      ],
    }),
  ],
})
export class ExitControlModule {}
