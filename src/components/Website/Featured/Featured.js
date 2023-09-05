import { Box, Container, Stack, Link, Image } from '@chakra-ui/react';
import React from 'react';
import Sliderban from '../../../assets/images/Banner/silder.png';
import f1 from '../../../assets/images/shorts/f1.jpg';
import f2 from '../../../assets/images/shorts/f2.jpg';
import f3 from '../../../assets/images/shorts/f3.jpg';
import f4 from '../../../assets/images/shorts/f4.jpg';
import CustomHeading from '../Headings/CustomHeading';
import CustomPara from '../Paragraph/CustomPara';
import { Link as ReactLink } from 'react-router-dom';
import FeaturedBar from './FeaturedBar';

export default function Featured() {
  return (
    <>
      <Stack bgImg={Sliderban} py={32} 
      bgSize={'cover'}
      bgRepeat={'no-repeat'}
      mt={'0 !important'}>
        <Container maxW={'6xl'} p={{ base: '15px !important', '2xl': 0 }}>
          <Stack>
            <Stack direction={'row'} alignItems={'center'} mb={'20'}>
              <Box w={'80%'}>
                <CustomHeading textAlign={'left'} color={'#fff'}>
                  Featured Bars & Clubs
                </CustomHeading>
                <CustomPara>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris <br />
                  nisi ut aliquip ex ea commodo consequat.
                </CustomPara>
              </Box>
              <Box w={'20%'} textAlign={'right'} marginRight={'auto'}>
                <Link
                  textAlign={'center'}
                  margin={'auto'}
                  p={'10px'}
                  w={'150px'}
                  border={'1px solid #fff'}
                  borderRadius={'6px'}
                  color={'#fff'}
                  display={'block'}
                >
                  View All
                </Link>
              </Box>
            </Stack>
          </Stack>
          <Stack direction={'row'} gap={'6'}>
            <FeaturedBar/>
           
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
