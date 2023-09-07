import {
  Box,
  Button,
  Icon,
  Image,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import MainDashboard from '../MainDashboard';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import Userprofile from '../../../assets/images/01.png';
import { useSelector } from 'react-redux';
import { HiDocument } from 'react-icons/hi';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GET } from '../../../utilities/ApiProvider';
import { imgUrl } from '../../../utilities/Config';

export default function Index() {
  const [user, setUser] = useState({});
  const [data, setData] = useState({});
  const selector = useSelector(state => state);
  const params = useParams();

  const getData = async () => {
    const res = await GET(`admin/bar/details/${params.id}`, {
      authorization: `bearer ${user?.verificationToken}`,
    });
    setData(res?.data);
  };


  useEffect(() => {
    if (selector) {
      setUser(selector?.value);
    }
  }, [selector]);
  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  return (
    <>
      <MainDashboard title={'Home'}>
        {/* Second row stack starts */}

        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          gap={'4'}
          justifyContent={'space-between'}
          alignItems={'center'}
          textAlign={'left'}
          mb={'45px'}
          p={'0px 15px'}
        >
          <Box
            bg={'#272727'}
            p={'28px 18px'}
            borderRadius={'11px'}
            textAlign={'left'}
            w={'285px'}
            minHeight={'144px'}
          >
            <CustomHeading
              fontSize={'18px'}
              color={'#dc0a9b'}
              textAlign={'left'}
              mb={'20px'}
            >
              Total Revenue
            </CustomHeading>
            <CustomPara marginBottom={'0'} fontSize={'40px'} textAlign={'left'}>
              $10,214
            </CustomPara>
          </Box>
          <Box
            bg={'#272727'}
            p={'28px 18px'}
            borderRadius={'11px'}
            textAlign={'left'}
            w={'285px'}
            minHeight={'144px'}
          >
            <CustomHeading
              fontSize={'18px'}
              color={'#dc0a9b'}
              textAlign={'left'}
              mb={'20px'}
            >
              Total Sales
            </CustomHeading>
            <CustomPara marginBottom={'0'} fontSize={'40px'} textAlign={'left'}>
              $10,214
            </CustomPara>
          </Box>
          <Box
            bg={'#272727'}
            p={'28px 18px'}
            borderRadius={'11px'}
            textAlign={'left'}
            w={'285px'}
            minHeight={'144px'}
          >
            <CustomHeading
              fontSize={'18px'}
              color={'#dc0a9b'}
              textAlign={'left'}
              mb={'20px'}
            >
              Total Orders
            </CustomHeading>
            <Stack
              direction={'row'}
              flexWrap={'wrap'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Box>
                <CustomPara
                  marginBottom={'0'}
                  fontSize={'40px'}
                  textAlign={'left'}
                >
                  121
                </CustomPara>
              </Box>
              <Box>
                <BorderButton
                  w={'full'}
                  Url={'/dashboard/orderdetails'}
                  Btnctn={'View Orders'}
                />
              </Box>
            </Stack>
          </Box>
          <Box
            bg={'#272727'}
            p={'28px 18px'}
            borderRadius={'11px'}
            textAlign={'left'}
            w={'285px'}
            minHeight={'144px'}
          >
            <CustomHeading
              fontSize={'18px'}
              color={'#dc0a9b'}
              textAlign={'left'}
              mb={'20px'}
            >
              Total Canceled Orders
            </CustomHeading>
            <Stack
              direction={'row'}
              flexWrap={'wrap'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Box>
                <CustomPara
                  marginBottom={'0'}
                  fontSize={'40px'}
                  textAlign={'left'}
                >
                  121
                </CustomPara>
              </Box>
              <Box>
                <BorderButton w={'full'} Url={'./'} Btnctn={'View Orders'} />
              </Box>
            </Stack>
          </Box>
          <Box
            bg={'#272727'}
            p={'28px 18px'}
            borderRadius={'11px'}
            textAlign={'left'}
            w={'285px'}
          >
            <CustomHeading
              fontSize={'18px'}
              color={'#dc0a9b'}
              textAlign={'left'}
              mb={'20px'}
            >
              Nightly Overview Report
            </CustomHeading>
            <Stack
              direction={'row'}
              flexWrap={'wrap'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Box>
                <CustomPara
                  marginBottom={'0'}
                  fontSize={'40px'}
                  textAlign={'left'}
                >
                  121
                </CustomPara>
              </Box>
              <Box>
                <BorderButton
                  w={'full'}
                  Url={'./'}
                  Btnctn={'Generate Reports'}
                />
              </Box>
            </Stack>
          </Box>
        </Stack>

        <Stack
          mt={'20px'}
          direction={'row'}
          justify={'space-between'}
          p={'0px 15px'}
        >
          <Stack w={'70%'}>
            <Box w={'100%'} p={'0px 10px'} mb={'20px'}>
              <CustomHeading
                mb={'0'}
                textAlign={'left'}
                fontSize={'23px'}
                color={'#fff'}
              >
                Bar Owner Info
              </CustomHeading>
            </Box>
            <Stack
              direction={'row'}
              w={'full'}
              justify={'space-between'}
              mb={'25px !important'}
              pb={'25px !important'}
              borderBottom={'solid 1px #535353'}
            >
              <Stack direction={'row'}>
                <Box>
                  <Image h={'52px'} w={'52px'} src={Userprofile} />
                </Box>
                <Box>
                  <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>
                    Name:
                  </Text>
                  <Text color={'#fff'} fontSize={'18px'}>
                   {data?.owner?.username}
                  </Text>
                </Box>
              </Stack>
              <Box>
                <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>
                  Email
                </Text>
                <Text color={'#fff'} fontSize={'18px'}>
                  {data?.owner?.email}
                </Text>
              </Box>
            </Stack>

            <Stack
              direction={'row'}
              flexWrap={'wrap'}
              gap={'4'}
              justifyContent={'space-between'}
              textAlign={'left'}
            >
              <Box>
                <Text color={'#fff'} fontSize={'25px'} mb={'25px'}>
                  Bar Info
                </Text>
                <Stack w={'full'} mb={'25px !important'} pb={'25px !important'}>
                  <Stack direction={'row'}>
                    <Box >
                      <Image h={'52px'} w={'52px'} borderRadius={"50%"} src={`${imgUrl}${data?.upload_logo}`} />
                    </Box>
                    <Box>
                      <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>
                        Name:
                      </Text>
                      <Text color={'#fff'} fontSize={'18px'}>
                        {data?.barName}
                      </Text>
                    </Box>
                  </Stack>
                  <Box mt={'25px !important'}>
                    <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>
                      Creation
                    </Text>
                    <Text color={'#fff'} fontSize={'18px'}>
                      {data?.createdAt??"24/5/2023"}
                    </Text>
                  </Box>
                  <Box mt={'25px !important'}>
                    <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>
                      City
                    </Text>
                    <Text color={'#fff'} fontSize={'18px'}>
                      {data?.city}
                    </Text>
                  </Box>
                  <Box mt={'25px !important'}>
                    <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>
                      Phone No:
                    </Text>
                    <Text color={'#fff'} fontSize={'18px'}>
                      {data?.phone}
                    </Text>
                  </Box>
                  <Box mt={'25px !important'}>
                    <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>
                      State
                    </Text>
                    <Text color={'#fff'} fontSize={'18px'}>
                      {data?.state}
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <Box mr={'38px !important'}>
                <Text color={'#fff'} fontSize={'25px'}>
                  Download tha Bar Document
                </Text>
                <Stack
                  bg={'#202020'}
                  p={'13px 23px'}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  w={'100%'}
                  mt={'25px'}
                >
                  <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Box>
                      <Icon
                        color={'#3f3f3f'}
                        fontSize={'64px'}
                        as={HiDocument}
                      />
                    </Box>
                    <Box>
                      <Text color={'#fff'} fontSize={'16px'}>
                        docs.pdf
                      </Text>
                      <Text color={'#fff'} fontSize={'16px'}>
                        3MB
                      </Text>
                    </Box>
                  </Stack>
                  <Box>
                    <BorderButton w={'full'} Url={'./'} Btnctn={'Download'} />
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Stack>
          
        </Stack>
        {/* Second row stack Ends */}
      </MainDashboard>
    </>
  );
}
