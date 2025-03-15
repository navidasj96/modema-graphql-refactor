import { Module } from '@nestjs/common';
import { LabelService } from './label.service';
import { LabelResolver } from './label.resolver';
import { Label } from '@/modules/label/entities/label.entity';
import { Label as LabelGraphQL } from '@/modules/label/domain/label';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateLabelInput } from '@/modules/label/dto/create-label.input';

@Module({
  providers: [LabelResolver, LabelService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Label])],
      resolvers: [
        {
          EntityClass: Label,
          DTOClass: LabelGraphQL,
          CreateDTOClass: CreateLabelInput,
        },
      ],
    }),
  ],
})
export class LabelModule {}
