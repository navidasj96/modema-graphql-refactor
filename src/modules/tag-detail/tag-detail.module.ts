import { Module } from '@nestjs/common';
import { TagDetailService } from './tag-detail.service';
import { TagDetailResolver } from './tag-detail.resolver';

@Module({
  providers: [TagDetailResolver, TagDetailService],
})
export class TagDetailModule {}
