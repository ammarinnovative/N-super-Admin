import { Box, Flex, Image, Stack } from '@chakra-ui/react';
import Storepic from '../../../assets/images/shorts/store.jpg';
import React from 'react';
import CustomHeading from '../Headings/CustomHeading';
import CustomPara from '../Paragraph/CustomPara';
import PrimaryBtn from '../Buttons/PrimaryBtn';

export default function StoreDetails() {
  return (
    <>
      <Stack>
        <Stack direction={'row'} alignItems={'center'} gap={'3'}>
          <Box>
            <Image borderRadius={'50%'} src={Storepic} />
          </Box>
          <Box>
            <CustomHeading color={'#fff'} fontSize={'30px'} mb={'0'}>
              Night Club
            </CustomHeading>
            <CustomPara color={'primaryText.100'}>1.6K Followers</CustomPara>
          </Box>
        </Stack>
        <Stack>
          <CustomHeading textAlign={'left'} mb={'0'} fontSize={'35px'}>
            About the Night Club
          </CustomHeading>
          <CustomPara marginBottom={'15px !important'}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            <br />
            Excepteur sint proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </CustomPara>
          <Flex gap={'4'}>
            <PrimaryBtn value={'Products'}/>
            <PrimaryBtn value={'Event'}/>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
}
