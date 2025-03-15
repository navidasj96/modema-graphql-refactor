import { Module } from '@nestjs/common';
import { PasswordResetService } from './password-reset.service';
import { PasswordResetResolver } from './password-reset.resolver';
import { PasswordReset } from '@/modules/password-reset/entities/password-reset.entity';
import { PasswordReset as PasswordResetGraphQL } from '@/modules/password-reset/domain/password-reset';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreatePasswordResetInput } from '@/modules/password-reset/dto/create-password-reset.input';

@Module({
  providers: [PasswordResetResolver, PasswordResetService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PasswordReset])],
      resolvers: [
        {
          EntityClass: PasswordReset,
          DTOClass: PasswordResetGraphQL,
          CreateDTOClass: CreatePasswordResetInput,
        },
      ],
    }),
  ],
})
export class PasswordResetModule {}
