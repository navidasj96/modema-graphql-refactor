import { Video } from '@/modules/video/entities/video.entity';

export class VideoViewModel {
  public id: number;
  public filename: string;
  public originalFilename: string;
  public path: string;
  public sortOrder: number;

  constructor(video: Video, sortOrder = 1) {
    this.id = video.id;
    this.filename = video.filename;
    this.originalFilename = video.originalFilename;
    this.path = video.path;
    this.sortOrder = sortOrder;
  }
}
