import { z } from 'zod';

export const CreatePokemonSchema = z.object({
  name: z.string().min(1, 'Name obligatoire'),
  type: z.string().min(1, 'Type obligatoire'),
  level: z.number().min(1).max(100),
  imageUrl: z.string().url().optional(),
});

export type CreatePokemonDto = z.infer<typeof CreatePokemonSchema>;