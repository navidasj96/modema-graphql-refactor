import { Module } from '@nestjs/common';
import { HolidayService } from './holiday.service';
import { HolidayResolver } from './holiday.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Holiday } from './entities/holiday.entity';
import { Holiday as HolidayGraphQL } from './domain/holiday';
import { CreateHolidayInput } from './dto/create-holiday.input';

@Module({
  providers: [HolidayResolver, HolidayService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Holiday])],
      resolvers: [
        {
          EntityClass: Holiday,
          DTOClass: HolidayGraphQL,
          CreateDTOClass: CreateHolidayInput,
        },
      ],
    }),
  ],
})
export class HolidayModule {}
