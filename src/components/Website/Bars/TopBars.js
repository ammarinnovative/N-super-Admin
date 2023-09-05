import { Box, Container, Image, Link, Stack } from '@chakra-ui/react';
import Topbar from '../../../assets/images/shorts/topbar.jpg'
import React from 'react';
import CustomHeading from '../Headings/CustomHeading';

export default function TopBars() {
  return (
    <>
      <Box w={'165px'}>
        <Image src={Topbar} borderRadius={'12'} mb={'14px'} />
        <CustomHeading fontSize={'20px'} textAlign={'left'} color={'#fff'}>
          Amsterdam Club
        </CustomHeading>
        <Link fontSize={'14px'} color={'#fff'} to={'/'}>
          View Store
        </Link>
      </Box>
    </>
  );
}
