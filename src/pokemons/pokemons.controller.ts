import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards, UsePipes } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { CreatePokemonSchema } from './dto/create-pokemon.dto';
import type { CreatePokemonDto } from './dto/create-pokemon.dto';

@UseGuards(JwtAuthGuard)
@Controller('pokemons')
export class PokemonsController {
  constructor(private service: PokemonsService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreatePokemonSchema))
  create(@Req() req: any, @Body() dto: CreatePokemonDto) {
    return this.service.create(req.user.sub, dto);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.service.findAll(req.user.sub);
  }

  @Get(':id')
  findOne(@Req() req: any, @Param('id') id: string) {
    return this.service.findOne(req.user.sub, id);
  }

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(CreatePokemonSchema.partial()))
  update(@Req() req: any, @Param('id') id: string, @Body() dto: any) {
    return this.service.update(req.user.sub, id, dto);
  }

  @Delete(':id')
  remove(@Req() req: any, @Param('id') id: string) {
    return this.service.remove(req.user.sub, id);
  }
}