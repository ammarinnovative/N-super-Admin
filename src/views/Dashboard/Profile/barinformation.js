import React, { useState } from 'react';
import {
  Container,
  Checkbox,
  Img,
  Button,
  Stack,
  Box,
  UnorderedList,
  ListItem,
  Link,
  Input,
  useToast,
} from '@chakra-ui/react';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import { useEffect } from 'react';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { POST, PUT } from '../../../utilities/ApiProvider';
import Startermenu from '../../../components/Dashboard/Headers/Startermenu';
import { baseUrl } from '../../../utilities/Config';
import { useSelector } from 'react-redux';

export default function Index() {
  const location = useLocation();
  const user = useSelector(state => state?.value);

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);
  useEffect(() => {
    console.log(user);
  }, [user]);

  const tblist = {
    color: '#fff',
  };
  const signupstyle = {
    w: '48%',
    outline: '1px solid #fff',
    py: '25px',
    bg: '#271623b5',
    color: '#fff',
  };

  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
  const [Fields, setFields] = useState({
    barName: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    url: '',
    upload_document: {},
  });

  const submitForm = async () => {
    try {
      setisLoading(true);
      const formData = new FormData();

      if (
        Fields.barName === '' &&
        Fields.address === '' &&
        Fields.city === '' &&
        Fields.state === '' &&
        Fields.phone === '' &&
        Fields.url === '' &&
        Fields.upload_document === ''
      ) {
        toast({
          status: 'error',
          title: 'Please fill in all the fields to proceed further.',
          duration: 7000,
          isClosable: true,
          position: 'bottom-left',
        });
        setisLoading(false);
        return;
      }

      let response = await PUT(
        `${baseUrl}bar/barInfo/${user?.barinfo}`,
        Fields,
        { authorization: `Bearer ${user?.verificationToken}` }
      );
      console.log(response);
      toast({
        description: response.message,
        status: response.status,
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });

      setFields({
        barName: '',
        address: '',
        city: '',
        state: '',
        phone: '',
        url: '',
        upload_document: '',
      });

      setisLoading(false);
    } catch (err) {
      toast({
        description: 'Something went wrong!',
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });
    }
  };

  const lnk = {
    color: 'pHeading.100',
  };

  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundImage={Signupimg}
        py={'32'}
      >
        <Container maxW={'full'} px={'14'}>
          <Stack direction={'row'} gap={'8'}>
            <Stack w={'350px'}>
              <Startermenu />
            </Stack>
            <Stack w={'70%'} gap={'8'}>
              <Stack>
                <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
                <CustomHeading color={'#fff'}>
                  Welcome to Night District
                </CustomHeading>
                <CustomPara textAlign={'center'}>Enter your details</CustomPara>
              </Stack>
              <Stack
                mb={'8'}
                flexWrap={'wrap'}
                spacing={'0'}
                direction={'row'}
                gap={'6'}
                justifyContent={'space-between'}
              >
                <Input
                  sx={signupstyle}
                  placeholder={'Name'}
                  type="Name"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.barName}
                  onChange={e => {
                    setFields({
                      ...Fields,
                      barName: e.target.value,
                    });
                  }}
                />
                <Input
                  sx={signupstyle}
                  placeholder={'Address'}
                  type="text"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.address}
                  onChange={e => {
                    setFields({
                      ...Fields,
                      address: e.target.value,
                    });
                  }}
                />
                <Input
                  sx={signupstyle}
                  placeholder={'*City'}
                  type="text"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.city}
                  onChange={e => {
                    setFields({
                      ...Fields,
                      city: e.target.value,
                    });
                  }}
                />
                <Input
                  sx={signupstyle}
                  placeholder={'#State'}
                  type="text"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.state}
                  onChange={e => {
                    setFields({
                      ...Fields,
                      state: e.target.value,
                    });
                  }}
                />
                <Input
                  sx={signupstyle}
                  placeholder={'Phone No.'}
                  type="text"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.phone}
                  onChange={e => {
                    setFields({
                      ...Fields,
                      phone: e.target.value,
                    });
                  }}
                />
                <Input
                  sx={signupstyle}
                  placeholder={'Website Url'}
                  type="ConfirmPassword"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.url}
                  onChange={e => {
                    setFields({
                      ...Fields,
                      url: e.target.value,
                    });
                  }}
                />
                <Box
                  position={'relative'}
                  overflow={'hidden'}
                  w={'full'}
                  border={'1px dashed #fff'}
                  py={'8'}
                  textAlign={'center'}
                  borderRadius={'6'}
                >
                  <Button>Upload a file</Button>
                  <Input
                    position={'absolute'}
                    left={'0'}
                    right={'0'}
                    bottom={'0'}
                    top={'0'}
                    h={'100%'}
                    cursor={'pointer'}
                    color={'white'}
                    py={'34px'}
                    type={'file'}
                    name={'file'}
                    onChange={e => {
                      setFields({
                        ...Fields,
                        upload_document: e.target.value,
                      });
                    }}
                  />
                </Box>
                <Checkbox color={'#fff'} colorScheme="green">
                  I agree to the
                  <Link sx={lnk} as={ReactLink} to={'./'}>
                    Terms of Service
                  </Link>
                  &
                  <Link sx={lnk} as={ReactLink} to={'./'}>
                    Privacy Policy
                  </Link>
                  of Night District.
                </Checkbox>
              </Stack>
              <Stack>
                <Button
                  onClick={() => submitForm()}
                  bgColor={'#dc0b9b'}
                  color={'#fff'}
                  borderRadius={6}
                  fontWeight={'600'}
                  px={'50px'}
                  py={6}
                  fontSize={'17px'}
                  border={'2px solid #fff'}
                  borderColor={'#dc0b9b'}
                  _hover={{
                    bgColor: 'transparent',
                    color: '#fff',
                  }}
                  isLoading={isLoading}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
            <Stack w={'350px'}></Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
