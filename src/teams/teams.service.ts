import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class TeamsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.team.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.team.findUnique({
      where: { id },
    });
  }

  async seed() {
    const teams = [
      { name: 'Al Ahly' },
      { name: 'Zamalek' },
      { name: 'Pyramids FC' },
      { name: 'Al Ittihad' },
      { name: 'Ismaily' },
      { name: 'Al Masry' },
      { name: 'Ceramica Cleopatra' },
      { name: 'Future FC' },
      { name: 'National Bank of Egypt' },
      { name: 'El Gouna' },
      { name: 'Pharco FC' },
      { name: 'ZED FC' },
    ];

    const existingTeams = await this.prisma.team.count();
    
    if (existingTeams === 0) {
      await this.prisma.team.createMany({
        data: teams,
      });
      return { message: 'Teams seeded successfully', count: teams.length };
    }

    return { message: 'Teams already seeded', count: existingTeams };
  }
}
