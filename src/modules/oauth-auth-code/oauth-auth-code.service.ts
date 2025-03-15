import { Injectable } from '@nestjs/common';
import { CreateOauthAuthCodeInput } from './dto/create-oauth-auth-code.input';
import { UpdateOauthAuthCodeInput } from './dto/update-oauth-auth-code.input';

@Injectable()
export class OauthAuthCodeService {
  create(createOauthAuthCodeInput: CreateOauthAuthCodeInput) {
    return 'This action adds a new oauthAuthCode';
  }

  findAll() {
    return `This action returns all oauthAuthCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oauthAuthCode`;
  }

  update(id: number, updateOauthAuthCodeInput: UpdateOauthAuthCodeInput) {
    return `This action updates a #${id} oauthAuthCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} oauthAuthCode`;
  }
}
