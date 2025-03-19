import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Design } from './entities/design.entity';
import { Design as DesignGraphQL } from './domain/design';
import { CreateDesignInput } from './dto/create-design.input';
import { UserCartModule } from '@/modules/user-cart/user-cart.module';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Design])],
      resolvers: [
        {
          EntityClass: Design,
          DTOClass: DesignGraphQL,
          CreateDTOClass: CreateDesignInput,
        },
      ],
    }),
    UserCartModule,
  ],
})
export class DesignModule {}
