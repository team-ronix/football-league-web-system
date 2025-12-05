import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { StadiumsModule } from './stadiums/stadiums.module';
import { MatchesModule } from './matches/matches.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [AuthModule, PrismaModule, StadiumsModule, MatchesModule, TeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
