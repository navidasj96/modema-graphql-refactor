import { Injectable } from '@nestjs/common';
import { CreateInvitationCodeInput } from './dto/create-invitation-code.input';
import { UpdateInvitationCodeInput } from './dto/update-invitation-code.input';

@Injectable()
export class InvitationCodeService {
  create(createInvitationCodeInput: CreateInvitationCodeInput) {
    return 'This action adds a new invitationCode';
  }

  findAll() {
    return `This action returns all invitationCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invitationCode`;
  }

  update(id: number, updateInvitationCodeInput: UpdateInvitationCodeInput) {
    return `This action updates a #${id} invitationCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} invitationCode`;
  }
}
