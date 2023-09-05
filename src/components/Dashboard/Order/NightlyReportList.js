import React from 'react'
import CustomPara from '../../Website/Paragraph/CustomPara';
import { Box, Stack } from '@chakra-ui/react';
import CustomHeading from '../../Website/Headings/CustomHeading';
import BorderButton from '../../Website/Buttons/BorderButton';

export default function NightlyReportList() {
  return (
    <>
    <Stack py={'5'} borderBottom={'1px solid #fff'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Box>
                <CustomPara fontWeight={'900'} marginBottom={0} color={'brand.800'}>Id no</CustomPara>
                <CustomHeading textAlign={'left'} color={'#fff'} fontSize={'15px'}>#545631</CustomHeading>
            </Box>
            <Box>
                <CustomPara fontWeight={'900'} marginBottom={0} color={'brand.800'}>Earned</CustomPara>
                <CustomHeading textAlign={'left'} color={'#fff'} fontSize={'15px'}>$2,12.00</CustomHeading>
            </Box>
            <Box>
                <CustomPara fontWeight={'900'} marginBottom={0} color={'brand.800'}>Avg Ordered</CustomPara>
                <CustomHeading textAlign={'left'} color={'#fff'} fontSize={'15px'}>15%</CustomHeading>
            </Box>
            <Box>
                <CustomPara fontWeight={'900'} marginBottom={0} color={'brand.800'}>Avg Events</CustomPara>
                <CustomHeading textAlign={'left'} color={'#fff'} fontSize={'15px'}>1 Event</CustomHeading>
            </Box>
            <Box>
                <CustomPara fontWeight={'900'} marginBottom={0} color={'brand.800'}>Date</CustomPara>
                <CustomHeading textAlign={'left'} color={'#fff'} fontSize={'15px'}>Aug 15, 2021</CustomHeading>
            </Box>
            <Box>
                <BorderButton Url={'./'} Btnctn={'Export'}/>
            </Box>
          </Stack>
    </>
  )
}
