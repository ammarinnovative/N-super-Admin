import { Box, Button, Image, Stack, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import React from 'react';
import MainDashboard from '../MainDashboard';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import Userprofile from '../../../assets/images/01.png';

export default function Index() {
    return (
        <>
            <MainDashboard title={'Home'}>
                {/* Second row stack starts */}
                <Stack mt={"20px"} direction={'row'} justify={'space-between'}>
                    <Stack w={'70%'}>
                        <Box w={'100%'} p={'0px 10px'} mb={'20px'}>
                            <CustomHeading
                                mb={'0'}
                                textAlign={'left'}
                                fontSize={'23px'}
                                color={'#fff'}
                            >
                                Info
                            </CustomHeading>
                        </Box>
                        <Stack direction={'row'} w={'full'} justify={'space-between'} mb={'25px !important'}>
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

                        <Box w={'100%'} p={'0px 10px'} mb={'20px'}>
                            <CustomHeading
                                mb={'0'}
                                textAlign={'left'}
                                fontSize={'23px'}
                                color={'#fff'}
                            >
                                Purchased Items
                            </CustomHeading>
                            <Text color={'#fff'}>12 Drinks</Text>
                        </Box>

                        <Stack direction={'row'} columnGap={'2'}>
                            <Box>
                                <Text color={'#fff'}>One</Text>
                            </Box>
                            <Box> <Text color={'#fff'}>Two</Text></Box>    
                        </Stack>            

                    </Stack>
                    <Stack
                        w={'30%'}
                        bgColor={'#DC0A9B'}
                        p={'20px 30px'}
                        borderRadius={'10px'}
                        mt={'20px'}>
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
                                color={'#fff'}
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
                                color={'#fff'}
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
                    </Stack>

                </Stack>
                {/* Second row stack Ends */}

            </MainDashboard>
        </>
    );
}
