import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessPartnerController } from './business-partner.controller';
import { EmsEventsController } from './ems-events.controller';

@Module({
  imports: [ConfigModule],
  controllers: [AppController, BusinessPartnerController, EmsEventsController],
  providers: [AppService],
})
export class AppModule {}
