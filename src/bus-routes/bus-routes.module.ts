import { Module } from '@nestjs/common';
import { BusRoutesService } from './bus-routes.service';
import { BusRoutesController } from './bus-routes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BusRoutesController],
  providers: [BusRoutesService, PrismaService],
})
export class BusRoutesModule {}
