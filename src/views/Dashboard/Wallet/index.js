import { Box, Button, Flex, Image, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import MainDashboard from '../MainDashboard';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import OrderBox from '../../../components/Dashboard/Order/OrderBox';
import OrderSalesCharts from '../../../components/Dashboard/Order/OrderSalesCharts';
import BarOwners from '../../../components/Dashboard/Order/BarOwners';
import NightlyReports from '../../../components/Dashboard/Order/NightlyReports';
import { AiFillPlusCircle } from 'react-icons/ai'
import { Icon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react'
import cat1 from '../../../assets/images/menu/c1.jpg';
import Users from '../../../assets/images/users.png';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import { Link as ReactLink } from 'react-router-dom';

export default function Index() {
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
              <Text color={'#f40095'} fontSize={'22px'}>Today Earn</Text>
              <Text color={'#fff'} fontSize={'40px'}>45</Text>
            </Box>
            <Box bg={'#212121'} p={'4'} w={'50%'}>
              <Text color={'#f40095'} fontSize={'22px'}>Total Revenue</Text>
              <Text color={'#fff'} fontSize={'40px'}>$24,251.00</Text>
            </Box>
            <Box bg={'#212121'} p={'4'} w={'50%'}>
              <Text color={'#f40095'} fontSize={'22px'}>Total Bar Registered Owners</Text>
              <Text color={'#fff'} fontSize={'40px'}>432</Text>
            </Box>
          </Stack>
        </Stack>
        {/* First row stack Ends */}

        {/* Second row stack starts */}
        <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'space-between'} mt={"20px"}>
          <Box w={'65%'} p={'0px 10px'}>
            <OrderSalesCharts />
          </Box>
          <Box w={'35%'} p={'0px 10px'}>
            <CustomHeading
              mb={'0'}
              textAlign={'left'}
              fontSize={'23px'}
              color={'#fff'}
            >
              Nightly Overview Report
            </CustomHeading>
            <Text color={'#fff'} opacity={'0.6'} mt={'15px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

            <Box
              bgColor={'#DC0A9B'}
              p={'20px 30px'}
              borderRadius={'10px'}
              mt={'20px'}
            >
              <Text fontSize={'30px'} color={'#fff'}>Click to generate</Text>
              <Text fontSize={'25px'} color={'#fff'} mt={'10px'}>the bar report and you will see the bar Revenue, sales, users, bar owners and more!</Text>
              <Button
                bg={'transparent'}
                textAlign={'center'}
                margin={'auto'}
                py={'5px'}
                px={'8'}
                w={'100%'}
                lineHeight={'inherit'}
                border={'1px solid #fff'}
                borderRadius={'6px'}
                color={'#fff'}
                mt={'20px'}
                _hover={{
                  color: 'primaryText.200',
                }}
              >
                Add New Subcategory
              </Button>
            </Box>

          </Box>
        </Stack>
        {/* Second row stack Ends */}


        {/* Third row stack starts */}
        <Stack mt={"20px"}>
          <Box w={'100%'} p={'0px 10px'}>
            <CustomHeading
              mb={'0'}
              textAlign={'left'}
              fontSize={'23px'}
              color={'#fff'}
            >
              Recent Activities
            </CustomHeading>
          </Box>

          <Box>

            <TableContainer>
              <Table variant='simple'>
                <Tbody>
                  <Tr>
                    <Td color={'#fff'} opacity={'0.5'}>Name:</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Date:</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Item</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Pay:</Td>
                    <Td>
                      <Button
                        bg={'transparent'}
                        textAlign={'center'}
                        margin={'auto'}
                        py={'5px'}
                        px={'8'}
                        lineHeight={'inherit'}
                        border={'1px solid #fff'}
                        borderRadius={'6px'}
                        color={'#fff'}
                        mt={'20px'}
                        _hover={{
                          color: 'primaryText.200',
                        }}
                      >
                        View Details
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={'#fff'} opacity={'0.5'}>Name:</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Date:</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Item</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Pay:</Td>
                    <Td>
                      <Button
                        bg={'transparent'}
                        textAlign={'center'}
                        margin={'auto'}
                        py={'5px'}
                        px={'8'}
                        lineHeight={'inherit'}
                        border={'1px solid #fff'}
                        borderRadius={'6px'}
                        color={'#fff'}
                        mt={'20px'}
                        _hover={{
                          color: 'primaryText.200',
                        }}
                      >
                        View Details
                      </Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={'#fff'} opacity={'0.5'}>Name:</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Date:</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Item</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Pay:</Td>
                    <Td>
                      <Button
                        bg={'transparent'}
                        textAlign={'center'}
                        margin={'auto'}
                        py={'5px'}
                        px={'8'}
                        lineHeight={'inherit'}
                        border={'1px solid #fff'}
                        borderRadius={'6px'}
                        color={'#fff'}
                        mt={'20px'}
                        _hover={{
                          color: 'primaryText.200',
                        }}
                      >
                        View Details
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

          </Box>


        </Stack>
        {/* Third row stack Ends */}




      </MainDashboard>
    </>
  );
}
