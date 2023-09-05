import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Stack,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import Contactimg from '../../../assets/images/Banner/contact.png';
import CustomHeading from '../Headings/CustomHeading';
import { useState } from 'react';
import CustomPara from '../Paragraph/CustomPara';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { Icon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import ContactFields from './ContactFields';
import { POST } from '../../../utilities/ApiProvider';

export default function Contact() {
  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
  const [Fields, setFields] = useState({
    name: '',
    city: '',
    email: '',
    phone: '',
    message: '',
  });

  const submitForm = async () => {
    try {
      setisLoading(true);
      const formData = new FormData();

      if (
        Fields.name === '' &&
        Fields.city === '' &&
        Fields.email === '' &&
        Fields.phone === '' &&
        Fields.message === ''
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

      formData.append('action', 'CONTACT');
      formData.append('name', Fields.name);
      formData.append('city', Fields.city);
      formData.append('email', Fields.email);
      formData.append('phone', Fields.phone);
      formData.append('message', Fields.message);

      let response = await POST('/mailtest/emailer.php', formData, {
        'Content-Type': 'application/x-www-form-urlencoded',
      });

      toast({
        description: response.message,
        status: response.status,
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });

      setFields({
        name: '',
        city: '',
        email: '',
        phone: '',
        message: '',
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

  return (
    <>
      <Stack bgImg={Contactimg} py={36} 
      bgSize={'cover'}
      bgRepeat={'no-repeat'}
      bgAttachment={{ base: 'inherit', md: 'fixed' }}
      mt={'0 !important'} >
        <Container maxW={'6xl'} p={{ base: '15px !important', '2xl': 0 }}>
          <Box mb={'12'}>
            <CustomHeading textAlign={'left'} color={'#fff'}>
              Contact Us
            </CustomHeading>
            <CustomPara>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              <br />
              nisi ut aliquip ex ea commodo consequat.
            </CustomPara>
          </Box>
          <Stack direction={'row'} gap={'12'}>
            <Box w={'30%'}>
              <CustomHeading
                textAlign={'left'}
                color={'#fff'}
                fontSize={'30px'}
                mb={'7'}
              >
                Contact info:
              </CustomHeading>
              <Stack gap={'4'}>
                <Flex alignItems={'center'} gap={'6'}>
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    bg={'#dc0b9b'}
                    w={'60px'}
                    h={'60px'}
                    borderRadius={'6px'}
                  >
                    <Icon color={'white'} fontSize={'30px'} as={FiPhoneCall} />
                  </Box>
                  <Box>
                    <CustomHeading
                      fontSize={'20px'}
                      textAlign={'left'}
                      mb={'5px'}
                    >
                      Call Us:
                    </CustomHeading>
                    <Link color={'#fff'}>(734) 697-2907</Link>
                  </Box>
                </Flex>
                <Flex alignItems={'center'} gap={'6'}>
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    bg={'#dc0b9b'}
                    w={'60px'}
                    h={'60px'}
                    borderRadius={'6px'}
                  >
                    <Icon color={'white'} fontSize={'30px'} as={FiMail} />
                  </Box>
                  <Box>
                    <CustomHeading
                      fontSize={'20px'}
                      textAlign={'left'}
                      mb={'5px'}
                    >
                      Email Us:
                    </CustomHeading>
                    <Link color={'#fff'}>yourname@123.com</Link>
                  </Box>
                </Flex>
              </Stack>
            </Box>
            <Box w={'70%'} px={'8'} py={20} borderRadius={12} bg={'#dc0b9b'}>
              <CustomHeading
                color={'#fff'}
                fontSize={'30px'}
                textAlign={'left'}
                mb={'20px'}
              >
                Get In Touch With Us:
              </CustomHeading>
              <Box
                display={'flex'}
                flexWrap={'wrap'}
                gap={5}
                justifyContent={'space-between'}
              >
                <ContactFields
                  type={'text'}
                  placeholder={'Name'}
                  name={'name'}
                  value={Fields.name}
                  setFields={name => setFields({ ...Fields, name })}
                />
                <ContactFields
                  type={'text'}
                  placeholder={'City'}
                  name={'city'}
                  value={Fields.city}
                  setFields={city => setFields({ ...Fields, city })}
                />
                <ContactFields
                  type={'text'}
                  placeholder={'email'}
                  name={'email'}
                  value={Fields.email}
                  setFields={email => setFields({ ...Fields, email })}
                />
                <ContactFields
                  type={'text'}
                  placeholder={'phone'}
                  name={'phone'}
                  value={Fields.phone}
                  setFields={phone => setFields({ ...Fields, phone })}
                />
                <Textarea
                  py={'4'}
                  height={'100px'}
                  placeholder={'Message'}
                  name={'message'}
                  value={Fields.message}
                  onChange={e =>
                    setFields({ ...Fields, message: e.target.value })
                  }
                  fontSize={'14px'}
                  border={'none'}
                  borderBottom={'2px solid #fff !important'}
                  fontWeight={500}
                  borderColor={'primaryBlue.100'}
                  resize={'none'}
                  borderRadius={'0'}
                  _focus={{
                    borderColor: 'primaryOrange.100',
                    outline: 'none',
                  }}
                  _placeholder={{ color: '#fff' }}
                ></Textarea>
                <Button
                    onClick={() => submitForm()}
                    bgColor={'#fff'}
                    color={'#dc0b9b'}
                    borderRadius={6}
                    fontWeight={'900'}
                    px={'80px'}
                    py={6}
                    fontSize={'18px'}
                    border={'2px solid #fff'}
                    borderColor={'primaryOrange.100'}
                    _hover={{
                      bgColor: 'transparent',
                      color: '#fff',
                    }}
                    isLoading={isLoading}
                  >
                    Submit
                  </Button>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
