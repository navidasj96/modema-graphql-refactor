import { Module } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorResolver } from './visitor.resolver';
import { Visitor } from '@/modules/visitor/entities/visitor.entity';
import { Visitor as VisitorGraphQL } from '@/modules/visitor/domain/visitor';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateVisitorInput } from '@/modules/visitor/dto/create-visitor.input';

@Module({
  providers: [VisitorResolver, VisitorService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Visitor])],
      resolvers: [
        {
          EntityClass: Visitor,
          DTOClass: VisitorGraphQL,
          CreateDTOClass: CreateVisitorInput,
        },
      ],
    }),
  ],
  exports: [VisitorService],
})
export class VisitorModule {}
