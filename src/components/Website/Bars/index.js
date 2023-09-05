import { Box, Container, Image, Link, Stack } from '@chakra-ui/react';
import Aboutbanner from '../../../assets/images/Banner/about.png';
import React from 'react';
import CustomHeading from '../Headings/CustomHeading';

import TB1 from '../../../assets/images/shorts/tb1.jpg'
import { Link as ReactLink } from 'react-router-dom';
import TopBars from './TopBars';

export default function index() {
  return (
    <>
      <Stack
        bgImg={Aboutbanner}
        py={36}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={{ base: 'inherit', md: 'fixed' }}
        mt={'0 !important'}
      >
        <Container
          maxW={'6xl'}
          p={{ base: '15px !important', '2xl': 0 }}
        >
            <Stack>
                <Box mb={'10'}><CustomHeading  >Top Rated Bars</CustomHeading></Box>
                <Stack direction={'row'} gap={'4'}>
                  <TopBars/>
                    <Box w={'165px'} >
                        <Image src={TB1} borderRadius={'12'} mb={'14px'} />
                        <CustomHeading fontSize={'20px'} textAlign={'left'}  color={'#fff'}>Paradise Club</CustomHeading>
                        <Link fontSize={'14px'} color={'#fff'} to={'/'}>View Store</Link>
                    </Box>
                </Stack>
            </Stack>
        </Container>
      </Stack>
    </>
  );
}
