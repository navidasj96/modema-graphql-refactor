import { Injectable } from '@nestjs/common';
import { CreateSocialFacebookAccountInput } from './dto/create-social-facebook-account.input';
import { UpdateSocialFacebookAccountInput } from './dto/update-social-facebook-account.input';

@Injectable()
export class SocialFacebookAccountService {
  create(createSocialFacebookAccountInput: CreateSocialFacebookAccountInput) {
    return 'This action adds a new socialFacebookAccount';
  }

  findAll() {
    return `This action returns all socialFacebookAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialFacebookAccount`;
  }

  update(
    id: number,
    updateSocialFacebookAccountInput: UpdateSocialFacebookAccountInput
  ) {
    return `This action updates a #${id} socialFacebookAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialFacebookAccount`;
  }
}
