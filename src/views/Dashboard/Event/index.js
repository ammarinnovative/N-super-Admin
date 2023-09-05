import {
  Box,
  Stack,
  Modal,
  Button,
  ModalContent,
  ModalHeader,
  Text,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Input,
  Textarea,
  FormControl,
  Checkbox,
  useToast,
  FormLabel,
  Select,
  Switch,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import Event1 from '../../../assets/images/event/e1.jpg';
import MainDashboard from '../MainDashboard';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { GET, POST } from '../../../utilities/ApiProvider';

export default function Index() {
  
  const [posts, setPost] = useState([]);
  const [Hashtags, setHashtags] = useState([]);
  const [hashtagData, sethashtagData] = useState([]);
  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

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
      <MainDashboard>
        <Modal size={'3xl'} isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent bg={'dashbg.100'}>
            <ModalHeader>
              <CustomPara marginBottom={'0'} fontSize={'20px'}>
                Add Events
              </CustomPara>
            </ModalHeader>
            <ModalCloseButton color={'#fff'} />
            <ModalBody>
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
                  {Hashtags?.length &&
                  Hashtags?.map(e => {
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
            </ModalBody>
            <ModalFooter>
              <Stack direction={'row'} w={'full'} justifyContent={'center'}>
                <Button bg={'pHeading.100'} color={'#fff'} px={'14'}>
                  Post
                </Button>
                <Button onClick={onClose}>Discard</Button>
              </Stack>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Stack p={'4'} gap={'8'}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={'4'}>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Live Events
              </CustomHeading>
            </Box>
            <Box>
              <Button
                bg={'transparent'}
                textAlign={'center'}
                margin={'auto'}
                py={'10px'}
                px={'8'}
                lineHeight={'inherit'}
                border={'1px solid #fff'}
                borderRadius={'6px'}
                color={'#fff'}
                _hover={{
                  color: 'primaryText.200',
                }}
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
              >
                Add New Events
              </Button>
            </Box>
          </Stack>
          <Stack flexWrap={'wrap'} direction={'row'} gap={'4'}>
            <Box backgroundImage={Event1} w={'346px'} py={'4'}>
              <Box bg={'pHeading.100'} w={'100px'} py={'1'} mb={'6'}>
                <CustomPara marginBottom={'0'} textAlign={'center'}>
                  Today
                </CustomPara>
              </Box>
              <Stack px={'4'} mb={'24'}>
                <CustomHeading
                  color={'#fff'}
                  fontSize={'25px'}
                  textAlign={'left'}
                  mb={'0'}
                >
                  Monday Night
                </CustomHeading>
                <CustomPara fontSize={'14px'}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </CustomPara>
              </Stack>
              <Stack
                px={'4'}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box>
                  <CustomHeading
                    mb={'0'}
                    color={'#fff'}
                    fontSize={'20px'}
                    textAlign={'left'}
                  >
                    Sold Out
                  </CustomHeading>
                </Box>
                <Box bg={'#ff4764'} px={'2'}>
                  <CustomPara marginBottom={'0'}>LIVE</CustomPara>
                </Box>
              </Stack>
            </Box>
            <Box backgroundImage={Event1} w={'346px'} py={'4'}>
              <Box bg={'pHeading.100'} w={'100px'} py={'1'} mb={'6'}>
                <CustomPara marginBottom={'0'} textAlign={'center'}>
                  Today
                </CustomPara>
              </Box>
              <Stack px={'4'} mb={'24'}>
                <CustomHeading
                  color={'#fff'}
                  fontSize={'25px'}
                  textAlign={'left'}
                  mb={'0'}
                >
                  Monday Night
                </CustomHeading>
                <CustomPara fontSize={'14px'}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </CustomPara>
              </Stack>
              <Stack
                px={'4'}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box>
                  <CustomHeading
                    mb={'0'}
                    color={'#fff'}
                    fontSize={'20px'}
                    textAlign={'left'}
                  >
                    Sold Out
                  </CustomHeading>
                </Box>
                <Box bg={'#ff4764'} px={'2'}>
                  <CustomPara marginBottom={'0'}>LIVE</CustomPara>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Stack>
            <Box>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Today's Events
              </CustomHeading>
            </Box>
            <Stack  flexWrap={'wrap'} direction={'row'} gap={'4'}>
              <Box backgroundImage={Event1} w={'346px'} py={'4'}>
                <Box bg={'pHeading.100'} w={'100px'} py={'1'} mb={'6'}>
                  <CustomPara marginBottom={'0'} textAlign={'center'}>
                    Today
                  </CustomPara>
                </Box>
                <Stack px={'4'} mb={'24'}>
                  <CustomHeading
                    color={'#fff'}
                    fontSize={'25px'}
                    textAlign={'left'}
                    mb={'0'}
                  >
                    Monday Night
                  </CustomHeading>
                  <CustomPara fontSize={'14px'}>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </CustomPara>
                </Stack>
                <Stack
                  px={'4'}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Box>
                    <CustomHeading
                      mb={'0'}
                      color={'#fff'}
                      fontSize={'20px'}
                      textAlign={'left'}
                    >
                      Sold Out
                    </CustomHeading>
                  </Box>
                </Stack>
              </Box>
              <Box backgroundImage={Event1} w={'346px'} py={'4'}>
                <Box bg={'pHeading.100'} w={'100px'} py={'1'} mb={'6'}>
                  <CustomPara marginBottom={'0'} textAlign={'center'}>
                    Today
                  </CustomPara>
                </Box>
                <Stack px={'4'} mb={'24'}>
                  <CustomHeading
                    color={'#fff'}
                    fontSize={'25px'}
                    textAlign={'left'}
                    mb={'0'}
                  >
                    Monday Night
                  </CustomHeading>
                  <CustomPara fontSize={'14px'}>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </CustomPara>
                </Stack>
                <Stack
                  px={'4'}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Box>
                    <CustomHeading
                      mb={'0'}
                      color={'#fff'}
                      fontSize={'20px'}
                      textAlign={'left'}
                    >
                      Sold Out
                    </CustomHeading>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
