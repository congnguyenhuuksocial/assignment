import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CoinsService {
    constructor(private httpService: HttpService) {}

    async fetchCoinData(coinId: string) {
        try {
            const response = await firstValueFrom(this.httpService.get(`https://api.coingecko.com/api/v3/coins/${coinId}`));
            return response.data;
        } catch (error) {
            throw new HttpException('Coin not found', HttpStatus.NOT_FOUND);
        }
    }

    async fetchTrendingCoins() {
        try {
            const response = await firstValueFrom(this.httpService.get('https://api.coingecko.com/api/v3/search/trending'));
            return response.data.coins;
        } catch (error) {
            throw new HttpException('Failed to fetch trending coins', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
