import { Resolver } from '@nestjs/graphql';
import { UserHasPermission } from './domain/user-has-role';

@Resolver(() => UserHasPermission)
export class UserHasPermissionResolver {}
