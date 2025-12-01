import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import session = require('express-session');
import passport = require('passport');
import FileStore = require('session-file-store');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3001',
    credentials: true,
  });
  
  const FileStoreSession = FileStore(session);
  
  app.use(
    session({
      store: new FileStoreSession({
        path: './sessions',
        ttl: 604800, // 7 days in seconds
        retries: 0,
      }),
      secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        httpOnly: true,
        secure: false, // Set to false for development/Postman testing
        sameSite: 'lax', // Important for Postman
      },
    }),
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true,
    transform: true,
   }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
