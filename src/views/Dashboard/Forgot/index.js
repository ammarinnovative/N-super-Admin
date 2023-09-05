import {
  Button,
  Container,
  Img,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler.js';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import CustomHeading from '../../../components/Website/Headings/CustomHeading.js';
import logo from '../../../assets/images/Banner/signlogo.png';
import { useEffect } from 'react';
import CustomPara from '../../../components/Website/Paragraph/CustomPara.js';
import { useState } from 'react';
import { POST, SetAccessToken } from '../../../utilities/ApiProvider.js';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, updateUser } from '../../../reducers/useReducers.js';

export default function Index() {
  const user = useSelector(state => state.value);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);

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
    username: '',
    password: '',
  });

  const submitForm = async () => {
    try {
      setisLoading(true);
      const formData = new FormData();

      if (Fields.username === '' && Fields.password === '') {
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

      formData.append('action', 'CONTACT');

      formData.append('username', Fields.username);
      formData.append('password', Fields.password);

      var response = await POST('/users/login', formData);

      console.log(response);

      if (response.status === 'success') {
        if (remember) {
          localStorage.setItem('userCreds', JSON.stringify(Fields));
        }
      }

      dispatch(loadUser(response.data));
      localStorage.setItem('user', JSON.stringify(response.data));

      toast({
        description: response.message,
        status: response.status,
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });

      setFields({
        username: '',
        password: '',
      });

      setisLoading(false);
    } catch (err) {
      console.log(err);
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

  const socialink = {
    bg: '#fff',
    w: '50px',
    h: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
  };
  const socialicn = {
    fontSize: '20px',
    color: 'dashbg.100',
  };

  useEffect(() => {
    let creds = localStorage.getItem('userCreds');
    console.log(creds);
    if (creds) {
      setFields(JSON.parse(creds));
    } else {
      setFields({
        username: '',
        password: '',
      });
    }

    
  }, [user]);

  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundImage={Signupimg}
        py={'48'}
        h={'100vh'}
      >
        <Container maxW={'6xl'}>
          <Stack mb={'12'}>
            <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
            <CustomHeading color={'#fff'}>Forgot Password</CustomHeading>
            <CustomPara textAlign={'center'}>Enter your new Password</CustomPara>
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
              placeholder={'username'}
              type="email"
              _placeholder={{ color: '#fff' }}
              value={Fields?.username}
              onChange={e => {
                setFields({
                  ...Fields,
                  username: e.target.value,
                });
              }}
              // setFields={username => setFields({ ...Fields, username })}
            />
            <Input
              sx={signupstyle}
              placeholder={'Password'}
              type="password"
              _placeholder={{ color: '#fff' }}
              value={Fields?.password}
              onChange={e => {
                setFields({
                  ...Fields,
                  password: e.target.value,
                });
              }}
            />
          </Stack>
          <Stack mb={'12'}>
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
              Continue
            </Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
