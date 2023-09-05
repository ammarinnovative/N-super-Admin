import { Box, Container, Stack } from '@chakra-ui/react';
import React from 'react';
import InerBannner from '../../components/Website/Banners/InerBannner';
import StoreDetails from '../../components/Website/Store/StoreDetails';
import Aboutbanner from '../../assets/images/Banner/about.png';
import StoreEvent from '../../components/Website/Store/StoreEvent';
import { useEffect } from 'react';

export default function StoreProfile() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])

  return (
    <>
      <InerBannner simpleHeading={'Store Details'} />
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
          <Stack mb={20}>
            <StoreDetails />
          </Stack>
          <Stack direction={'row'} gap={'4'}>
            <StoreEvent/>
            <StoreEvent/>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
