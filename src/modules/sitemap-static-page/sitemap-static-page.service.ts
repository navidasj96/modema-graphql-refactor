import { Injectable } from '@nestjs/common';
import { CreateSitemapStaticPageInput } from './dto/create-sitemap-static-page.input';
import { UpdateSitemapStaticPageInput } from './dto/update-sitemap-static-page.input';

@Injectable()
export class SitemapStaticPageService {
  create(createSitemapStaticPageInput: CreateSitemapStaticPageInput) {
    return 'This action adds a new sitemapStaticPage';
  }

  findAll() {
    return `This action returns all sitemapStaticPage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sitemapStaticPage`;
  }

  update(
    id: number,
    updateSitemapStaticPageInput: UpdateSitemapStaticPageInput
  ) {
    return `This action updates a #${id} sitemapStaticPage`;
  }

  remove(id: number) {
    return `This action removes a #${id} sitemapStaticPage`;
  }
}
