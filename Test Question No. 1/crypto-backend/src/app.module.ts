import { Module } from '@nestjs/common';
import { CoinsModule } from './coins/coins.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
      CoinsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
