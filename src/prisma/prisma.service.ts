import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import 'dotenv/config';
import { env } from 'prisma/config';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const databaseType = env('DATABASE_TYPE') || 'postgresql';
    
    let adapter;
    if (databaseType === 'mysql') {
      adapter = new PrismaMariaDb({
        host: env('DATABASE_HOST'),
        user: env('DATABASE_USER'),
        password: env('DATABASE_PASSWORD') == '0' ? '' : env('DATABASE_PASSWORD'),
        database: env('DATABASE_NAME'),
        connectionLimit: 5,
      });
    } else {
      adapter = new PrismaPg({
        connectionString: env('DATABASE_URL'),
      });
    }

    super({
      adapter,
    });
  }
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
