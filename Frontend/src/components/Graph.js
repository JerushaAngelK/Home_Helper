import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { colors } from '@mui/material';

export default function BasicArea() {
  return (
    <div style={{backgroundColor:''}}>
      <h1>Energy Usage</h1>
    <LineChart sx={
      {colors:"brown"}
    }
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={600}
      height={400}
    />
    </div>
  );
}