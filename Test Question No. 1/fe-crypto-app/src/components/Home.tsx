import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Autocomplete,
  Select,
  MenuItem,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const HomePage: React.FC = () => {
  const [coinData, setCoinData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [chartData, setChartData] = useState<any>();

  // Inside HomePage functional component
  const [selectedRange, setSelectedRange] = useState('7d'); // Default to last 7 days
  const [ohlcData, setOhlcData] = useState({ open: 0, high: 0, low: 0, close: 0 });

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/coins/trending')
      .then((response) => {
        setCoinData(response.data.coins);
        console.log(response.data.coins);

      })
      .catch((error) => console.error('Error fetching coins:', error));
  }, []);

  useEffect(() => {
    if (selectedCoin) {
      console.log("select coin: ", selectedCoin);
      axios.get(`http://localhost:3000/api/v1/coins/${selectedCoin}`)
        .then((response) => {
          console.log("response data: ", response.data.market_data.current_price);

          const labels = Object.keys(response.data.market_data.current_price).map((_, index) => index);
          const data = Object.values(response.data.market_data.current_price);
          const chartData = {
            labels,
            datasets: [
              {
                label: selectedCoin,
                data: data,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
          };
          console.log("chart data: ", chartData);
          setChartData(chartData);
        })
        .catch((error) => console.error('Error fetching coin details:', error));
    }
  }, [selectedCoin]);

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/coins/${selectedCoin}/market_chart`, {
            params: { vs_currency: 'usd', days: selectedRange },
          }
        );
        console.log("response data market_chart: ", response.data);
        // Assuming the response structure aligns with how you're storing the chart data:
        setChartData(processChartData(response.data.prices));
        setOhlcData(extractOhlcData(response.data));
      } catch (error) {
        console.error('Error fetching price data:', error);
        // Handle error state here
      }
    };

    fetchPriceData();
  }, [selectedCoin, selectedRange]);

  const processChartData = (prices: number[][]): ChartData<'line'> => {
    // The CoinGecko API returns price data as an array of [timestamp, price] arrays.
    // We need to split this array into two separate arrays: one for timestamps and one for prices.
    const timestamps = prices.map((price) => price[0]);
    const priceValues = prices.map((price) => price[1]);

    // Convert timestamps to date strings or similar (this can be customized as needed)
    const labels = timestamps.map((timestamp) => {
      // Create a new date from the timestamp and format it in a human-readable way.
      // This example assumes timestamps are in milliseconds.
      return new Date(timestamp).toLocaleDateString();
    });

    // Return the chart data in the format that Chart.js expects.
    // Documentation for Chart.js can provide more specifics on configuration options.
    return {
      labels,
      datasets: [
        {
          label: 'Price', // You can also pass the coin name dynamically if needed
          data: priceValues,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };
  };

  interface OhlcData {
    open: number;
    high: number;
    low: number;
    close: number;
  }

// Replace 'ApiResponse' with the actual type of your API response, if available
  const extractOhlcData = (response: any): OhlcData => {
    if (!response) {
      throw new Error('No response data provided.');
    }

    const { prices } = response;

    // Assuming 'prices' is a list of [timestamp, price] entries
    // OHLC data usually requires data over a period, so we need multiple data points
    // This simplistic example just takes the first and last price points for the day
    const open = prices?.[0]?.[1] ?? 0; // First price of the day
    const close = prices?.[prices.length - 1]?.[1] ?? 0; // Last price of the day

    // For high and low, normally you would do more sophisticated day-over-day analysis
    // The following is a simplification where we just find the max/min price of the array
    const pricesOnly = prices.map((p) => p[1]);
    const high = Math.max(...pricesOnly);
    const low = Math.min(...pricesOnly);

    return {
      open,
      high,
      low,
      close,
    };
  };

  return (
    <Box p={3}>
      <Typography variant="h3" gutterBottom>
        Crypto Dashboard
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={8}>
          <Autocomplete
            options={coinData}
            getOptionLabel={(option) => option.item.name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search Coins" variant="outlined" />}
            onChange={(_event, value) => setSelectedCoin(value?.item?.id)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            {/*<Typography variant="subtitle1">Select Time Range:</Typography>*/}
            <Select
              value={selectedRange}
              onChange={(e) => setSelectedRange(e.target.value)}
              size="small"
            >
              <MenuItem value="24h">Last 24 hours</MenuItem>
              <MenuItem value="7d">Last 7 days</MenuItem>
              <MenuItem value="30d">Last 30 days</MenuItem>
            </Select>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} md={10} sm={8}>
        <Grid item xs={6} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="body1">Open {ohlcData.open}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="body1">High {ohlcData.high}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="body1">Low {ohlcData.low}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="body1">Close {ohlcData.close}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box my={3}>
        <Typography variant="h5">Coin Statistics</Typography>
        {chartData && <Line data={chartData} />}
      </Box>
    </Box>
  );
};

export default HomePage;
