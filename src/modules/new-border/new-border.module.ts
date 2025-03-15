import { Module } from '@nestjs/common';
import { NewBorderService } from './new-border.service';
import { NewBorderResolver } from './new-border.resolver';
import { NewBorder } from '@/modules/new-border/entities/new-border.entity';
import { NewBorder as NewBorderGraphQL } from '@/modules/new-border/domain/new-border';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateNewBorderInput } from '@/modules/new-border/dto/create-new-border.input';

@Module({
  providers: [NewBorderResolver, NewBorderService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([NewBorder])],
      resolvers: [
        {
          EntityClass: NewBorder,
          DTOClass: NewBorderGraphQL,
          CreateDTOClass: CreateNewBorderInput,
        },
      ],
    }),
  ],
})
export class NewBorderModule {}
