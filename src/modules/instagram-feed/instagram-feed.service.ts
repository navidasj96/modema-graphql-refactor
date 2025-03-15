import { Injectable } from '@nestjs/common';
import { CreateInstagramFeedInput } from './dto/create-instagram-feed.input';
import { UpdateInstagramFeedInput } from './dto/update-instagram-feed.input';

@Injectable()
export class InstagramFeedService {
  create(createInstagramFeedInput: CreateInstagramFeedInput) {
    return 'This action adds a new instagramFeed';
  }

  findAll() {
    return `This action returns all instagramFeed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} instagramFeed`;
  }

  update(id: number, updateInstagramFeedInput: UpdateInstagramFeedInput) {
    return `This action updates a #${id} instagramFeed`;
  }

  remove(id: number) {
    return `This action removes a #${id} instagramFeed`;
  }
}
