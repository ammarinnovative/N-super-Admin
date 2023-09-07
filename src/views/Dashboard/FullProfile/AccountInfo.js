import { Box, Button, Icon, Image, Stack, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import React from 'react';
import MainDashboard from '../MainDashboard';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import Userprofile from '../../../assets/images/01.png';
import { HiDocument } from 'react-icons/hi'


export default function Index() {
    return (
        <>
            <MainDashboard title={'Home'}>
                {/* Second row stack starts */}
                
                <Stack 
                direction={'row'}
                flexWrap={'wrap'}
                gap={'4'}
                justifyContent={'space-between'}
                alignItems={'center'}
                textAlign={'left'}
                mb={'45px'}
                p={'0px 15px'}
              >
                <Box
                  bg={'#272727'}
                  p={'28px 18px'}
                  borderRadius={'11px'}
                  textAlign={'left'}
                  w={'285px'}
                  minHeight={'144px'}
                >
                  <CustomHeading
                    fontSize={'18px'}
                    color={'#dc0a9b'}
                    textAlign={'left'}
                    mb={'20px'}
                  >
                    Total Revenue
                  </CustomHeading>
                  <CustomPara marginBottom={'0'} fontSize={'40px'} textAlign={'left'}>
                    $10,214
                  </CustomPara>
                </Box>
                <Box
                  bg={'#272727'}
                  p={'28px 18px'}
                  borderRadius={'11px'}
                  textAlign={'left'}
                  w={'285px'}
                  minHeight={'144px'}
                >
                  <CustomHeading
                    fontSize={'18px'}
                    color={'#dc0a9b'}
                    textAlign={'left'}
                    mb={'20px'}
                  >
                    Total Sales
                  </CustomHeading>
                  <CustomPara marginBottom={'0'} fontSize={'40px'} textAlign={'left'}>
                    $10,214
                  </CustomPara>
                </Box>
                <Box
                  bg={'#272727'}
                  p={'28px 18px'}
                  borderRadius={'11px'}
                  textAlign={'left'}
                  w={'285px'}
                  minHeight={'144px'}
                >
                  <CustomHeading
                    fontSize={'18px'}
                    color={'#dc0a9b'}
                    textAlign={'left'}
                    mb={'20px'}
                  >
                    Total Orders
                  </CustomHeading>
                  <Stack
                    direction={'row'}
                    flexWrap={'wrap'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Box>
                      <CustomPara marginBottom={'0'} fontSize={'40px'} textAlign={'left'}>
                        121
                      </CustomPara>
                    </Box>
                    <Box>
                      <BorderButton w={'full'}  Url={'/dashboard/orderdetails'} Btnctn={'View Orders'} />
                    </Box>
                  </Stack>
                </Box>
                <Box
                  bg={'#272727'}
                  p={'28px 18px'}
                  borderRadius={'11px'}
                  textAlign={'left'}
                  w={'285px'}
                  minHeight={'144px'}
                >
                  <CustomHeading
                    fontSize={'18px'}
                    color={'#dc0a9b'}
                    textAlign={'left'}
                    mb={'20px'}
                  >
                    Total Canceled Orders
                  </CustomHeading>
                  <Stack
                    direction={'row'}
                    flexWrap={'wrap'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Box>
                      <CustomPara marginBottom={'0'} fontSize={'40px'} textAlign={'left'}>
                        121
                      </CustomPara>
                    </Box>
                    <Box>
                      <BorderButton w={'full'}  Url={'./'} Btnctn={'View Orders'} />
                    </Box>
                  </Stack>
                  
                </Box>
                <Box
                  bg={'#272727'}
                  p={'28px 18px'}
                  borderRadius={'11px'}
                  textAlign={'left'}
                  w={'285px'}
                >
                  <CustomHeading
                    fontSize={'18px'}
                    color={'#dc0a9b'}
                    textAlign={'left'}
                    mb={'20px'}
                  >
                    Nightly Overview Report
                  </CustomHeading>
                  <Stack
                    direction={'row'}
                    flexWrap={'wrap'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Box>
                      <CustomPara marginBottom={'0'} fontSize={'40px'} textAlign={'left'}>
                        121
                      </CustomPara>
                    </Box>
                    <Box>
                      <BorderButton w={'full'}  Url={'./'} Btnctn={'Generate Reports'} />
                    </Box>
                  </Stack>
                </Box>
              </Stack>
                
                <Stack mt={"20px"} direction={'row'} justify={'space-between'}  p={'0px 15px'}>
                    <Stack w={'70%'}>
                        <Box w={'100%'} p={'0px 10px'} mb={'20px'}>
                            <CustomHeading
                                mb={'0'}
                                textAlign={'left'}
                                fontSize={'23px'}
                                color={'#fff'}
                            >
                                Bar Owner Info
                            </CustomHeading>
                        </Box>
                        <Stack direction={'row'} w={'full'} justify={'space-between'} mb={'25px !important'} pb={'25px !important'} borderBottom={'solid 1px #535353'}>
                            <Stack direction={'row'}>
                                <Box>
                                    <Image h={'52px'} w={'52px'} src={Userprofile} />
                                </Box>
                                <Box>
                                    <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>Name:</Text>
                                    <Text color={'#fff'} fontSize={'18px'}>Eva Jackson</Text>
                                </Box>
                            </Stack>
                            <Box>
                                <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>Email</Text>
                                <Text color={'#fff'} fontSize={'18px'}>evajackson43@gmail.com</Text>
                            </Box>
                            <Box>
                                <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>DOB</Text>
                                <Text color={'#fff'} fontSize={'18px'}>06/25/1999</Text>
                            </Box>
                            <Box></Box>
                        </Stack>

                        <Stack
                            direction={'row'}
                            flexWrap={'wrap'}
                            gap={'4'}
                            justifyContent={'space-between'}
                            textAlign={'left'}
                        >
                            <Box>
                                <Text color={'#fff'} fontSize={'25px'} mb={'25px'}>Bar Info</Text>
                                <Stack w={'full'} mb={'25px !important'} pb={'25px !important'}>
                                    <Stack direction={'row'}>
                                        <Box>
                                            <Image h={'52px'} w={'52px'} src={Userprofile} />
                                        </Box>
                                        <Box>
                                            <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>Name:</Text>
                                            <Text color={'#fff'} fontSize={'18px'}>Eva Jackson</Text>
                                        </Box>
                                    </Stack>
                                    <Box mt={'25px !important'}>
                                        <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>Email</Text>
                                        <Text color={'#fff'} fontSize={'18px'}>evajackson43@gmail.com</Text>
                                    </Box>
                                    <Box mt={'25px !important'}>
                                        <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>DOB</Text>
                                        <Text color={'#fff'} fontSize={'18px'}>06/25/1999</Text>
                                    </Box>
                                    <Box mt={'25px !important'}>
                                        <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>City</Text>
                                        <Text color={'#fff'} fontSize={'18px'}>Louisville</Text>
                                    </Box>
                                    <Box mt={'25px !important'}>
                                        <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>Phone No:</Text>
                                        <Text color={'#fff'} fontSize={'18px'}>+1 (000) 0000 0000</Text>
                                    </Box>
                                    <Box mt={'25px !important'}>
                                        <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>State</Text>
                                        <Text color={'#fff'} fontSize={'18px'}>Kentucky</Text>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box mr={'38px !important'}> 
                                <Text color={'#fff'} fontSize={'25px'}>Download tha Bar Document</Text>
                                <Stack
                                    bg={'#202020'}
                                    p={'13px 23px'}
                                    direction={'row'} 
                                    justifyContent={'space-between'}
                                    alignItems={'center'}
                                    w={'100%'}
                                    mt={'25px'}
                                >
                                    <Stack
                                        direction={'row'} 
                                        justifyContent={'space-between'}
                                        alignItems={'center'}
                                    >
                                        <Box>
                                            <Icon color={'#3f3f3f'} fontSize={'64px'} as={HiDocument}/>
                                        </Box>
                                        <Box>
                                            <Text color={'#fff'} fontSize={'16px'}>docs.pdf</Text>
                                            <Text color={'#fff'} fontSize={'16px'}>3MB</Text>
                                        </Box>
                                    </Stack>
                                    <Box>
                                        <BorderButton w={'full'}  Url={'./'} Btnctn={'Download'} />
                                    </Box>
                                </Stack>
                            </Box>  
                        </Stack>            

                    </Stack>
                    <Stack
                        w={'30%'}
                        mt={'20px'}>
                        <Box
                            bgColor={'#DC0A9B'}
                            borderRadius={'10px'}
                            p={'20px 30px'}
                        >
                            <Box w={'100%'} p={'0px 10px'} mb={'20px'}>
                                <CustomHeading
                                    mb={'0'}
                                    textAlign={'left'}
                                    fontSize={'23px'}
                                    color={'#fff'}
                                >
                                    Credit Card Info
                                </CustomHeading>
                            </Box>
                            <Box w={'100%'} p={'0px 10px'} mb={'20px'}>
                                <CustomHeading
                                    mb={'0'}
                                    textAlign={'left'}
                                    fontSize={'17px'}
                                    color={'#d7bebe'}
                                    opacity={'0.5'}
                                >
                                    Card Number:
                                </CustomHeading>
                                <Text
                                    mb={'10px'}
                                    textAlign={'left'}
                                    fontSize={'17px'}
                                    color={'#fff'}
                                >51453 15201 9203 4178</Text>

                                <CustomHeading
                                    mb={'0'}
                                    textAlign={'left'}
                                    fontSize={'17px'}
                                    color={'#d7bebe'}
                                    opacity={'0.5'}
                                >
                                    Card Holder:
                                </CustomHeading>
                                <Text
                                    mb={'10px'}
                                    textAlign={'left'}
                                    fontSize={'17px'}
                                    color={'#fff'}
                                >Eva Jackson</Text>


                                <CustomHeading
                                    mb={'0'}
                                    textAlign={'left'}
                                    fontSize={'17px'}
                                    color={'#d7bebe'}
                                    opacity={'0.5'}
                                >
                                    Exp:
                                </CustomHeading>
                                <Text
                                    mb={'0'}
                                    textAlign={'left'}
                                    fontSize={'17px'}
                                    color={'#fff'}
                                >08/27</Text>

                            </Box>
                        </Box>   
                    </Stack>

                </Stack>
                {/* Second row stack Ends */}

            </MainDashboard>
        </>
    );
}
