import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export default registerAs('jwt', () => {
  return {
    secret: process.env.JWT_SECRET ?? 'sadsadad',
    audience: process.env.JWT_TOKEN_AUDIENCE ?? 'asdsadsad',
    issuer: process.env.JWT_TOKEN_ISSUER ?? 'sadsadsad',
    accessTokenTtl: parseInt(process.env.JWT_ACCESS_TOKEN_TTL ?? '3600', 10),
    refreshTokenTtl: parseInt(process.env.JWT_REFRESH_TOKEN_TTL ?? '8600', 10),
  };
});
