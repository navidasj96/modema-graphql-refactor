import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { HashingProvider } from '@/modules/auth/providers/hashing.provider';

@Injectable()
export class BcryptProvider implements HashingProvider {
  public async hashPassword(data: string | Buffer): Promise<string> {
    //generate salt
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(data, salt);
  }

  comparePassword(data: string | Buffer, encrypted: string): Promise<boolean> {
    return bcrypt.compare(data, encrypted);
  }
}
