export class CheckPasswordWithPhpApiInput {
  username: string;
  password: string;
}

export class CheckPasswordWithPhpApiResponse {
  success: boolean;
  message?: string;
  data?: any;
  statusCode?: number;
}
