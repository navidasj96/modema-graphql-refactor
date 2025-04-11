import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { HashingProvider } from '@/modules/auth/providers/hashing.provider';
import { UserService } from '@/modules/user/user.service';

@Injectable()
export class SignInOtpGeneratorService {
  constructor(
    /**
     * inject userService
     */
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    /**
     * inject hashingProvider
     */
    private readonly hashingProvider: HashingProvider,
  ) {}

  async otpGeneratorAndSetter(username: string) {
    const user = await this.userService.findUserByUsername(username);

    if (!user) {
      throw new UnauthorizedException();
    }
    //generate a otp
    const otp = '12345';

    //hash the created otp
    const hashedOtp = await this.hashingProvider.hashPassword(otp);

    //if otp generated successfully we set the bcrypted otp as the user password
    return await this.userService.updateUsersPassword(user, hashedOtp);
  }
}
