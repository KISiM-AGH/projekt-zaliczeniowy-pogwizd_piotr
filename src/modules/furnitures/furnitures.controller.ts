import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { FurnituresService } from './furnitures.service';
import { CreateFurnitureDto } from './dto/create-furniture.dto';
import { UpdateFurnitureDto } from './dto/update-furniture.dto';
import { FilterFurnitureDto } from './dto/filter-furniture.dto';
import { FindAllFurnitureDto } from './dto/find-allFurniture.dto';
import { plainToInstance } from 'class-transformer';

@Controller('furnitures')
export class FurnituresController {
  constructor(private readonly furnituresService: FurnituresService) {}

  @Post()
  create(@Body() createFurnitureDto: CreateFurnitureDto) {
    return this.furnituresService.create(createFurnitureDto);
  }

  @Get()
  findAll() {
    const furnitures = this.furnituresService.findAll();
    return plainToInstance(FindAllFurnitureDto, furnitures);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.furnituresService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFurnitureDto: UpdateFurnitureDto,
  ) {
    return this.furnituresService.update(id, updateFurnitureDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.furnituresService.remove(id);
  }
}
