import { Module } from '@nestjs/common';
import { SubproductService } from './subproduct.service';
import { SubproductResolver } from './subproduct.resolver';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { Subproduct as SubproductGraphQL } from '@/modules/subproduct/domain/subproduct';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSubproductInput } from '@/modules/subproduct/dto/create-subproduct.input';
import { SubproductViewModelFactoryProvider } from '@/modules/subproduct/providers/subproduct-viewModel-factory.provider';

@Module({
  providers: [
    SubproductResolver,
    SubproductService,
    SubproductViewModelFactoryProvider,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Subproduct])],
      resolvers: [
        {
          EntityClass: Subproduct,
          DTOClass: SubproductGraphQL,
          CreateDTOClass: CreateSubproductInput,
        },
      ],
    }),
  ],
  exports: [SubproductService],
})
export class SubproductModule {}
