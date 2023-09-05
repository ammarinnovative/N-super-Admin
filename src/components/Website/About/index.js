import { Container,  Stack} from '@chakra-ui/react';
import Aboutbanner from '../../../assets/images/Banner/about.png';
import React from 'react';
import CustomHeading from '../Headings/CustomHeading';
import CustomPara from '../Paragraph/CustomPara';
import { Link as ReactLink } from 'react-router-dom';
import AboutSilder from './AboutSilder';
export default function About() {
  
  return (
    <>
      <Stack
        backgroundImage={Aboutbanner}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={{ base: 'inherit', md: 'fixed' }}
        py={{ base: '6', md: '24', xl: '14', '2xl': '24' }}
        position={'relative'}
        mt={'0 !important'}
      >
        <Container maxW={'6xl'} p={{ base: '15px !important', '2xl': 0 }}>
          <Stack textAlign={'center'} mb={20}>
            <CustomHeading>About Night District</CustomHeading>
            <CustomPara textAlign={'center'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
              <br />
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea
              <br />
              commodo consequat.
            </CustomPara>
          </Stack>
          <AboutSilder/>
        </Container>
      </Stack>
    </>
  );
}
