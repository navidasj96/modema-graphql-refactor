import { CheckPasswordWithPhpApi } from '@/modules/external-api/check-password-with-php-api';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly checkPasswordWithPhpApi: CheckPasswordWithPhpApi
  ) {}

  async validateUserCredentials(username: string, password: string) {
    try {
      const result = await this.checkPasswordWithPhpApi.checkPasswordWithPhpApi(
        {
          username,
          password,
        }
      );

      if (result.success) {
        // Authentication successful
        return {
          isValid: true,
          user: result.data,
          message: result.message,
        };
      } else {
        // Authentication failed
        return {
          isValid: false,
          error: result.message,
          statusCode: result.statusCode,
        };
      }
    } catch (error) {
      // Handle any unexpected errors
      return {
        isValid: false,
        error: 'Authentication service unavailable',
      };
    }
  }
}
