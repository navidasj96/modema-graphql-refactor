import { AuthType } from '@/modules/auth/enums/app-type.enum';
import { AUTH_TYPE_KEY } from '@/modules/auth/constant/auth.constant';
import { SetMetadata } from '@nestjs/common';

export const Auth = (...authTypes: AuthType[]) =>
  SetMetadata(AUTH_TYPE_KEY, authTypes);
