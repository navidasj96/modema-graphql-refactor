import { Module } from '@nestjs/common';
import { GoogleFormUtmService } from './google-form-utm.service';
import { GoogleFormUtmResolver } from './google-form-utm.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { GoogleFormUtm } from './entities/google-form-utm.entity';
import { GoogleFormUtm as GoogleFormUtmGraphQL } from './domain/google-form-utm';
import { CreateGoogleFormUtmInput } from './dto/create-google-form-utm.input';

@Module({
  providers: [GoogleFormUtmResolver, GoogleFormUtmService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([GoogleFormUtm])],
      resolvers: [
        {
          EntityClass: GoogleFormUtm,
          DTOClass: GoogleFormUtmGraphQL,
          CreateDTOClass: CreateGoogleFormUtmInput,
        },
      ],
    }),
  ],
})
export class GoogleFormUtmModule {}
