import { Injectable } from '@nestjs/common';
import { CreateOauthPersonalAccessClientInput } from './dto/create-oauth-personal-access-client.input';
import { UpdateOauthPersonalAccessClientInput } from './dto/update-oauth-personal-access-client.input';

@Injectable()
export class OauthPersonalAccessClientService {
  create(createOauthPersonalAccessClientInput: CreateOauthPersonalAccessClientInput) {
    return 'This action adds a new oauthPersonalAccessClient';
  }

  findAll() {
    return `This action returns all oauthPersonalAccessClient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oauthPersonalAccessClient`;
  }

  update(id: number, updateOauthPersonalAccessClientInput: UpdateOauthPersonalAccessClientInput) {
    return `This action updates a #${id} oauthPersonalAccessClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} oauthPersonalAccessClient`;
  }
}
