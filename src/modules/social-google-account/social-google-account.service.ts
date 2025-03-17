import { Injectable } from '@nestjs/common';
import { CreateSocialGoogleAccountInput } from './dto/create-social-google-account.input';
import { UpdateSocialGoogleAccountInput } from './dto/update-social-google-account.input';

@Injectable()
export class SocialGoogleAccountService {
  create(createSocialGoogleAccountInput: CreateSocialGoogleAccountInput) {
    return 'This action adds a new socialGoogleAccount';
  }

  findAll() {
    return `This action returns all socialGoogleAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialGoogleAccount`;
  }

  update(id: number, updateSocialGoogleAccountInput: UpdateSocialGoogleAccountInput) {
    return `This action updates a #${id} socialGoogleAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialGoogleAccount`;
  }
}
