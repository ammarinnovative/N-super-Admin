import {
  Box,
  Button,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import MainDashboard from '../MainDashboard';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import { useSelector } from 'react-redux';
import OrderSalesCharts from '../../../components/Dashboard/Order/OrderSalesCharts';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import { useState } from 'react';
import { useEffect } from 'react';
import { GET } from '../../../utilities/ApiProvider';
import { Global } from '@emotion/react';

export default function Index() {
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [val, setVal] = useState('team');
  const selector = useSelector(state => state);

  useEffect(() => {
    if (selector) {
      setUser(selector.value);
    }
  }, [selector]);

  const getData = async () => {
    const res = await GET('admin/users', {
      authorization: `bearer ${user?.verificationToken}`,
    });
    setData(res?.data);
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);
  let totalMembers = 0;
  let totalActiveMembers = 0;
  let totalBlockedMembers = 0;

  if (data?.activities && data.activities.length > 0) {
    totalMembers = data.activities[0]['Total Members'];
    totalActiveMembers = data.activities[1]['Total Active Members'];
    totalBlockedMembers = data.activities[2]['Total Blocked Members'];
  }

  console.log(val);

  <Global
    styles={{
      // Use Global to apply global CSS
      '.chakra-tabs__tab[aria-selected=true]': {
        borderBottom: 'none',
      },
    }}
  />;

  return (
    <>
      <MainDashboard title={'Home'}>
        {/* First row stack Starts */}
        <Stack
          alignItems={'center'}
          justifyContent={'space-between'}
          direction={'row'}
          mt={'25px'}
        >
          <Stack
            alignItems={'center'}
            justifyContent={'space-between'}
            direction={'row'}
            w={'100%'}
            p={'0px 10px'}
          >
            <Box bg={'#212121'} p={'4'} w={'49%'}>
              <Text color={'#f40095'} fontSize={'22px'}>
                Total Members
              </Text>
              <Text color={'#fff'} fontSize={'40px'}>
                {totalMembers ?? 0}
              </Text>
            </Box>
            <Box bg={'#212121'} p={'4'} w={'50%'}>
              <Text color={'#f40095'} fontSize={'22px'}>
                Total Active Members
              </Text>
              <Text color={'#fff'} fontSize={'40px'}>
                {totalActiveMembers ?? 0}
              </Text>
            </Box>
            <Box bg={'#212121'} p={'4'} w={'50%'}>
              <Text color={'#f40095'} fontSize={'22px'}>
                Total Blocked Members
              </Text>
              <Text color={'#fff'} fontSize={'40px'}>
                {totalBlockedMembers ?? 0}
              </Text>
            </Box>
          </Stack>
        </Stack>
        {/* First row stack Ends */}

        {/* Second row stack starts */}
        <Stack mt={'20px'}>
          <Box w={'100%'} p={'0px 10px'} mb={'20px'}>
            <CustomHeading
              mb={'0'}
              textAlign={'left'}
              fontSize={'23px'}
              color={'#fff'}
            >
              Members Activities
            </CustomHeading>
            <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>
              Manage, Total users, courses, tiers and their progress
            </Text>
          </Box>
        </Stack>
        {/* Second row stack Ends */}

        {/* Third row stack starts */}
        <Stack mt={'30px'}>
          <Tabs borderBottom={'none'}>
            <TabList borderBottom={'none'}>
              <Tab
                color={'none'}
                onClick={() => {
                  setVal('team');
                }}
                border={'none'}
              >
                <Button
                  backgroundColor={val == 'team' && '#f40095'}
                  _hover={'none'}
                  color={val == 'team' && 'white'}
                >
                  Team Members
                </Button>
              </Tab>
              <Tab
                color={'none'}
                onClick={() => {
                  setVal('block');
                }}
                border={'none'}
              >
                <Button
                  backgroundColor={val == 'block' && '#f40095'}
                  _hover={'none'}
                  color={val == 'block' && 'white'}
                >
                  Blocked Members
                </Button>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box w={'100%'} p={'0px 10px'}>
                  <CustomHeading
                    mb={'0'}
                    textAlign={'left'}
                    fontSize={'23px'}
                    color={'#fff'}
                  >
                    4 Total Members
                  </CustomHeading>
                </Box>
                <TableContainer>
                  <Table variant="simple">
                    <Tbody>
                      {data?.activeMembers &&
                      data?.activeMembers?.length > 0 ? (
                        data?.activeMembers?.map(item => {
                          return (
                            <Tr key={item?._id}>
                              <Td color={'#fff'} opacity={'0.5'}>
                                Name:{item?.username}
                              </Td>
                              <Td color={'#fff'} opacity={'0.5'}>
                                email:{item?.email}
                              </Td>
                              <Td>
                                <BorderButton
                                  Url={'/dashboard/Users/usersdetails'}
                                  flex="1"
                                  Btnctn={'View Details'}
                                />
                              </Td>
                            </Tr>
                          );
                        })
                      ) : (
                        <Text fontSize={'17px'} color={'white'}>
                          No Data Found
                        </Text>
                      )}
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel>
                <Box w={'100%'} p={'0px 10px'}>
                  <CustomHeading
                    mb={'0'}
                    textAlign={'left'}
                    fontSize={'23px'}
                    color={'#fff'}
                  >
                    4 Blocked Members
                  </CustomHeading>
                </Box>
                <TableContainer>
                  <Table variant="simple">
                    <Tbody>
                      {
                        data?.blockedMembers && data?.blockedMembers.length>0?data?.blockedMembers.map((item)=>{
                          return(
                            <Tr>
                        <Td color={'#fff'} opacity={'0.5'}>
                          Name:{item?.username}
                        </Td>
                        <Td color={'#fff'} opacity={'0.5'}>
                          Email:{item?.email}
                        </Td>
                        
                        <Td>
                          <BorderButton
                            Url={'/dashboard/Users/usersdetails'}
                            flex="1"
                            Btnctn={'View Details'}
                          />
                        </Td>
                      </Tr>
                          )
                        }):<Text fontSize={"17px"} color={"white"}>No Data Found</Text>
                      }
                      
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
        {/* Third row stack Ends */}
      </MainDashboard>
    </>
  );
}
