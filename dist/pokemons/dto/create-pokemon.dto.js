"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePokemonSchema = void 0;
const zod_1 = require("zod");
exports.CreatePokemonSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name obligatoire'),
    type: zod_1.z.string().min(1, 'Type obligatoire'),
    level: zod_1.z.number().min(1).max(100),
    imageUrl: zod_1.z.string().url().optional(),
});
//# sourceMappingURL=create-pokemon.dto.js.map