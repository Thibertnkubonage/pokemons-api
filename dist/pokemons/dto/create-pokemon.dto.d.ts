import { z } from 'zod';
export declare const CreatePokemonSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    level: z.ZodNumber;
    imageUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreatePokemonDto = z.infer<typeof CreatePokemonSchema>;
