// hooks/useCoinData.ts
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCoinData } from '../store/cryptoSlice';

export const useCoinData = (coinId: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((response) => {
        dispatch(setCoinData(response.data));
      })
      .catch((error) => console.error('There was an error fetching the coin data:', error));
  }, [coinId, dispatch]);
};
