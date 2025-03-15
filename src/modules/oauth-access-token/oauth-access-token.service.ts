import { Injectable } from '@nestjs/common';
import { CreateOauthAccessTokenInput } from './dto/create-oauth-access-token.input';
import { UpdateOauthAccessTokenInput } from './dto/update-oauth-access-token.input';

@Injectable()
export class OauthAccessTokenService {
  create(createOauthAccessTokenInput: CreateOauthAccessTokenInput) {
    return 'This action adds a new oauthAccessToken';
  }

  findAll() {
    return `This action returns all oauthAccessToken`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oauthAccessToken`;
  }

  update(id: number, updateOauthAccessTokenInput: UpdateOauthAccessTokenInput) {
    return `This action updates a #${id} oauthAccessToken`;
  }

  remove(id: number) {
    return `This action removes a #${id} oauthAccessToken`;
  }
}
