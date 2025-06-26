import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '3306'),
  user: process.env.DATABASE_USER,
  name: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  synchronize: process.env.DATABASE_SYNC === 'true',
  autoloadEntities: process.env.DATABASE_AUTOLOAD === 'true',
}));
