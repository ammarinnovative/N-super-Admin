import {
  Box,
  Flex,
  FormControl,
  Img,
  FormLabel,
  Stack,
  useToast,
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
  Checkbox,
  Select,
  Switch,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  FormHelperText,
} from '@chakra-ui/react';
import React from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import Cat1 from '../../../assets/images/menu/c1.jpg';
import menu1 from '../../../assets/images/menu/menu1.jpg';
import MenuItems from '../../../assets/images/menu/m1.jpg';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { GET, POST } from '../../../utilities/ApiProvider';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';

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
                Add Promotion
              </CustomPara>
            </ModalHeader>
            <ModalCloseButton color={'#fff'} />
            <ModalBody>
              <Stack gap={'4'}>
                <Input
                  sx={signupstyle}
                  placeholder={'Title'}
                  type="Name"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.title}
                />

                <Stack
                  gap={'2'}
                  direction={'row'}
                  justifyContent={'space-between'}
                >
                  <Stack direction={'row'}>
                    <Box w={'full'} position={'relative'}>
                      <FormLabel
                        fontWeight={'600'}
                        color={'#fff'}
                        zIndex={'1'}
                        fontSize={'13px'}
                      >
                        From
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
                        To
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
                  </Stack>
                  <Stack direction={'row'} gap={'2'}>
                    <Box w={'full'} position={'relative'}>
                      <FormLabel
                        fontWeight={'600'}
                        color={'#fff'}
                        zIndex={'1'}
                        fontSize={'13px'}
                      >
                        From
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
                    <Box w={'full'} position={'relative'}>
                      <FormLabel
                        fontWeight={'600'}
                        color={'#fff'}
                        zIndex={'1'}
                        fontSize={'13px'}
                      >
                        To
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
                </Stack>
                <Stack
                  gap={'6'}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Box w={'full'} position={'relative'}>
                    <FormLabel
                      fontWeight={'600'}
                      color={'#fff'}
                      zIndex={'1'}
                      fontSize={'13px'}
                    >
                      $Price
                    </FormLabel>
                    <RangeSlider
                      aria-label={['min', 'max']}
                      colorScheme="pink"
                      defaultValue={[10, 30]}
                    >
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                      </RangeSliderTrack>
                      <RangeSliderThumb index={0} />
                      <RangeSliderThumb index={1} />
                    </RangeSlider>
                    <Box display={'flex'} justifyContent={'space-between'}>
                      <CustomPara fontSize={'12px'}>%10</CustomPara>
                      <CustomPara fontSize={'12px'}>%100</CustomPara>
                    </Box>
                  </Box>
                  <Box w={'full'} position={'relative'}>
                    <FormControl display="flex" alignItems="center">
                      <Switch colorScheme={'pink'} id="email-alerts" />{' '}
                      <FormLabel htmlFor="email-alerts" mb="0">
                        Repeat Promotion
                      </FormLabel>
                    </FormControl>
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
                    Choose Menu
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
                      p={'3px'}
                        border={'0px solid #fff'}
                        position={'relative'}
                        borderRadius={'6'}
                      spacing={'0'}
                        className="chckbox"
                        value={e._id}
                        onChange={e => {
                          hashtagData.push(e.target.value);
                          sethashtagData(hashtagData);
                        }}
                      >
                        <Stack borderRadius={'6'} justifyContent={'right'} alignItems={'end'}  w={'120px'}
                        height={'100px'} backgroundSize={'cover'} backgroundImage={Cat1} direction={'row'}>
                          <Text>{e.name}</Text>
                        </Stack>
                      </Checkbox>
                    );
                  })}
                </Stack>
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
                      p={'3px'}
                        border={'0px solid #fff'}
                        position={'relative'}
                        borderRadius={'6'}
                      spacing={'0'}
                        className="chckbox"
                        value={e._id}
                        onChange={e => {
                          hashtagData.push(e.target.value);
                          sethashtagData(hashtagData);
                        }}
                      >
                        <Stack borderRadius={'6'} justifyContent={'right'} alignItems={'end'}  w={'120px'}
                        height={'100px'} backgroundSize={'cover'} backgroundImage={MenuItems} direction={'row'}>
                          <Text>{e.name}</Text>
                        </Stack>
                      </Checkbox>
                    );
                  })}
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
        <Stack p={'4'} gap={'6'}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={'4'}>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Spirits
              </CustomHeading>
            </Box>
            <Box>
              <Flex alignItems={'center'} gap={'3'}>
                <Box>
                  <FormControl display="flex" alignItems="center">
                    <Switch colorScheme="pink" id="email-alerts" />
                    <FormLabel
                      color={'#fff'}
                      pl={'4'}
                      htmlFor="email-alerts"
                      mb="0"
                    >
                      Send Free Ticket After First Visit
                    </FormLabel>
                  </FormControl>
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
                    Create Promopost
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Stack>

          <Stack>
            <Stack flexWrap={'wrap'} direction={'row'} gap={'4'}>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Stack>

          <Stack>
            <Box>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Kentucky Bourbon
              </CustomHeading>
            </Box>
            <Stack flexWrap={'wrap'} direction={'row'} gap={'4'}>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
                  </Box>
                </Stack>
              </Box>
              <Box w={'242px'}>
                <Img src={menu1} />
                <Stack p={'3'} bg={'dashbg.100'}>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'16px'}
                  >
                    Tito's Handmade Vodka
                  </CustomHeading>

                  <Box>
                    <Flex mb={'3'} justifyContent={'space-between'}>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Date:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          11/8/2022
                        </CustomPara>
                      </Box>
                      <Box>
                        <CustomHeading
                          mb={'0'}
                          color={'#fff'}
                          fontSize={'15px'}
                          textAlign={'left'}
                        >
                          Timeframe:{' '}
                        </CustomHeading>
                        <CustomPara color={'pHeading.100'} fontSize={'13px'}>
                          {' '}
                          2:00 PM - 3hrs
                        </CustomPara>
                      </Box>
                    </Flex>

                    <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} />
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
