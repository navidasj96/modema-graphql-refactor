import { Injectable } from '@nestjs/common';
import { CreateFetchSiteUrlInput } from './dto/create-fetch-site-url.input';
import { UpdateFetchSiteUrlInput } from './dto/update-fetch-site-url.input';

@Injectable()
export class FetchSiteUrlService {
  create(createFetchSiteUrlInput: CreateFetchSiteUrlInput) {
    return 'This action adds a new fetchSiteUrl';
  }

  findAll() {
    return `This action returns all fetchSiteUrl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fetchSiteUrl`;
  }

  update(id: number, updateFetchSiteUrlInput: UpdateFetchSiteUrlInput) {
    return `This action updates a #${id} fetchSiteUrl`;
  }

  remove(id: number) {
    return `This action removes a #${id} fetchSiteUrl`;
  }
}
