// src/common/decorators/permissions.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const PERMISSIONS_KEY = 'required_permissions';

export const Permissions = (permissions: string[]) =>
  SetMetadata(PERMISSIONS_KEY, permissions);
