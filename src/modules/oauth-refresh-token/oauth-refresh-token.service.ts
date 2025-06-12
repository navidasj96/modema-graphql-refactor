import { Injectable } from '@nestjs/common';
import { CreateOauthRefreshTokenInput } from './dto/create-oauth-refresh-token.input';
import { UpdateOauthRefreshTokenInput } from './dto/update-oauth-refresh-token.input';

@Injectable()
export class OauthRefreshTokenService {
  create(createOauthRefreshTokenInput: CreateOauthRefreshTokenInput) {
    return 'This action adds a new oauthRefreshToken';
  }

  findAll() {
    return `This action returns all oauthRefreshToken`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oauthRefreshToken`;
  }

  update(
    id: number,
    updateOauthRefreshTokenInput: UpdateOauthRefreshTokenInput
  ) {
    return `This action updates a #${id} oauthRefreshToken`;
  }

  remove(id: number) {
    return `This action removes a #${id} oauthRefreshToken`;
  }
}
