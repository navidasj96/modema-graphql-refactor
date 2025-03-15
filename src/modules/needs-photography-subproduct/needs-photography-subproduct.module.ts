import { Module } from '@nestjs/common';
import { NeedsPhotographySubproductService } from './needs-photography-subproduct.service';
import { NeedsPhotographySubproductResolver } from './needs-photography-subproduct.resolver';
import { NeedsPhotographySubproduct } from '@/modules/needs-photography-subproduct/entities/needs-photography-subproduct.entity';
import { NeedsPhotographySubproduct as NeedsPhotographySubproductGraphQL } from '@/modules/needs-photography-subproduct/domain/needs-photography-subproduct';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateNeedsPhotographySubproductInput } from '@/modules/needs-photography-subproduct/dto/create-needs-photography-subproduct.input';

@Module({
  providers: [
    NeedsPhotographySubproductResolver,
    NeedsPhotographySubproductService,
  ],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([NeedsPhotographySubproduct]),
      ],
      resolvers: [
        {
          EntityClass: NeedsPhotographySubproduct,
          DTOClass: NeedsPhotographySubproductGraphQL,
          CreateDTOClass: CreateNeedsPhotographySubproductInput,
        },
      ],
    }),
  ],
})
export class NeedsPhotographySubproductModule {}
