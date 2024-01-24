// Import necessary components from Material UI
import * as React from 'react';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';

const Home: React.FC = () => (
  <Box p={3}>
    <Typography variant="h3" gutterBottom>
      Welcome to Our Crypto Dashboard
    </Typography>

    <Paper elevation={2} sx={{ padding: 2, marginBottom: 2 }}>
      <Typography variant="h5" gutterBottom>
        Track Real-time Crypto Prices
      </Typography>
      <Typography variant="body1" gutterBottom>
        Get the latest updates on your favourite cryptocurrencies, analyze market trends, and make informed decisions.
      </Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary">
          View Coins
        </Button>
      </Box>
    </Paper>

    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Feature One
          </Typography>
          <Typography variant="body2">
            Description of a feature that you provide on the Dashboard (e.g., Price Alerts, etc.)
          </Typography>
        </Paper>
      </Grid>

      {/* Repeat for other features, adjusting for Grid item sizing  */}
    </Grid>
  </Box>
);

export default Home;
