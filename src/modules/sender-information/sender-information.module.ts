import { Module } from '@nestjs/common';
import { SenderInformationService } from './sender-information.service';
import { SenderInformationResolver } from './sender-information.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SenderInformation } from '@/modules/sender-information/entities/sender-information.entity';
import { SenderInformation as SenderInformationGraphQL } from '@/modules/sender-information/domain/sender-information';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateSenderInformationInput } from '@/modules/sender-information/dto/create-sender-information.input';

@Module({
  providers: [SenderInformationResolver, SenderInformationService],
  imports: [
    TypeOrmModule.forFeature([SenderInformation]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SenderInformation])],
      resolvers: [
        {
          EntityClass: SenderInformation,
          DTOClass: SenderInformationGraphQL,
          CreateDTOClass: CreateSenderInformationInput,
        },
      ],
    }),
  ],
})
export class SenderInformationModule {}
