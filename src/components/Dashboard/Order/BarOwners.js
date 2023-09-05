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
import { imgUrl } from '../../../utilities/Config';

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
            <BorderButton Url={'/dashboard/'} Btnctn={'See All'} />
          </Box>
        </Stack>
        <Box bg={'#212121'} p={'4'}>
          <Text color={'#fff'} fontSize={'24px'}>
            115 Bar Owner
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
                >
                  <Box color={'#fff'}>
                    {
                      item?.upload_document? <Image src={imgUrl+item?.upload_document} />: <Image src={Ownerprofile} />
                    }
                  </Box>
                  <Box color={'#fff'}>
                    <Text fontSize={'20px'}>{item?.barName}</Text>
                    <Text opacity={'0.4'}>{item?.address}</Text>
                  </Box>
                  <Box color={'#fff'}>
                    <BorderButton Url={'/'} Btnctn={'See Profile'} />
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
