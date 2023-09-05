import { Container, Img, Stack } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler.js';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import CustomHeading from '../../../components/Website/Headings/CustomHeading.js';
import logo from '../../../assets/images/Banner/signlogo.png';
import { useEffect } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import Planwarp from '../../../components/Dashboard/Plans/Planwarp.js';
import { useSelector } from 'react-redux';

export default function Index() {


  const location = useLocation();

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);

  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundImage={Signupimg}
        py={'28'}
        h={'100vh'}
      >
        <Container maxW={'6xl'}>
          <Stack mb={'12'}>
            <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
            <CustomHeading color={'#fff'}>Choose Your Plan</CustomHeading>
          </Stack>
          <Stack direction={'row'} gap={'4'}>
            <Planwarp />
          
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
