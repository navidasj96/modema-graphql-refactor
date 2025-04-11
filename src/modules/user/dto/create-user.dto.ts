import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  username?: string;

  @IsNotEmpty()
  @IsString()
  email?: string;

  @IsString()
  phone?: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNumber()
  isActive?: number;
}
