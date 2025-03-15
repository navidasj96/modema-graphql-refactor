import { Module } from '@nestjs/common';
import { PreorderRegisterService } from './preorder-register.service';
import { PreorderRegisterResolver } from './preorder-register.resolver';
import { PreorderRegister } from '@/modules/preorder-register/entities/preorder-register.entity';
import { PreorderRegister as PreorderRegisterGraphQL } from '@/modules/preorder-register/domain/preorder-register';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePreorderRegisterInput } from '@/modules/preorder-register/dto/create-preorder-register.input';

@Module({
  providers: [PreorderRegisterResolver, PreorderRegisterService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PreorderRegister])],
      resolvers: [
        {
          EntityClass: PreorderRegister,
          DTOClass: PreorderRegisterGraphQL,
          CreateDTOClass: CreatePreorderRegisterInput,
        },
      ],
    }),
  ],
})
export class PreorderRegisterModule {}
