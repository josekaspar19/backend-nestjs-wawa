import { Injectable } from '@nestjs/common';
import { CreateBusRouteDto } from './dto/create-bus-route.dto';
import { UpdateBusRouteDto } from './dto/update-bus-route.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BusRoutesService {

  constructor(private prisma: PrismaService) {}

  create(createBusRouteDto: CreateBusRouteDto) {
    return this.prisma.busRoutes.create({ data:createBusRouteDto});
  }

  findAll() {
    return this.prisma.busRoutes.findMany();
  }

  findOne(id: string) {
    return this.prisma.busRoutes.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, data: UpdateBusRouteDto) {
    return this.prisma.busRoutes.update({
      where: {
        id: id,
      },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.busRoutes.delete({
      where: {
        id: id,
      },
    });
  }
}
