import { Module } from '@nestjs/common';
import { ReturnRequestItemVideoService } from './return-request-item-video.service';
import { ReturnRequestItemVideoResolver } from './return-request-item-video.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReturnRequestItemVideo } from '@/modules/return-request-item-video/entities/return-request-item-video.entity';
import { ReturnRequestItemVideo as ReturnRequestItemVideoGraphQL } from '@/modules/return-request-item-video/domain/return-request-item-video';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateReturnRequestItemVideoInput } from '@/modules/return-request-item-video/dto/create-return-request-item-video.input';

@Module({
  providers: [ReturnRequestItemVideoResolver, ReturnRequestItemVideoService],
  imports: [
    TypeOrmModule.forFeature([ReturnRequestItemVideo]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ReturnRequestItemVideo])],
      resolvers: [
        {
          EntityClass: ReturnRequestItemVideo,
          DTOClass: ReturnRequestItemVideoGraphQL,
          CreateDTOClass: CreateReturnRequestItemVideoInput,
        },
      ],
    }),
  ],
})
export class ReturnRequestItemVideoModule {}
