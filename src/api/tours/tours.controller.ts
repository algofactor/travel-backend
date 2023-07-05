import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { CreateTourDto, UpdateTourDto } from './tour.dto';
import { ToursService } from './tours.service';

@Controller('tours')
export class ToursController {
  constructor(private readonly toursService: ToursService) { }

  @Post('create')
  create(@Body() createTourDto: CreateTourDto) {
    return this.toursService.create(createTourDto);
  }

  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.toursService.findAll(+page || 1, +limit || 10);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toursService.findOne(+id);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateTourDto: UpdateTourDto) {
    return this.toursService.update(+id, updateTourDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.toursService.remove(+id);
  }
}
