import { Box, Container, Flex, Image, Stack,Link } from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../Headings/CustomHeading';
import CustomPara from '../Paragraph/CustomPara';
import AppMobile from '../../../assets/images/shorts/appmobile.png';
import AppStore from '../../../assets/images/shorts/appstore.png';
import PlayStore from '../../../assets/images/shorts/playstore.png';
import { Link as ReactLink } from 'react-router-dom';

export default function AppCta() {
  return (
    <>
      <Stack bg={'#dc0b9b'} py={32} mt={'0 !important'} position={'relative'}>
        <Container maxW={'6xl'} p={{ base: '15px !important', '2xl': 0 }}>
          <Stack direction={'row'} alignItems={'center'}>
            <Box w={'50%'}>
              <CustomHeading color={'#fff'} textAlign={'left'}>
                Party Different with Night District
              </CustomHeading>
              <CustomPara>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris
                <br />
                nisi ut aliquip ex ea commodo consequat.
              </CustomPara>
              <Stack direction={'row'}>
              <Link><Image src={PlayStore} /></Link>
              <Link><Image src={AppStore} /></Link>
              </Stack>
            </Box>
            <Box w={'50%'}>
              <Image top={'-16%'} position={'absolute'} src={AppMobile} />
            </Box>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
