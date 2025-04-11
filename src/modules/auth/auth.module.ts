import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/modules/user/entities/user.entity';
import { AuthController } from '@/modules/auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '@/modules/auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from '@/modules/auth/config/jwt.config';
import { SignInOtpGeneratorService } from '@/modules/auth/providers/sign-in-otp-generator.service';
import { HashingProvider } from '@/modules/auth/providers/hashing.provider';
import { BcryptProvider } from '@/modules/auth/providers/bcrypt.provider';
import { UserModule } from '@/modules/user/user.module';
import { SignInProvider } from '@/modules/auth/providers/sign-in.provider';
import { GenerateTokenProvider } from '@/modules/auth/providers/generate-token.provider';
import { RefreshTokensProvider } from '@/modules/auth/providers/refresh-tokens.provider';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    forwardRef(() => UserModule),
  ],
  providers: [
    AuthService,
    SignInOtpGeneratorService,
    {
      provide: HashingProvider,
      useClass: BcryptProvider,
    },
    SignInProvider,
    GenerateTokenProvider,
    RefreshTokensProvider,
  ],
  exports: [AuthService, HashingProvider],
  controllers: [AuthController],
})
export class AuthModule {}
