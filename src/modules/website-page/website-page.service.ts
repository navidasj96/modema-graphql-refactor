import { Injectable } from '@nestjs/common';
import { CreateWebsitePageInput } from './dto/create-website-page.input';
import { UpdateWebsitePageInput } from './dto/update-website-page.input';

@Injectable()
export class WebsitePageService {
  create(createWebsitePageInput: CreateWebsitePageInput) {
    return 'This action adds a new websitePage';
  }

  findAll() {
    return `This action returns all websitePage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} websitePage`;
  }

  update(id: number, updateWebsitePageInput: UpdateWebsitePageInput) {
    return `This action updates a #${id} websitePage`;
  }

  remove(id: number) {
    return `This action removes a #${id} websitePage`;
  }
}
