import React, { useEffect } from 'react';
import {
  Container,
  Stack,
  Img,
  ListItem,
  UnorderedList,
  Radio,
  Text,
  Box,
} from '@chakra-ui/react';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import { Link, useLocation } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import logo from '../../../assets/images/Banner/signlogo.png';
import CustomHeading from '../../../components/Website/Headings/CustomHeading.js';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import Ipod from '../../../assets/images/menu/ipod.jpg';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import { Link as ReactLink } from 'react-router-dom';
import PrimaryBtn from '../../../components/Website/Buttons/PrimaryBtn';

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
       
      >
        <Container maxW={'6xl'}>
          <Stack mb={'12'}>
            <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
            <CustomHeading color={'#fff'}>Choose Your Plan</CustomHeading>
          </Stack>
          <Stack mb={'6'}>
            <UnorderedList listStyleType={'none'} spacing={'6'}>
              <ListItem>
                <Stack gap={4}>
                  <Stack>
                    <CustomPara fontSize={'18px'} fontWeight={'700'} color={'primaryText.200'}>Would you like to add an iPad?</CustomPara>
                    <Radio colorScheme="green" value="2">
                      <Text color={'#fff'}>No, I already have an iPad</Text>
                    </Radio>
                  </Stack>
                  <Stack py={6} borderBottom={'1px solid #fff'} borderTop={'1px solid #fff'}  gap={3}>
                    <Radio colorScheme="green" value="2">
                      <Text color={'#fff'}>Yes, Add 10.2 ”iPad Wifi 64GB - Space Grey (2021)</Text>
                    </Radio>
                    <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
                      <Box display={'flex'} gap={'6'} alignItems={'center'}>
                        <Img src={Ipod} alt="" borderRadius={'6'} />
                        <CustomHeading color={"#fff"} fontSize={'25px'}>Purchase Equipment </CustomHeading>
                      </Box>
                      <Box>
                        <BorderButton Url={'/'} Btnctn={'View Specification'} />
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </ListItem>
              <ListItem>
                <Stack gap={4}>
                  <Stack>
                    <CustomPara fontSize={'18px'} fontWeight={'700'} color={'primaryText.200'}>Would you like to add a stand for your Tablet? HoverBar Duo for iPad</CustomPara>
                    <Radio colorScheme="green" value="2">
                      <Text color={'#fff'}>No, I already have an Tablet</Text>
                    </Radio>
                  </Stack>
                  <Stack py={6} borderBottom={'1px solid #fff'} borderTop={'1px solid #fff'}  gap={3}>
                    <Radio colorScheme="green" value="2">
                      <Text color={'#fff'}>Yes, Add 10.2 ”iPad Wifi 64GB - Space Grey (2021)</Text>
                    </Radio>
                    <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
                      <Box display={'flex'} gap={'6'} alignItems={'center'}>
                        <Img src={Ipod} alt="" borderRadius={'6'} />
                        <CustomHeading color={"#fff"} fontSize={'25px'}>Purchase Equipment </CustomHeading>
                      </Box>
                      <Box>
                        <BorderButton Url={'/'} Btnctn={'View Specification'} />
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </ListItem>
              <ListItem>
                <Stack gap={4}>
                  <Stack>
                    <CustomPara fontSize={'18px'} fontWeight={'700'} color={'primaryText.200'}>Would you like to add a stand for your Tablet? HoverBar Duo for iPad</CustomPara>
                    <Radio colorScheme="green" value="2">
                      <Text color={'#fff'}>No, I already have an Tablet</Text>
                    </Radio>
                  </Stack>
                  <Stack py={6} borderBottom={'1px solid #fff'} borderTop={'1px solid #fff'}  gap={3}>
                    <Radio colorScheme="green" value="2">
                      <Text color={'#fff'}>Yes, Add 10.2 ”iPad Wifi 64GB - Space Grey (2021)</Text>
                    </Radio>
                    <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
                      <Box display={'flex'} gap={'6'} alignItems={'center'}>
                        <Img src={Ipod} alt="" borderRadius={'6'} />
                        <CustomHeading color={"#fff"} fontSize={'25px'}>Purchase Equipment </CustomHeading>
                      </Box>
                      <Box>
                        <BorderButton Url={'/'} Btnctn={'View Specification'} />
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </ListItem>
            </UnorderedList>
          </Stack>
          <Stack textAlign={'center'}>
           <Link as={ReactLink} to={'/dashboard/payment'}>
            <PrimaryBtn value={'Continue'}/>
           </Link>
            
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
