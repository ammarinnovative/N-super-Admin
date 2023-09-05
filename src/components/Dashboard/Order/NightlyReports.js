import { Box, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import React from 'react';
import BorderButton from '../../Website/Buttons/BorderButton';
import CustomHeading from '../../Website/Headings/CustomHeading';
import NightlyReportList from '../../Dashboard/Order/NightlyReportList'

export default function NightlyReports() {
  return (
    <>
      <Stack>
        <Stack
          mb={'4'}
          alignItems={'center'}
          justifyContent={'space-between'}
          direction={'row'}
          gap={'6'}
        >
          <CustomHeading
            mb={'0'}
            textAlign={'left'}
            fontSize={'20px'}
            color={'#fff'}
          >
            Nightly Overview Reports
          </CustomHeading>
          <Box>
            <FormControl
              id="name"
              alignItems={'center'}
              display={'flex'}
              gap={'4'}
            >
              <Box position={'relative'}>
                <FormLabel
                  fontWeight={'600'}
                  color={'#fff'}
                  zIndex={'1'}
                  fontSize={'13px'}
                  top={'-2'}
                  left={'5'}
                  position={'absolute'}
                >
                  From
                </FormLabel>
                <Input
                  type={'date'}
                  bg={'#212121'}
                  pt={'7'}
                  pb={'6'}
                  w={'170px'}
                  color={'#fff'}
                />
              </Box>
              <Box position={'relative'}>
                <FormLabel
                  fontWeight={'600'}
                  color={'#fff'}
                  zIndex={'1'}
                  fontSize={'13px'}
                  top={'-2'}
                  left={'5'}
                  position={'absolute'}
                >
                  To
                </FormLabel>
                <Input
                  type={'date'}
                  bg={'#212121'}
                  pt={'7'}
                  pb={'6'}
                  w={'170px'}
                  color={'#fff'}
                />
              </Box>

              <BorderButton Url={'./'} Btnctn={'Search'} />
            </FormControl>
          </Box>
        </Stack>
        <Stack h={'420px'} overflow={'scroll'} bg={'dashbg.100'} p={'4'}>
          <NightlyReportList/>
          <NightlyReportList/>
          <NightlyReportList/>
          <NightlyReportList/>
          <NightlyReportList/>
          <NightlyReportList/>
          <NightlyReportList/>
        </Stack>
      </Stack>
    </>
  );
}
