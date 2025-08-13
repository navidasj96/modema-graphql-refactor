/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom, map, throwError } from 'rxjs';
import {
  CheckPasswordWithPhpApiInput,
  CheckPasswordWithPhpApiResponse,
} from './dtos/check-password-with-php-api-input';

@Injectable()
export class CheckPasswordWithPhpApi {
  private readonly logger = new Logger(CheckPasswordWithPhpApi.name);
  private readonly apiUrl = 'https://panel.modema.com/api/panel-login';

  constructor(private readonly httpService: HttpService) {}

  async checkPasswordWithPhpApi(
    credentials: CheckPasswordWithPhpApiInput
  ): Promise<CheckPasswordWithPhpApiResponse> {
    try {
      const { username, password } = credentials;

      const response: any = await firstValueFrom(
        this.httpService
          .post(
            this.apiUrl,
            {
              username,
              password,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              timeout: 10000, // 10 seconds timeout
            }
          )
          .pipe(
            map((response) => response.data),
            catchError((error: AxiosError) => {
              this.logger.error(
                `API request failed: ${error.message}`,
                error.stack
              );

              // Handle different types of errors
              if (error.response) {
                // Server responded with error status
                const statusCode = error.response.status;
                const responseData = error.response.data;

                this.logger.error(
                  `Server responded with status ${statusCode}:`,
                  responseData
                );

                return throwError(() => ({
                  success: false,
                  message: this.getErrorMessage(statusCode, responseData),
                  statusCode,
                  data: responseData,
                }));
              } else if (error.request) {
                // Request was made but no response received
                this.logger.error('No response received from server');
                return throwError(() => ({
                  success: false,
                  message:
                    'Network error: Unable to reach the authentication server',
                  statusCode: 0,
                }));
              } else {
                // Something else happened
                this.logger.error(`Request setup error: ${error.message}`);
                return throwError(() => ({
                  success: false,
                  message: 'Request configuration error',
                  statusCode: 0,
                }));
              }
            })
          )
      );

      this.logger.log(`Authentication successful for user: ${username}`);

      return {
        success: true,
        message: 'Authentication successful',
        data: response,
        statusCode: 200,
      };
    } catch (error: unknown) {
      // If it's already a formatted error from catchError, re-throw it
      if (
        error &&
        typeof error === 'object' &&
        'success' in error &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error as any).success === false
      ) {
        return error as CheckPasswordWithPhpApiResponse;
      }

      // Handle any other unexpected errors
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      const errorStack = error instanceof Error ? error.stack : undefined;

      this.logger.error(
        `Unexpected error during authentication: ${errorMessage}`,
        errorStack
      );
      return {
        success: false,
        message: 'An unexpected error occurred during authentication',
        statusCode: 500,
      };
    }
  }

  private getErrorMessage(statusCode: number, responseData: any): string {
    switch (statusCode) {
      case 401:
        return 'Invalid username or password';
      case 403:
        return 'Access forbidden';
      case 404:
        return 'Authentication endpoint not found';
      case 429:
        return 'Too many requests. Please try again later';
      case 500:
        return 'Server error. Please try again later';
      default:
        return String(
          (responseData &&
            typeof responseData === 'object' &&
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            responseData.message) ||
            `Request failed with status ${statusCode}`
        );
    }
  }
}
