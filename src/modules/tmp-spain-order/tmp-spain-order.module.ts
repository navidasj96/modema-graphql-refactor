import { Module } from '@nestjs/common';
import { TmpSpainOrderService } from './tmp-spain-order.service';
import { TmpSpainOrderResolver } from './tmp-spain-order.resolver';
import { TmpSpainOrder } from '@/modules/tmp-spain-order/entities/tmp-spain-order.entity';
import { TmpSpainOrder as TmpSpainOrderGraphQL } from '@/modules/tmp-spain-order/domain/tmp-spain-order';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateTmpSpainOrderInput } from '@/modules/tmp-spain-order/dto/create-tmp-spain-order.input';

@Module({
  providers: [TmpSpainOrderResolver, TmpSpainOrderService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TmpSpainOrder])],
      resolvers: [
        {
          EntityClass: TmpSpainOrder,
          DTOClass: TmpSpainOrderGraphQL,
          CreateDTOClass: CreateTmpSpainOrderInput,
        },
      ],
    }),
  ],
})
export class TmpSpainOrderModule {}
