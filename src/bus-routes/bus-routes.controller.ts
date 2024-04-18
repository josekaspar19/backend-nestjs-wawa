import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusRoutesService } from './bus-routes.service';
import { CreateBusRouteDto } from './dto/create-bus-route.dto';
import { UpdateBusRouteDto } from './dto/update-bus-route.dto';

@Controller('bus-routes')
export class BusRoutesController {
  constructor(private readonly busRoutesService: BusRoutesService) {}

  @Post()
  create(@Body() createBusRouteDto: CreateBusRouteDto) {
    return this.busRoutesService.create(createBusRouteDto);
  }

  @Get()
  findAll() {
    return this.busRoutesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.busRoutesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusRouteDto: UpdateBusRouteDto) {
    return this.busRoutesService.update(id, updateBusRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.busRoutesService.remove(id);
  }
}
