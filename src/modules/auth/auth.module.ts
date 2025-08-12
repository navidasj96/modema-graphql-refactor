import { AuthController } from '@/modules/auth/auth.controller';
import { AuthService } from '@/modules/auth/auth.service';
import jwtConfig from '@/modules/auth/config/jwt.config';
import { BcryptProvider } from '@/modules/auth/providers/bcrypt.provider';
import { GenerateTokenProvider } from '@/modules/auth/providers/generate-token.provider';
import { HashingProvider } from '@/modules/auth/providers/hashing.provider';
import { RefreshTokensProvider } from '@/modules/auth/providers/refresh-tokens.provider';
import { SignInOtpGeneratorService } from '@/modules/auth/providers/sign-in-otp-generator.service';
import { SignInProvider } from '@/modules/auth/providers/sign-in.provider';
import { UserPermissionCheckProvider } from '@/modules/auth/providers/user-permission-check.provider';
import { ExternalApiModule } from '@/modules/external-api/external-api.module';
import { User } from '@/modules/user/entities/user.entity';
import { UserModule } from '@/modules/user/user.module';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    forwardRef(() => UserModule),
    ExternalApiModule,
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
    UserPermissionCheckProvider,
  ],
  exports: [AuthService, HashingProvider],
  controllers: [AuthController],
})
export class AuthModule {}
