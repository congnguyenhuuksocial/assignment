import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { CoinsService } from '../services/coins.service';

@Controller({ path: 'coins' , version: '1' })
export class CoinsController {
    constructor(private readonly coinsService: CoinsService) {}

    @Get()
    async getCoinData(@Query('id') coinId: string) {
        console.log(coinId);
        if (!coinId) {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        }
        return this.coinsService.fetchCoinData(coinId);
    }

    @Get('/trending')
    async getTrendingCoins() {
        return this.coinsService.fetchTrendingCoins();
    }

    @Get('/market-chart')
    async getMarketChart(@Query('id') coinId: string, @Query('days') days: number) {
        if (!coinId || !days) {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        }
        return this.coinsService.fetchMarketChart(coinId, days);
    }
}
