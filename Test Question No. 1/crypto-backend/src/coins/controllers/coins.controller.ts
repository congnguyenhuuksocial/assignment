import { Controller, Get, Query, HttpException, HttpStatus, Param } from '@nestjs/common';
import { CoinsService } from '../services/coins.service';

@Controller('coins')
export class CoinsController {
    constructor(private readonly coinsService: CoinsService) {}

    @Get('/:id')
    async getCoinData(@Param('id') coinId: string) {
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

    @Get('/:id/market-chart')
    async getMarketChart(@Param('id') coinId: string, @Query('days') days: number) {
        if (!coinId || !days) {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        }
        return this.coinsService.fetchMarketChart(coinId, days);
    }
}
