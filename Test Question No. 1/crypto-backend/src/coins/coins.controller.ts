import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { CoinsService } from './coins.service';

@Controller('coins')
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
}
