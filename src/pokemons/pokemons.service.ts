import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PokemonsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, data: any) {
    return this.prisma.pokemon.create({ data: { ...data, userId } });
  }

  // PUBLIC : tout le monde peut voir tous les Pokémons
  findAll() {
    return this.prisma.pokemon.findMany();
  }

  // PUBLIC : tout le monde peut voir un Pokémon
  findOne(id: string) {
    return this.prisma.pokemon.findFirst({ where: { id } });
  }

  // PROTÉGÉ : seulement le propriétaire peut modifier
  update(userId: string, id: string, data: any) {
    return this.prisma.pokemon.updateMany({ where: { id, userId }, data });
  }

  // PROTÉGÉ : seulement le propriétaire peut supprimer
  remove(userId: string, id: string) {
    return this.prisma.pokemon.deleteMany({ where: { id, userId } });
  }
}