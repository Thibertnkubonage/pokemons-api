import { PokemonsService } from './pokemons.service';
import type { CreatePokemonDto } from './dto/create-pokemon.dto';
export declare class PokemonsController {
    private service;
    constructor(service: PokemonsService);
    create(req: any, dto: CreatePokemonDto): import("@prisma/client").Prisma.Prisma__PokemonClient<{
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        level: number;
        imageUrl: string | null;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(req: any): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        level: number;
        imageUrl: string | null;
        userId: string;
    }[]>;
    findOne(req: any, id: string): import("@prisma/client").Prisma.Prisma__PokemonClient<{
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        level: number;
        imageUrl: string | null;
        userId: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(req: any, id: string, dto: any): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
    remove(req: any, id: string): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
}
