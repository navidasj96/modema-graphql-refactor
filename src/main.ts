import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Session middleware
  app.use(
    session({
      secret: '1234567890abcdef',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
      },
    })
  );

  // Enable CORS for the frontend application
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // Cookie parser middleware
  app.use(cookieParser());
  await app.listen(process.env.PORT ?? 3008);
}

bootstrap();
