import { Box, Image } from '@chakra-ui/react';
import Se1 from '../../../assets/images/shorts/se1.jpg';
import React from 'react';
import CustomHeading from '../Headings/CustomHeading';
import CustomPara from '../Paragraph/CustomPara';

export default function StoreEvent() {
  return (
    <>
      <Box w={'280px'} bg={'#1b191b'} p={'5'} borderRadius={'8'}>
        <Image src={Se1} mb={'5'}/>
        <CustomHeading textAlign={'left'} color={'#fff'} fontSize={'20px'}>
          Tito’s Handmade Vodka
        </CustomHeading>
        <CustomPara color={'#fff'} fontSize={'13px'}>
          Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </CustomPara>
      </Box>
    </>
  );
}
