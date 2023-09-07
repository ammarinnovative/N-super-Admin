import {
  Box,
  Flex,
  Image,
  Link,
  ListItem,
  Stack,
  UnorderedList,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { AiFillStar } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import MainDashboard from '../MainDashboard';
import { Text } from '@chakra-ui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import OrderBox from '../../../components/Dashboard/Order/OrderBox';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import { useParams } from 'react-router-dom';
import M1 from '../../../assets/images/menu/m1.jpg';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import Event1 from '../../../assets/images/event/e1.jpg';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { useSelector } from 'react-redux';
import { GET } from '../../../utilities/ApiProvider';
import { imgUrl } from '../../../utilities/Config';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      position: 'right',
      rtl: true,
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 20,
      },
    },
  },
};

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#B94F65',
        '#319FEA',
        '#776438',
        '#448484',
        '#694AA5',
        '#A56D36',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Index() {
  const [user, setUser] = useState({});
  const selector = useSelector(state => state);
  const [sellingEvent, setSellingEvent] = useState([]);
  const [sellingChart, setSellingChart] = useState([]);
  const [datas, setDatas] = useState({});
  const params = useParams();
  const [labels, setLabels] = useState({
    label: [],
    backgroundColor: [],
    percentage: [],
  });

  const [labels2, setLabels2] = useState({
    label: [],
    backgroundColor: [],
    percentage: [],
  });
  const [labels3, setLabels3] = useState({
    label: [],
    backgroundColor: [],
    percentage: [],
  });

  const getData = async () => {
    const res = await GET(`admin/bar/${params.id}/analytics`, {
      authorization: `bearer ${user?.verificationToken}`,
    });
    setDatas(res?.data);
    setSellingEvent(res?.data?.bestSellingEvents);
    setSellingChart(res?.data?.bestSellingMenuPieChart);
  };

  useEffect(() => {
    const chart1 = sellingChart?.map(value => {
      return value?.label;
    });

    const chart2 = sellingChart?.map(value => {
      return value?.backgroundColor;
    });
    const chart3 = sellingChart?.map(value => {
      return Math.round(value?.percentage);
    });

    setLabels({
      ...labels,
      label: chart1,
      backgroundColor: chart2,
      percentage: chart3,
    });
  }, [sellingChart]);

  useEffect(() => {
    const chart1 = datas?.demoGraphics?.map(value => {
      return value?.label;
    });

    const chart2 = datas?.demoGraphics?.map(value => {
      return value?.color;
    });
    const chart3 = datas?.demoGraphics?.map(value => {
      return Math.round(value?.percentage);
    });

    setLabels2({
      ...labels2,
      label: chart1,
      backgroundColor: chart2,
      percentage: chart3,
    });
  }, [datas]);

  useEffect(() => {
    const chart1 = datas?.userAgeDistribution?.map(value => {
      return value?.ageGroup;
    });

    const chart2 = datas?.userAgeDistribution?.map(value => {
      return value?.color;
    });
    const chart3 = datas?.userAgeDistribution?.map(value => {
      return Math.round(value?.percentage);
    });

    setLabels3({
      ...labels3,
      label: chart1,
      backgroundColor: chart2,
      percentage: chart3,
    });
  }, [datas]);

  const options = {
    plugins: {
      legend: {
        position: 'right',
        rtl: true,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
    },
  };
  const data = {
    labels: labels?.label ?? [
      'Red',
      'Blue',
      'Yellow',
      'Green',
      'Purple',
      'Orange',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: labels.percentage ?? [12, 19, 3, 5, 2, 3],
        backgroundColor: labels?.backgroundColor ?? [
          '#B94F65',
          '#319FEA',
          '#776438',
          '#448484',
          '#694AA5',
          '#A56D36',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: labels2?.label ?? [
      'Red',
      'Blue',
      'Yellow',
      'Green',
      'Purple',
      'Orange',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: labels2.percentage ?? [12, 19, 3, 5, 2, 3],
        backgroundColor: labels2?.backgroundColor ?? [
          '#B94F65',
          '#319FEA',
          '#776438',
          '#448484',
          '#694AA5',
          '#A56D36',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const data3 = {
    labels: labels3?.label ?? [
      'Red',
      'Blue',
      'Yellow',
      'Green',
      'Purple',
      'Orange',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: labels3?.percentage ?? [12, 19, 3, 5, 2, 3],
        backgroundColor: labels3?.backgroundColor ?? [
          '#B94F65',
          '#319FEA',
          '#776438',
          '#448484',
          '#694AA5',
          '#A56D36',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    setUser(selector?.value);
  }, [selector]);

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'6'}>
          <Stack>
            <CustomHeading textAlign={'left'} fontSize={'30px'} color={'#fff'}>
              Overview
            </CustomHeading>
          </Stack>
          <Stack pb={'6'} direction={'row'} gap={'6'}>
            <OrderBox
              data={datas?.averagingEventRatingsCount}
              title={'averagingEventRatingsCount'}
            />
            <OrderBox
              data={datas?.eventAttendanceCount}
              check={'number'}
              title={'eventAttendanceCount'}
            />
            <OrderBox
              data={datas?.totalMenuSalesCount}
              check={'number'}
              title={'totalMenuSalesCount'}
            />
            <OrderBox
              data={datas?.totalTicketCounts}
              check={'number'}
              title={'totalTicketCounts'}
            />
          </Stack>
          <Stack gap={'6'} direction={'row'}>
            <Stack w={'60%'} gap={'6'}>
              <Stack>
                <Box>
                  <CustomHeading
                    textAlign={'left'}
                    fontSize={'25px'}
                    color={'#fff'}
                  >
                    Events Analytics
                  </CustomHeading>
                </Box>
                <Stack
                  gap={'14'}
                  direction={'row'}
                  bg={'dashbg.100'}
                  px={'8'}
                  py={'4'}
                  alignItems={'center'}
                >
                  <Stack w={'50%'}>
                    <CustomHeading
                      textAlign={'left'}
                      fontSize={'20px'}
                      color={'#fff'}
                    >
                      Best Selling Menu
                    </CustomHeading>
                    <Pie options={options} data={data} />
                  </Stack>
                  <Stack w={'50%'} gap={'2'}>
                    <CustomHeading
                      textAlign={'left'}
                      fontSize={'20px'}
                      color={'#fff'}
                    >
                      Most Popular Menu Category
                    </CustomHeading>
                    {datas?.mostPopularMenuCategories &&
                    datas?.mostPopularMenuCategories?.length > 0 ? (
                      datas?.mostPopularMenuCategories.map(item => {
                        return (
                          <Box>
                            <Flex gap={'6'} alignItems={'center'}>
                              <Box width={'50%'}>
                                <Image
                                  width={'100%'}
                                  src={imgUrl + item?.category_image}
                                />
                              </Box>
                              <CustomHeading
                                fontSize={'19px'}
                                textAlign={'left'}
                              >
                                {item?.name}
                              </CustomHeading>
                            </Flex>
                          </Box>
                        );
                      })
                    ) : (
                      <Text fontSize={'18px'} color={'white'}>
                        No Data Found
                      </Text>
                    )}
                  </Stack>
                </Stack>
              </Stack>
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
                    Total Sales
                  </CustomHeading>
                  <Box>
                    <BorderButton Url={'/'} Btnctn={'View Past Report'} />
                  </Box>
                </Stack>
                <Stack
                  gap={'14'}
                  direction={'row'}
                  bg={'dashbg.100'}
                  px={'8'}
                  py={'4'}
                  alignItems={'center'}
                >
                  <Stack w={'50%'}>
                    <CustomHeading
                      textAlign={'left'}
                      fontSize={'20px'}
                      color={'#fff'}
                    >
                      Summary
                    </CustomHeading>
                    <Pie options={options} data={data2} />
                  </Stack>
                  <Stack w={'50%'}>
                    <CustomHeading
                      textAlign={'left'}
                      fontSize={'20px'}
                      color={'#fff'}
                    ></CustomHeading>
                    <Pie options={options} data={data3} />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack w={'40%'}>
              <Box>
                <CustomHeading
                  textAlign={'left'}
                  fontSize={'25px'}
                  color={'#fff'}
                >
                  Events Analytics
                </CustomHeading>
              </Box>
              <Stack p={'4'} bg={'dashbg.100'}>
                <Box
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  display={'flex'}
                >
                  <CustomHeading
                    textAlign={'left'}
                    mb={'0'}
                    fontSize={'20px'}
                    color={'#fff'}
                  >
                    Events
                  </CustomHeading>
                  <Link color={'#fff'} to={'/'}>
                    View All
                  </Link>
                </Box>
                <UnorderedList>
                  {sellingEvent?.length > 0 ? (
                    sellingEvent?.map(item => {
                      return (
                        <ListItem>
                          <Stack
                            pb={'3'}
                            mt={'4'}
                            borderBottom={'1px solid #fff'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            direction={'row'}
                          >
                            <Box
                              gap={'4'}
                              alignItems={'center'}
                              display={'flex'}
                            >
                              <Box w={'30px'} h={'30px'}>
                                <Image
                                  w={'100%'}
                                  src={imgUrl + item?.picture}
                                />
                              </Box>
                              <Box>
                                <CustomHeading
                                  textAlign={'left'}
                                  color={'#fff'}
                                  fontSize={'25px'}
                                >
                                  {item?.name}
                                </CustomHeading>
                                <CustomPara color={'pHeading.100'}>
                                  Total Attendance : {item?.totalAttendance}
                                </CustomPara>
                              </Box>
                            </Box>
                            <Box alignItems={'center'} display={'flex'}>
                              <CustomPara fontSize={'19px'}>4.5</CustomPara>
                              <UnorderedList display={'flex'}>
                                <ListItem>
                                  <Icon
                                    color={'#ffee37'}
                                    fontSize={'16px'}
                                    as={AiFillStar}
                                  />
                                </ListItem>
                                <ListItem>
                                  <Icon
                                    color={'#ffee37'}
                                    fontSize={'16px'}
                                    as={AiFillStar}
                                  />
                                </ListItem>
                                <ListItem>
                                  <Icon
                                    color={'#ffee37'}
                                    fontSize={'16px'}
                                    as={AiFillStar}
                                  />
                                </ListItem>
                                <ListItem>
                                  <Icon
                                    color={'#ffee37'}
                                    fontSize={'16px'}
                                    as={AiFillStar}
                                  />
                                </ListItem>
                              </UnorderedList>
                            </Box>
                          </Stack>
                        </ListItem>
                      );
                    })
                  ) : (
                    <Text color={'white'} fontSize={'18px'}>
                      No Data Found
                    </Text>
                  )}
                </UnorderedList>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
