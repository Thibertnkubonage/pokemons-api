import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PokemonsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, data: any) {
    return this.prisma.pokemon.create({ data: { ...data, userId } });
  }

  findAll(userId: string) {
    return this.prisma.pokemon.findMany({ where: { userId } });
  }

  findOne(userId: string, id: string) {
    return this.prisma.pokemon.findFirst({ where: { id, userId } });
  }

  update(userId: string, id: string, data: any) {
    return this.prisma.pokemon.updateMany({ where: { id, userId }, data });
  }

  remove(userId: string, id: string) {
    return this.prisma.pokemon.deleteMany({ where: { id, userId } });
  }
}