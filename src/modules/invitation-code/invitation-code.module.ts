import { Module } from '@nestjs/common';
import { InvitationCodeService } from './invitation-code.service';
import { InvitationCodeResolver } from './invitation-code.resolver';
import { InvitationCode } from '@/modules/invitation-code/entities/invitation-code.entity';
import { InvitationCode as InvitationCodeGraphQL } from '@/modules/invitation-code/domain/invitation-code';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CreateInvitationCodeInput } from '@/modules/invitation-code/dto/create-invitation-code.input';

@Module({
  providers: [InvitationCodeResolver, InvitationCodeService],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([InvitationCode])],
      resolvers: [
        {
          EntityClass: InvitationCode,
          DTOClass: InvitationCodeGraphQL,
          CreateDTOClass: CreateInvitationCodeInput,
        },
      ],
    }),
  ],
})
export class InvitationCodeModule {}
