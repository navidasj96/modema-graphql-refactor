import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorResolver } from './color.resolver';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Color } from './entities/color.entity';
import { Color as ColorGraphQL } from './domain/color';
import { CreateColorInput } from './dto/create-color.input';

@Module({
  providers: [ColorResolver, ColorService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Color])],
      resolvers: [
        {
          EntityClass: Color,
          DTOClass: ColorGraphQL,
          CreateDTOClass: CreateColorInput,
        },
      ],
    }),
  ],
})
export class ColorModule {}
