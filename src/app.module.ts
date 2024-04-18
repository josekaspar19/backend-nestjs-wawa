import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusRoutesModule } from './bus-routes/bus-routes.module';

@Module({
  imports: [BusRoutesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
