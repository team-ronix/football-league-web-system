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
    origin: ['http://localhost:5173', 'http://localhost:5174', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });
  
  const FileStoreSession = FileStore(session);
  
  app.use(
    session({
      store: new FileStoreSession({
        path: './sessions',
        ttl: 604800,
        retries: 0,
      }),
      secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, 
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
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
