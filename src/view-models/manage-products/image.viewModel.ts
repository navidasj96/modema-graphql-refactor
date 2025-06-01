import { Image } from '@/modules/image/entities/image.entity';

export class ImageViewModel {
  public id: number;
  public filename: string;
  public originalFilename: string;
  public path: string;
  public altText = '';
  public altTextEn = '';

  constructor(image: Image, size = 480) {
    // نام فایل اصلی image در این ViewModel تغییر داده میشود تا thumbnail با height=480 آن بصورت پیش فرض لود شود
    let arr_filename = image.filename.split('.');
    let filename = arr_filename[0] + '/' + size + '.' + arr_filename[1];

    this.id = image.id;
    this.filename = filename;
    this.originalFilename = image.originalFilename;
    this.path = image.path;
    this.altText = image.altText || '';
    this.altTextEn = image.altTextEn || '';
  }
}
