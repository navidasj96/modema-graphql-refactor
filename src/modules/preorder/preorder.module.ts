import { Module } from '@nestjs/common';
import { PreorderService } from './preorder.service';
import { PreorderResolver } from './preorder.resolver';
import { Preorder } from '@/modules/preorder/entities/preorder.entity';
import { Preorder as PreorderGraphQL } from '@/modules/preorder/domain/preorder';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePreorderInput } from '@/modules/preorder/dto/create-preorder.input';

@Module({
  providers: [PreorderResolver, PreorderService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Preorder])],
      resolvers: [
        {
          EntityClass: Preorder,
          DTOClass: PreorderGraphQL,
          CreateDTOClass: CreatePreorderInput,
        },
      ],
    }),
  ],
})
export class PreorderModule {}
