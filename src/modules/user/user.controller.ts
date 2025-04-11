import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserProvider } from '@/modules/user/providers/create-user.provider';
import { CreateUserDto } from '@/modules/user/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(
    /**
     * inject createUserProvider
     */
    private readonly createUserProvider: CreateUserProvider,
  ) {}

  @Post('create')
  public async CreateUser(@Body() createUserDto: CreateUserDto) {
    return await this.createUserProvider.createUser(createUserDto);
  }
}
