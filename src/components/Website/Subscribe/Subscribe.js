import { Box, Link, Stack } from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../Headings/CustomHeading';
import CustomPara from '../Paragraph/CustomPara';
import Sub from '../../../assets/images/Banner/sub.jpg';
import { Link as ReactLink } from 'react-router-dom';
import BorderButton from '../Buttons/BorderButton';

export default function Subscribe() {
  return (
    <>
      <Stack direction={'row'} mt={'0 !important'}>
        <Box w={'50%'} bg={'#000'} py={32}>
          <Box textAlign={'center'} w={'575px'} marginLeft={'auto'}>
            <CustomHeading
              color={'#fff'}
              fontSize={'30px'}
              textAlign={'center'}
            >
              Find Nearest Night District Location
            </CustomHeading>
            <CustomPara  textAlign={'center'}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              <br />
              nisi ut aliquip ex ea commodo consequat.
            </CustomPara>
           <BorderButton Url={'/'} Btnctn={'Find Now'} />
          </Box>
        </Box>
        <Box
          w={'50%'}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
          backgroundImage={Sub}
          marginLeft={'0 !important'}
          py={32}
        >
          <Box w={'575px'} marginRight={'auto'}>
            <CustomHeading
              color={'#fff'}
              fontSize={'30px'}
              textAlign={'center'}
            >
              Subscribe Your Bar to Night District
            </CustomHeading>
            <CustomPara textAlign={'center'}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              <br />
              nisi ut aliquip ex ea commodo consequat.
            </CustomPara>
            <BorderButton Url={'/BarOwner'}  Btnctn={'Subscribe'} />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
