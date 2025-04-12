export class UpdateUserDto {
  name: string;
  username?: string;
  email?: string;
  phone?: string;
  isActive?: number;
  isGuest?: number;
  phoneVerified?: number;
  sepidarId?: number;
  sepidarCode?: number;
  password?: string;
}
