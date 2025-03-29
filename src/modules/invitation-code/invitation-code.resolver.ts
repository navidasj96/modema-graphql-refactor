import { Resolver } from '@nestjs/graphql';
import { InvitationCodeService } from './invitation-code.service';
import { InvitationCode } from '@/modules/invitation-code/domain/invitation-code';

@Resolver(() => InvitationCode)
export class InvitationCodeResolver {
  constructor(private readonly invitationCodeService: InvitationCodeService) {}
}
