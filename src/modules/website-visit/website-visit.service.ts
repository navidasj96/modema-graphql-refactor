import { Injectable } from '@nestjs/common';
import { CreateWebsiteVisitInput } from './dto/create-website-visit.input';
import { UpdateWebsiteVisitInput } from './dto/update-website-visit.input';

@Injectable()
export class WebsiteVisitService {
  create(createWebsiteVisitInput: CreateWebsiteVisitInput) {
    return 'This action adds a new websiteVisit';
  }

  findAll() {
    return `This action returns all websiteVisit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} websiteVisit`;
  }

  update(id: number, updateWebsiteVisitInput: UpdateWebsiteVisitInput) {
    return `This action updates a #${id} websiteVisit`;
  }

  remove(id: number) {
    return `This action removes a #${id} websiteVisit`;
  }
}
