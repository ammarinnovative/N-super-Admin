import React from 'react';
import { Box, Image, Stack, Link } from '@chakra-ui/react';
import CustomHeading from '../Headings/CustomHeading';
import CustomPara from '../Paragraph/CustomPara';
import Mobile from '../../../assets/images/shorts/mobile.png';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import { useNavigate } from 'react-router';
export default function AboutSilder() {

    const navigate = useNavigate();
  return (
    <>
      <Box>
        <Stack direction={'row'} alignItems={'center'}>
          <Box w={'30%'}>
            <Image src={Mobile} />
          </Box>
          <Box w={'55%'}>
            <CustomHeading textAlign={'left'} color={'#fff'} fontSize={'35px'}>
              Queue Management System
            </CustomHeading>
            <CustomPara>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostr ud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </CustomPara>
            <CustomPara marginBottom={'20px'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CustomPara>
            <Link
              w={{ base: '120px', xl: 'auto' }}
              display={{ base: 'none', lg: 'flex' }}
              onClick={() => navigate('/register')}
            >
              <PrimaryBtn value={'Get Started'} />
            </Link>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
