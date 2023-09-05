import { Box, Image, Link } from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../Headings/CustomHeading';
import { Link as ReactLink } from 'react-router-dom';
import f1 from '../../../assets/images/shorts/f1.jpg';

export default function FeaturedBar() {
  return (
    <>
      <Box bg={'#1d1d1d'} borderRadius={'12'}>
        <Image src={f1} borderRadius={'6'} />
        <Box px={'3'} py={'6'}>
          <CustomHeading fontSize={'20px'} textAlign={'left'}>
            New Amsterdam Club
          </CustomHeading>
          <Link as={ReactLink} to={'/StoreProfile'} color={'#fff'}>
            View Store
          </Link>
        </Box>
      </Box>
    </>
  );
}
