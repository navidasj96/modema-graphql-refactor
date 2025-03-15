import { Injectable } from '@nestjs/common';
import { CreateOauthClientInput } from './dto/create-oauth-client.input';
import { UpdateOauthClientInput } from './dto/update-oauth-client.input';

@Injectable()
export class OauthClientService {
  create(createOauthClientInput: CreateOauthClientInput) {
    return 'This action adds a new oauthClient';
  }

  findAll() {
    return `This action returns all oauthClient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oauthClient`;
  }

  update(id: number, updateOauthClientInput: UpdateOauthClientInput) {
    return `This action updates a #${id} oauthClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} oauthClient`;
  }
}
