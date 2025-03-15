import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { HeardAboutUsOption } from './entities/heard-about-us-option.entity';
import { HeardAboutUsOption as HeardAboutUsOptionGraphQL } from './domain/heard-about-us-option';
import { CreateHeardAboutUsOptionInput } from './dto/create-heard-about-us-option.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([HeardAboutUsOption])],
      resolvers: [
        {
          EntityClass: HeardAboutUsOption,
          DTOClass: HeardAboutUsOptionGraphQL,
          CreateDTOClass: CreateHeardAboutUsOptionInput,
        },
      ],
    }),
  ],
})
export class HeardAboutUsOptionModule {}
