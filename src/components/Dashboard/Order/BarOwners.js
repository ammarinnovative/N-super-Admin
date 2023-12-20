import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Box, Image, Stack, Text } from '@chakra-ui/react';
import CustomHeading from '../../Website/Headings/CustomHeading';
import BorderButton from '../../Website/Buttons/BorderButton';
import Ownerprofile from '../../../assets/images/01.png';
import { imgUrl, imgUrlNew } from '../../../utilities/Config';

export default function BarOwners({ data }) {
  console.log(data);
  return (
    <>
      <Stack>
        <Stack
          mb={'4'}
          alignItems={'center'}
          justifyContent={'space-between'}
          direction={'row'}
        >
          <CustomHeading
            mb={'0'}
            textAlign={'left'}
            fontSize={'23px'}
            color={'#fff'}
          >
            Register bar Owners
          </CustomHeading>
          <Box>
            <BorderButton Url={'/dashboard/barowner'} Btnctn={'See All'} />
          </Box>
        </Stack>
        <Box bg={'#212121'} p={'4'} height={'545px'} overflow={'auto'}>
          <Text color={'#fff'} fontSize={'24px'}>
            {data?.length} Bar Owner
          </Text>
          {data?.length > 0 ? (
            data?.map(item => {
              return (
                <Stack
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  direction={'row'}
                  borderBottom={'solid 1px #fff'}
                  pb={'15px'}
                  mt={'15px'}
                  key={item?._id}
                >
                  <Box color={'#fff'} display={'flex'} alignItems={'center'} gap={'20px'}>
                    {
                      <Image
                        w={'80px'}
                        h={'80px'}
                        borderRadius={'100%'}
                        backgroundColor={'#fff'}
                        objectFit={'contain'}
                        src={item?.upload_logo ? `${imgUrlNew}${item?.upload_logo}` : Ownerprofile} />
                    }
                    <Box color={'#fff'}>
                      <Text fontSize={'20px'}>{item?.barName}</Text>
                      <Text w={'250px'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'} opacity={'0.4'}>{item?.address}</Text>
                    </Box>
                  </Box>
                  <Box color={'#fff'}>
                    <BorderButton Url={`/dashboard/barownerdetails/${item?._id}`} Btnctn={'See Profile'} />
                  </Box>
                </Stack>
              );
            })
          ) : (
            <Text color={'white'} fontSize={'17px'}>
              No Data Found
            </Text>
          )}
        </Box>
      </Stack>
    </>
  );
}
