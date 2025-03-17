import { Module } from '@nestjs/common';
import { ReturnTypeService } from './return-type.service';
import { ReturnTypeResolver } from './return-type.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnType } from '@/modules/return-type/entities/return-type.entity';
import { ReturnType as ReturnTypeGraphQL } from '@/modules/return-type/domain/return-type';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnTypeInput } from '@/modules/return-type/dto/create-return-type.input';

@Module({
  providers: [ReturnTypeResolver, ReturnTypeService],
  imports: [
    TypeOrmModule.forFeature([ReturnType]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReturnType])],
      resolvers: [
        {
          EntityClass: ReturnType,
          DTOClass: ReturnTypeGraphQL,
          CreateDTOClass: CreateReturnTypeInput,
        },
      ],
    }),
  ],
})
export class ReturnTypeModule {}
