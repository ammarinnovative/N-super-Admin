import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Faker } from '@faker-js/faker';
import { Box, Stack, Text } from '@chakra-ui/react';
import CustomHeading from '../../Website/Headings/CustomHeading';
import BorderButton from '../../Website/Buttons/BorderButton';
import { GET } from '../../../utilities/ApiProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};



export default function OrderSalesCharts({ timeFrameData, totalSales }) {
  console.log('timeFrameData', timeFrameData);
  console.log('totalSales', totalSales);

  const [data, setData] = useState({
    label:[],
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: [],
        borderColor: '#dc0a9b',
        backgroundColor: '#ffffff1c',
      },
    ],
  });


  useEffect(() => {
    setData({
      labels: timeFrameData,
      datasets: [
        {
          ...data.datasets[0],
          data: totalSales,
        },
      ],
    });
  }, [totalSales, timeFrameData]);

  return (
    <>
      <Stack>
        <Stack
          mb={'4'}
          alignItems={'center'}
          justifyContent={'space-between'}
          direction={'row'}
        >
          <CustomHeading
            mb={'0'}
            textAlign={'left'}
            fontSize={'23px'}
            color={'#fff'}
          >
            Membership Subscribers
          </CustomHeading>
          <Box>
            <BorderButton Url={'/'} Btnctn={'Last 7 days'} />
          </Box>
        </Stack>
        <Box bg={'#212121'} p={'41px 20px'}>
          <Line options={options} data={data} />
        </Box>
      </Stack>
    </>
  );
}
