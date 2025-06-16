import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IdeasService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.idea.findMany({
      select: {
        id: true,
        title: true,
        votes: true,
      },
    });
  }

  async vote(id: number) {
    const idea = await this.prisma.idea.findUnique({ where: { id } });

    if (!idea) {
      throw new NotFoundException(`Idea with id ${id} not found`);
    }

    return this.prisma.idea.update({
      where: { id },
      data: {
        votes: { increment: 1 },
      },
    });
  }

  async create(title: string) {
    return this.prisma.idea.create({ data: { title } });
  }
}
