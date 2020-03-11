import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessPartnerController } from './business-partner.controller';


@Module({
  imports: [ConfigModule],
  controllers: [AppController, BusinessPartnerController],
  providers: [AppService],
})
export class AppModule {}
