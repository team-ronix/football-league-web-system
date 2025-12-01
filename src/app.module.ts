import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { StadiumsModule } from './stadiums/stadiums.module';

@Module({
  imports: [AuthModule, PrismaModule, StadiumsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
