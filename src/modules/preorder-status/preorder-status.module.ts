import { Module } from '@nestjs/common';
import { PreorderStatusService } from './preorder-status.service';
import { PreorderStatusResolver } from './preorder-status.resolver';
import { PreorderStatus } from '@/modules/preorder-status/entities/preorder-status.entity';
import { PreorderStatus as PreorderStatusGraphQL } from '@/modules/preorder-status/domain/preorder-status';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePreorderStatusInput } from '@/modules/preorder-status/dto/create-preorder-status.input';

@Module({
  providers: [PreorderStatusResolver, PreorderStatusService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PreorderStatus])],
      resolvers: [
        {
          EntityClass: PreorderStatus,
          DTOClass: PreorderStatusGraphQL,
          CreateDTOClass: CreatePreorderStatusInput,
        },
      ],
    }),
  ],
})
export class PreorderStatusModule {}
