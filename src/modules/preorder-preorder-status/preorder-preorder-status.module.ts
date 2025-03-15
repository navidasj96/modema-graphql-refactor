import { Module } from '@nestjs/common';
import { PreorderPreorderStatusService } from './preorder-preorder-status.service';
import { PreorderPreorderStatusResolver } from './preorder-preorder-status.resolver';
import { PreorderPreorderStatus } from '@/modules/preorder-preorder-status/entities/preorder-preorder-status.entity';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Preorder as PreorderGraphQL } from '@/modules/preorder/domain/preorder';
import { CreatePreorderInput } from '@/modules/preorder/dto/create-preorder.input';

@Module({
  providers: [PreorderPreorderStatusResolver, PreorderPreorderStatusService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PreorderPreorderStatus])],
      resolvers: [
        {
          EntityClass: PreorderPreorderStatus,
          DTOClass: PreorderGraphQL,
          CreateDTOClass: CreatePreorderInput,
        },
      ],
    }),
  ],
})
export class PreorderPreorderStatusModule {}
