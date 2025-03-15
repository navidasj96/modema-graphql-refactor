import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvitationCodeService } from './invitation-code.service';
import { CreateInvitationCodeInput } from './dto/create-invitation-code.input';
import { UpdateInvitationCodeInput } from './dto/update-invitation-code.input';
import { InvitationCode } from '@/modules/invitation-code/domain/invitation-code';

@Resolver(() => InvitationCode)
export class InvitationCodeResolver {
  constructor(private readonly invitationCodeService: InvitationCodeService) {}

  @Mutation(() => InvitationCode)
  createInvitationCode(
    @Args('createInvitationCodeInput')
    createInvitationCodeInput: CreateInvitationCodeInput,
  ) {
    return this.invitationCodeService.create(createInvitationCodeInput);
  }

  @Query(() => [InvitationCode], { name: 'invitationCode' })
  findAll() {
    return this.invitationCodeService.findAll();
  }

  @Query(() => InvitationCode, { name: 'invitationCode' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invitationCodeService.findOne(id);
  }

  @Mutation(() => InvitationCode)
  updateInvitationCode(
    @Args('updateInvitationCodeInput')
    updateInvitationCodeInput: UpdateInvitationCodeInput,
  ) {
    return this.invitationCodeService.update(
      updateInvitationCodeInput.id,
      updateInvitationCodeInput,
    );
  }

  @Mutation(() => InvitationCode)
  removeInvitationCode(@Args('id', { type: () => Int }) id: number) {
    return this.invitationCodeService.remove(id);
  }
}
