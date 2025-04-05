// src/decorators/authorize-permission.decorator.ts
import { SetMetadata } from '@nestjs/common';
import { PermissionKey } from '@/modules/auth/enums/permission-key.enum';

export const AuthorizePermission = (permissions: string[]) =>
  SetMetadata(PermissionKey.permissions, permissions);
