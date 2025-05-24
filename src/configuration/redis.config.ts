import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export default registerAs('redis', () => ({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
}));
