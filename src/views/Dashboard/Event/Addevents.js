import { Box, Button,Text, Checkbox, Container, FormControl, FormLabel, Img, Input, Select, Stack, Switch, Textarea, useToast } from '@chakra-ui/react';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import React from 'react';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { Icon } from '@chakra-ui/icons';
import { GET, POST } from '../../../utilities/ApiProvider';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export default function Addevents() {


    const [posts, setPost] = useState([]);
    const [Hashtags, setHashtags] = useState([]);
    const [hashtagData, sethashtagData] = useState([]);
    const toast = useToast();
    const [isLoading, setisLoading] = useState(false);

    const location = useLocation();

    useEffect(() => {
      HeadFootEnabler(location);
    }, [location]);



    useEffect(() => {
        getHastags();
        getPosts();
      }, []);
    
      const getPosts = async () => {
        var response = await GET('/post');
        setPost(response.data);
      };
      const getHastags = async () => {
        var response = await GET('/admin/hashtag');
        setHashtags(response.data);
      };
    
      const [Fields, setFields] = useState({
        upload_document: {},
      });
      let hastagArray = [];
      const submitForm = async () => {
        try {
          const formData = new FormData();
    
          if (Fields.title === '' && Fields.description === '') {
            toast({
              status: 'error',
              title: 'Please fill in all the fields to proceed further.',
              duration: 7000,
              isClosable: true,
              position: 'bottom-left',
            });
            return;
          }
    
          formData.append('title', Fields.heading);
          formData.append('description', Fields.description);
          formData.append('hastags', hashtagData);
    
          var response = await POST('/post', formData);
    
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
    
      const signupstyle = {
        outline: '1px solid #fff',
        py: '25px',
        bg: '#271623b5',
        color: '#fff',
      };
    


  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundImage={Signupimg}
        py={'32'}
      >
        <Container maxW={'6xl'}>
          <Stack>
          <Stack>
              <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
              <CustomHeading color={'#fff'}>Add Your Events</CustomHeading>
              <CustomPara  textAlign={'center'}>Enter your details</CustomPara>
            </Stack>
            <Stack gap={'4'}>
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
                <Input
                  sx={signupstyle}
                  placeholder={'Title'}
                  type="Name"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.title}
                />
                <Textarea
                  sx={signupstyle}
                  placeholder={'Description'}
                  type="Name"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.description}
                  onChange={e => {
                    setFields({
                      ...Fields,
                      discrpition: e.target.value,
                    });
                  }}
                ></Textarea>
                <Stack
                  gap={'6'}
                  direction={'row'}
                  justifyContent={'space-between'}
                >
                  <Box w={'full'} position={'relative'}>
                    <FormLabel
                      fontWeight={'600'}
                      color={'#fff'}
                      zIndex={'1'}
                      fontSize={'13px'}
                    >
                      Date
                    </FormLabel>
                    <Input
                    sx={signupstyle}
                      type={'date'}
                      bg={'#212121'}
                      pt={'7'}
                      pb={'6'}
                      w={'full'}
                      color={'#fff'}
                      outline={'1px solid #fff'}
                    />
                  </Box>
                  <Box w={'full'} position={'relative'}>
                    <FormLabel
                      fontWeight={'600'}
                      color={'#fff'}
                      zIndex={'1'}
                      fontSize={'13px'}
                    >
                      Time
                    </FormLabel>
                    <Input
                    sx={signupstyle}
                      type={'time'}
                      bg={'#212121'}
                      pt={'7'}
                      pb={'6'}
                      w={'full'}
                      color={'#fff'}
                      outline={'1px solid #fff'}
                    />
                  </Box>
                </Stack>
                <Stack
                  gap={'6'}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Box w={'full'} position={'relative'}>
                    <Input
                    sx={signupstyle}
                      type={'text'}
                      bg={'#212121'}
                      pt={'7'}
                      pb={'6'}
                      w={'full'}
                      color={'#fff'}
                      outline={'1px solid #fff'}
                      placeholder={'Price'}
                    />
                  </Box>
                  <Box w={'full'} position={'relative'}>
                    <Select
                       
                   
                      size="lg"
                      color={'#fff'}
                      outline={'1px solid #fff'}
                      placeholder="Select option"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Box>
                </Stack>

                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  gap={'4'}
                >
                  <CustomHeading
                    fontSize={'22px'}
                    color={'#fff'}
                    textAlign={'left'}
                  >
                    Hashtags
                  </CustomHeading>
                  <FormControl w={'40%'} position={'relative'}>
                    <Input
                      color={'#fff'}
                      border={'1px solid #fff !important'}
                      _placeholder={{ color: '#fff' }}
                      placeholder="Search"
                    />
                    <Button
                      onClick={() => submitForm()}
                      bg={'transparent'}
                      right={'0'}
                      position={'absolute'}
                    >
                      <Icon
                        color={'white'}
                        fontSize={'20px'}
                        as={AiOutlineSearch}
                      />
                    </Button>
                  </FormControl>
                </Box>
                <Stack
                  direction={'row'}
                  gap={'3'}
                  spacing={'0'}
                  flexWrap={'wrap'}
                  color={'#fff'}
                >
                  {Hashtags.map(e => {
                    return (
                      <Checkbox
                        border={'1px solid #fff'}
                        position={'relative'}
                        px={'4'}
                        py={'1'}
                        borderRadius={'6'}
                        className="chckbox"
                        value={e._id}
                        onChange={e => {
                          hashtagData.push(e.target.value);
                          sethashtagData(hashtagData);
                        }}
                      >
                        <Stack direction={'row'}>
                          <Icon
                            color={'white'}
                            fontSize={'20px'}
                            as={AiOutlinePlusCircle}
                          />
                          <Text>{e.name}</Text>
                        </Stack>
                      </Checkbox>
                    );
                  })}
                </Stack>
                <Stack
                  borderTop={'1px solid #fff'}
                  pt={'5'}
                  pb={'6'}
                  gap={'6'}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Box w={'full'} position={'relative'}>
                    <FormControl display="flex" alignItems="center">
                      <Switch id="email-alerts" colorScheme="pink" />
                      <FormLabel
                        ml={'2'}
                        color={'#fff'}
                        htmlFor="email-alerts"
                        mb="0"
                      >
                        List Event Automatically Every Week
                      </FormLabel>
                    </FormControl>
                  </Box>
                  <Box w={'full'} position={'relative'}>
                    <Select
                      size="md"
                      color={'#fff'}
                      outline={'1px solid #fff'}
                      placeholder="Select option"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Box>
                </Stack>
              </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
