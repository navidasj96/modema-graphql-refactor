import { Module } from '@nestjs/common';
import { TmpSpanishNameService } from './tmp-spanish-name.service';
import { TmpSpanishNameResolver } from './tmp-spanish-name.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TmpSpanishName } from '@/modules/tmp-spanish-name/entities/tmp-spanish-name.entity';
import { TmpSpanishName as TmpSpanishNameGraphQL } from '@/modules/tmp-spanish-name/domain/tmp-spanish-name';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateTmpSpanishNameInput } from '@/modules/tmp-spanish-name/dto/create-tmp-spanish-name.input';

@Module({
  providers: [TmpSpanishNameResolver, TmpSpanishNameService],
  imports: [
    TypeOrmModule.forFeature([TmpSpanishName]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TmpSpanishName])],
      resolvers: [
        {
          EntityClass: TmpSpanishName,
          DTOClass: TmpSpanishNameGraphQL,
          CreateDTOClass: CreateTmpSpanishNameInput,
        },
      ],
    }),
  ],
})
export class TmpSpanishNameModule {}
