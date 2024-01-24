import { Module } from '@nestjs/common';
import { CoinsService } from './services/coins.service';
import { CoinsController } from './controllers/coins.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [CoinsService],
  controllers: [CoinsController]
})
export class CoinsModule {}
