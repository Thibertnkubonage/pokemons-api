import { PrismaService } from '../prisma/prisma.service';
export declare class PokemonsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, data: any): import("@prisma/client").Prisma.Prisma__PokemonClient<{
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        level: number;
        imageUrl: string | null;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(userId: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        level: number;
        imageUrl: string | null;
        userId: string;
    }[]>;
    findOne(userId: string, id: string): import("@prisma/client").Prisma.Prisma__PokemonClient<{
        id: string;
        name: string;
        createdAt: Date;
        type: string;
        level: number;
        imageUrl: string | null;
        userId: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(userId: string, id: string, data: any): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
    remove(userId: string, id: string): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
}
