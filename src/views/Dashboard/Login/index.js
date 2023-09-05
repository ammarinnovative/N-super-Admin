import {
  Button,
  Checkbox,
  Container,
  Img,
  Input,
  Link,
  ListItem,
  Stack,
  UnorderedList,
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
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';
import { POST, SetAccessToken } from '../../../utilities/ApiProvider.js';
import { Icon } from '@chakra-ui/icons';
import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';
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
    role:"superadmmin",
    fcm: '',
  });

  const submitForm = async () => {
    try {
      setisLoading(true);

      if (Fields.username === '' || Fields.password === '') {
        toast({
          status: 'error',
          description: 'Please fill in all the fields to proceed further.',
          duration: 7000,
          isClosable: true,
          position: 'bottom-left',
        });
        setisLoading(false);
        return;
      }

      var response = await POST('users/login', Fields);
      console.log('response', response.data);
      dispatch(loadUser(response.data));
      if (response.status === 'success') {
        if (remember) {
          localStorage.setItem('userCreds', JSON.stringify(Fields));
        }
      }

      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');

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
        role:"superadmmin",
        fcm: '',
      });
    }
  }, [user]);

  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundImage={Signupimg}
        py={'48'}
      >
        <Container maxW={'6xl'}>
          <Stack mb={'12'}>
            <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
            <CustomHeading color={'#fff'}>Welcome Back</CustomHeading>
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

            <Checkbox
              color={'#fff'}
              colorScheme="green"
              onChange={e => setRemember(e.target.checked)}
              defaultValue={remember}
            >
              Remember Password
            </Checkbox>
            <Link
              w={'48%'}
              color={'#fff'}
              as={ReactLink}
              to={'/dashboard/forgot'}
            >
              Forgot Password?
            </Link>
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
              Submit
            </Button>
          </Stack>
          <Stack>
            <CustomPara textAlign={'center'}>Or continue with</CustomPara>
            <UnorderedList
              justifyContent={'center'}
              listStyleType={'none'}
              display={'flex'}
              gap={'4'}
            >
              <ListItem>
                <Link sx={socialink} as={ReactLink} to={'/'}>
                  <Icon sx={socialicn} as={AiOutlineGoogle} />
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={socialink} as={ReactLink} to={'/'}>
                  <Icon sx={socialicn} as={AiFillFacebook} />
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={socialink} as={ReactLink} to={'/'}>
                  <Icon sx={socialicn} as={AiOutlineTwitter} />
                </Link>
              </ListItem>
            </UnorderedList>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
