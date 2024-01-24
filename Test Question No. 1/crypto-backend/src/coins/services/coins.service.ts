import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CoinsService {
    constructor(private httpService: HttpService) {}

    /**
     * Fetches the coin data for a coin
     * @param coinId
     * @returns Promise The coin data
     */
    async fetchCoinData(coinId: string) {
        try {
            const response = await firstValueFrom(this.httpService.get(`https://api.coingecko.com/api/v3/coins/${coinId}`));
            return response.data;
        } catch (error) {
            throw new HttpException('Coin not found', HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Fetches the trending coins
     * @returns Promise The trending coins
     */
    async fetchTrendingCoins() {
        try {
            const response = await firstValueFrom(this.httpService.get('https://api.coingecko.com/api/v3/search/trending'));
            return response.data.coins;
        } catch (error) {
            throw new HttpException('Failed to fetch trending coins', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Fetches the market chart data for a coin
     * @param coinId string The coin id
     * @param days number The number of days to fetch the market chart data for (1, 7, 14, 30, 90, 180, 365, max)
     * @returns Promise The market chart data
     */
    async fetchMarketChart(coinId: string, days: number) {
        try {
            const response = await firstValueFrom(this.httpService.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`));
            return response.data;
        } catch (error) {
            throw new HttpException('Failed to fetch market chart', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
