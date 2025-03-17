import { Module } from '@nestjs/common';
import { RipTemplateItemService } from './rip-template-item.service';
import { RipTemplateItemResolver } from './rip-template-item.resolver';
import { RipTemplateItem } from '@/modules/rip-template-item/entities/rip-template-item.entity';
import { RipTemplateItem as RipTemplateItemGraphQL } from '@/modules/rip-template-item/domain/rip-template-item';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateRipTemplateItemInput } from '@/modules/rip-template-item/dto/create-rip-template-item.input';

@Module({
  providers: [RipTemplateItemResolver, RipTemplateItemService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([RipTemplateItem])],
      resolvers: [
        {
          EntityClass: RipTemplateItem,
          DTOClass: RipTemplateItemGraphQL,
          CreateDTOClass: CreateRipTemplateItemInput,
        },
      ],
    }),
  ],
})
export class RipTemplateItemModule {}
