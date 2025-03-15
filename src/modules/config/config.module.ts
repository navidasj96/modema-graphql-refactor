import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Config } from './entities/config.entity';
import { Config as ConfigGraphQL } from './domain/config';
import { CreateConfigInput } from './dto/create-config.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Config])],
      resolvers: [
        {
          EntityClass: Config,
          DTOClass: ConfigGraphQL,
          CreateDTOClass: CreateConfigInput,
        },
      ],
    }),
  ],
})
export class ConfigModule {}
