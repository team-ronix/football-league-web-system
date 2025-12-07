import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateStadiumDto, UpdateStadiumDto } from './dto';

@Injectable()
export class StadiumsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStadiumDto: CreateStadiumDto) {
    return this.prisma.stadium.create({
      data: {
        name: createStadiumDto.name,
        noOfRows: createStadiumDto.no_of_rows,
        seatsPerRow: createStadiumDto.seats_per_row,
      },
    });
  }

  async findAll() {
    return this.prisma.stadium.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const stadium = await this.prisma.stadium.findUnique({
      where: { id },
    });

    if (!stadium) {
      throw new NotFoundException(`Stadium with ID ${id} not found`);
    }

    return stadium;
  }

  async update(id: number, updateStadiumDto: UpdateStadiumDto) {
    await this.findOne(id);

    return this.prisma.stadium.update({
      where: { id },
      data: {
        ...(updateStadiumDto.name && { name: updateStadiumDto.name }),
        ...(updateStadiumDto.no_of_rows && { noOfRows: updateStadiumDto.no_of_rows }),
        ...(updateStadiumDto.seats_per_row && { seatsPerRow: updateStadiumDto.seats_per_row }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.stadium.delete({
      where: { id },
    });
  }
}
