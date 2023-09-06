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
  Img,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  selector,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import Event1 from '../../../assets/images/event/e1.jpg';
import MainDashboard from '../MainDashboard';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { imgUrl } from '../../../utilities/Config';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillCar } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { FiPhoneCall } from 'react-icons/fi';
import { Icon } from '@chakra-ui/icons';
import { GET, POST } from '../../../utilities/ApiProvider';
import Ownerprofile from '../../../assets/images/01.png';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import cat1 from '../../../assets/images/menu/c1.jpg';
import menu1 from '../../../assets/images/menu/menu1.jpg';
import { Link as ReactLink } from 'react-router-dom';

export default function Index() {
  const [posts, setPost] = useState([]);
  const [Hashtags, setHashtags] = useState([]);
  const [hashtagData, sethashtagData] = useState([]);
  const [datas, setDatas] = useState({});
  const [user, setUser] = useState({});
  const toast = useToast();
  const selcetor = useSelector(state => state);
  const [isLoading, setisLoading] = useState(false);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const params = useParams();

  const getEvents = async () => {
    const res = await GET(`admin/bar/details/${params.id}`, {
      authorization: `bearer ${user?.verificationToken}`,
    });
    setDatas(res?.data);
  };

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
      toast({
        description: 'Something went wrong!',
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });
    }
  };

  useEffect(() => {
    if (selector) {
      setUser(selcetor?.value);
    }
  }, [selector]);

  useEffect(() => {
    getHastags();
    getPosts();
    if (user) {
      getEvents();
    }
  }, [user]);

  const signupstyle = {
    outline: '1px solid #fff',
    py: '25px',
    bg: '#271623b5',
    color: '#fff',
  };

  console.log(datas);

  return (
    <>
      <MainDashboard>
        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          p={'0px 15px'}
        >
          <Box>
            <Stack
              direction={'row'}
              flexWrap={'wrap'}
              gap={'4'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box>
                <Img src={Ownerprofile} w={'80px'} h={'80px'} />
              </Box>
              <Box>
                <CustomHeading
                  textAlign={'left'}
                  color={'#fff'}
                  mb={'0'}
                  fontSize={'18px'}
                >
                  Tito's Handmade Vodka
                </CustomHeading>
                <CustomPara color={'brand.800'} fontSize={'14px'}>
                  Louisville, KY
                </CustomPara>

                <Stack direction={'row'} alignItems={'center'}>
                  <Box>
                    <BorderButton
                      w={'full'}
                      Url={'/dashboard/analytics'}
                      Btnctn={'View Analytics'}
                    />
                  </Box>
                  <Box>
                    <Menu>
                      <MenuButton>
                        <Icon
                          color={'#fff'}
                          fontSize={'25px'}
                          as={BiDotsVerticalRounded}
                        />
                      </MenuButton>
                      <MenuList>
                        <MenuItem>
                          <Link
                            as={ReactLink}
                            to={'/dashboard/accountinfo'}
                            color={'#fff'}
                          >
                            Account Info
                          </Link>
                        </MenuItem>
                        <MenuItem>Delete Account</MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack
              direction={'row'}
              flexWrap={'wrap'}
              gap={'4'}
              justifyContent={'space-between'}
              alignItems={'center'}
              textAlign={'left'}
            >
              <Box
                bg={'#272727'}
                p={'28px 40px'}
                borderRadius={'11px'}
                textAlign={'left'}
                w={'250px'}
              >
                <CustomHeading
                  fontSize={'18px'}
                  color={'#fff'}
                  textAlign={'left'}
                  mb={'20px'}
                >
                  Total Revenue
                </CustomHeading>
                <CustomPara
                  marginBottom={'0'}
                  textAlign={'center'}
                  fontSize={'40px'}
                >
                  $10,214
                </CustomPara>
              </Box>
              <Box
                bg={'#272727'}
                p={'28px 40px'}
                borderRadius={'11px'}
                textAlign={'left'}
                w={'250px'}
              >
                <CustomHeading
                  fontSize={'18px'}
                  color={'#fff'}
                  textAlign={'left'}
                  mb={'20px'}
                >
                  Total Revenue
                </CustomHeading>
                <CustomPara
                  marginBottom={'0'}
                  textAlign={'center'}
                  fontSize={'40px'}
                >
                  $10,214
                </CustomPara>
              </Box>
              <Box
                bg={'#272727'}
                p={'28px 40px'}
                borderRadius={'11px'}
                textAlign={'left'}
                w={'250px'}
              >
                <CustomHeading
                  fontSize={'18px'}
                  color={'#fff'}
                  textAlign={'left'}
                  mb={'20px'}
                >
                  Total Revenue
                </CustomHeading>
                <CustomPara
                  marginBottom={'0'}
                  textAlign={'center'}
                  fontSize={'40px'}
                >
                  $10,214
                </CustomPara>
              </Box>
              <Box
                bg={'#272727'}
                p={'28px 40px'}
                borderRadius={'11px'}
                textAlign={'left'}
                w={'250px'}
              >
                <CustomHeading
                  fontSize={'18px'}
                  color={'#fff'}
                  textAlign={'left'}
                  mb={'20px'}
                >
                  Total Revenue
                </CustomHeading>
                <CustomPara
                  marginBottom={'0'}
                  textAlign={'center'}
                  fontSize={'40px'}
                >
                  $10,214
                </CustomPara>
              </Box>
            </Stack>
          </Box>
        </Stack>

        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          mt={'25px'}
          alignItems={'center'}
          p={'0px 15px'}
        >
          <Box>
            <Stack
              direction={'row'}
              flexWrap={'wrap'}
              gap={'4'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box>
                <CustomHeading
                  textAlign={'left'}
                  color={'#fff'}
                  mb={'0'}
                  fontSize={'18px'}
                >
                  Social Icons
                </CustomHeading>
              </Box>
              <Box>
                <Link as={ReactLink} to={'./'}>
                  <Icon
                    color={'#fff'}
                    fontSize={'20px'}
                    mr={'20px'}
                    as={FaFacebook}
                  />
                </Link>
                <Link as={ReactLink} to={'./'}>
                  <Icon
                    color={'#fff'}
                    fontSize={'20px'}
                    mr={'20px'}
                    as={FiInstagram}
                  />
                </Link>
                <Link as={ReactLink} to={'./'}>
                  <Icon
                    color={'#fff'}
                    fontSize={'20px'}
                    as={AiOutlineTwitter}
                  />
                </Link>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack
              direction={'row'}
              flexWrap={'wrap'}
              gap={'4'}
              justifyContent={'space-between'}
              alignItems={'center'}
              textAlign={'left'}
            >
              <Box
                bg={'#272727'}
                p={'22px 40px'}
                borderRadius={'11px'}
                textAlign={'left'}
                w={'250px'}
              >
                <CustomHeading
                  fontSize={'18px'}
                  color={'#fff'}
                  textAlign={'left'}
                  mb={'20px'}
                >
                  <Icon as={AiOutlineHeart} /> 210 Favorites
                </CustomHeading>
                <BorderButton w={'full'} Url={'./'} Btnctn={'View'} />
              </Box>
              <Box
                bg={'#272727'}
                p={'22px 40px'}
                borderRadius={'11px'}
                textAlign={'left'}
                w={'250px'}
              >
                <CustomHeading
                  fontSize={'18px'}
                  color={'#fff'}
                  textAlign={'left'}
                  mb={'20px'}
                >
                  <Icon as={AiFillCar} /> 17 Min
                </CustomHeading>
                <BorderButton w={'full'} Url={'./'} Btnctn={'View Location'} />
              </Box>
              <Box
                bg={'#272727'}
                p={'22px 40px'}
                borderRadius={'11px'}
                textAlign={'left'}
                w={'250px'}
              >
                <CustomHeading
                  fontSize={'18px'}
                  color={'#fff'}
                  textAlign={'left'}
                  mb={'20px'}
                >
                  <Icon as={CgWebsite} /> Website
                </CustomHeading>
                <BorderButton w={'full'} Url={'./'} Btnctn={'View Website'} />
              </Box>
              <Box
                bg={'#272727'}
                p={'22px 40px'}
                borderRadius={'11px'}
                textAlign={'left'}
                w={'250px'}
              >
                <CustomHeading
                  fontSize={'18px'}
                  color={'#fff'}
                  textAlign={'left'}
                  mb={'20px'}
                >
                  <Icon as={FiPhoneCall} /> Call
                </CustomHeading>
                <BorderButton w={'full'} Url={'./'} Btnctn={'Call To'} />
              </Box>
            </Stack>
          </Box>
        </Stack>

        <Stack mt={'30px'} p={'0px 15px'}>
          <Tabs>
            <TabList border={'none'}>
              <Tab
                bg={'transparent'}
                textAlign={'center'}
                border={'1px solid #fff'}
                borderRadius={'6px'}
                color={'#fff'}
                _hover={{
                  color: 'primaryText.200',
                }}
                mr={'10px'}
              >
                Events
              </Tab>
              <Tab
                bg={'transparent'}
                textAlign={'center'}
                border={'1px solid #fff'}
                borderRadius={'6px'}
                color={'#fff'}
                _hover={{
                  color: 'primaryText.200',
                }}
                mr={'10px'}
              >
                Menu
              </Tab>
              <Tab
                bg={'transparent'}
                textAlign={'center'}
                border={'1px solid #fff'}
                borderRadius={'6px'}
                color={'#fff'}
                _hover={{
                  color: 'primaryText.200',
                }}
                mr={'10px'}
              >
                House Of Operations
              </Tab>
              <Tab
                bg={'transparent'}
                textAlign={'center'}
                border={'1px solid #fff'}
                borderRadius={'6px'}
                color={'#fff'}
                _hover={{
                  color: 'primaryText.200',
                }}
              >
                Team Members
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box mt={'25px'}>
                  <CustomHeading
                    fontSize={'30px'}
                    color={'#fff'}
                    textAlign={'left'}
                  >
                    Upcoming Events
                  </CustomHeading>
                </Box>
                <Stack flexWrap={'wrap'} direction={'row'} gap={'4'}>
                  {datas?.events && datas?.events?.length > 0 ? (
                    datas?.events?.map(item => {
                      return (
                        <Box
                          backgroundImage={imgUrl+item?.picture}
                          key={item?._id}
                          w={'346px'}
                          py={'4'}
                        >
                        
                          <Stack px={'4'} mb={'24'}>
                            <CustomHeading
                              color={'#fff'}
                              fontSize={'25px'}
                              textAlign={'left'}
                              mb={'0'}
                            >
                              {item?.name}
                            </CustomHeading>
                          </Stack>
                          <Stack px={'4'} mb={'24'}>
                            <CustomHeading
                              color={'#fff'}
                              fontSize={'25px'}
                              textAlign={'left'}
                              mb={'0'}
                            >
                              {item?.description}
                            </CustomHeading>
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
                      );
                    })
                  ) : (
                    <Text fontSize={'17px'} color={'white'}>
                      No Data Found
                    </Text>
                  )}
                </Stack>
              </TabPanel>

              {/* Second Tab */}

              <TabPanel>
                <Stack mt={'25px'}>
                  <Stack mt={'25px'}>
                    <Box mt={'25px'}>
                      <CustomHeading
                        fontSize={'30px'}
                        color={'#fff'}
                        textAlign={'left'}
                      >
                        House Favorites Drinks
                      </CustomHeading>
                    </Box>
                    <Stack direction={'row'} gap={'4'}>
                      {datas?.houseOfFav && datas?.houseOfFav.length > 0 ? (
                        datas?.houseOfFav?.map(item => {
                          return (
                            <Box key={item?._id} w={'339px'}>
                              <Img src={imgUrl + item?.pictures[0]} />
                              <Stack p={'3'} bg={'dashbg.100'}>
                                <CustomHeading
                                  textAlign={'left'}
                                  color={'#fff'}
                                  mb={'0'}
                                  fontSize={'21px'}
                                >
                                  {item?.name}
                                </CustomHeading>
                                <CustomHeading
                                  textAlign={'left'}
                                  color={'#fff'}
                                  mb={'0'}
                                  fontSize={'21px'}
                                >
                                  {item?.description}
                                </CustomHeading>

                                <Box>
                                  <BorderButton
                                    w={'full'}
                                    Url={'./'}
                                    Btnctn={`${item?.min}$- ${item.max}$`}
                                  />
                                </Box>
                              </Stack>
                            </Box>
                          );
                        })
                      ) : (
                        <Text fontSize={'18px'} color={'white'}>
                          No Data Found
                        </Text>
                      )}
                    </Stack>
                  </Stack>
                </Stack>
              </TabPanel>

              {/* Third Tab */}

              <TabPanel>
                <Stack mt={'25px'}>
                  <Box mt={'25px'}>
                    <CustomHeading
                      fontSize={'30px'}
                      color={'#fff'}
                      textAlign={'left'}
                    >
                      House Of Operations
                    </CustomHeading>
                  </Box>
                  <Stack
                    direction={'row'}
                    flexWrap={'wrap'}
                    gap={'20px'}
                    justifyContent={'space-between'}
                    spacing={'0'}
                  >
                    {datas?.barHours && datas?.barHours.length > 0 ? (
                      datas.barHours.map(item => {
                        return (
                          <Box w={'49%'}>
                            <Stack
                              direction={'row'}
                              flexWrap={'wrap'}
                              justifyContent={'space-between'}
                              bg={'#272727'}
                              p={'14px 19px'}
                              borderRadius={'10px'}
                            >
                              <Box>
                                <CustomHeading
                                  fontSize={'18px'}
                                  color={'#fff'}
                                  textAlign={'left'}
                                  mb={'0'}
                                >
                                  {item?.day}
                                </CustomHeading>
                              </Box>
                              <Stack
                                direction={'row'}
                                flexWrap={'wrap'}
                                justifyContent={'space-between'}
                              >
                                <Box borderRight={'solid 1px #fff'} pr={'10px'}>
                                  <CustomHeading
                                    fontSize={'18px'}
                                    color={'#fff'}
                                    mb={'0'}
                                    textAlign={'left'}
                                  >
                                    {item?.startTime ?? 'null'}
                                  </CustomHeading>
                                </Box>
                                <Box>
                                  <CustomHeading
                                    fontSize={'18px'}
                                    color={'#fff'}
                                    mb={'0'}
                                    textAlign={'left'}
                                  >
                                    {item?.endTime}
                                  </CustomHeading>
                                </Box>
                              </Stack>
                            </Stack>
                          </Box>
                        );
                      })
                    ) : (
                      <Text fontSize={'18px'} color={'white'}>
                        No Data Found
                      </Text>
                    )}
                  </Stack>
                </Stack>
              </TabPanel>

              {/* Fourth Tab */}

              <TabPanel>
                {datas?.team && datas?.team?.length > 0 ? (
                  datas?.team?.map(item => {
                    return (
                      <Stack
                        key={item?._id}
                        direction={'row'}
                        flexWrap={'wrap'}
                        justifyContent={'space-between'}
                        borderBottom={'solid 1px #3b3b3b'}
                        p={'30px 0px'}
                      >
                        <Box>
                          <Stack
                            direction={'row'}
                            flexWrap={'wrap'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                          >
                            <Box>
                              <Img src={imgUrl+item?.profile_picture} w={'80px'} h={'80px'} />
                            </Box>
                            <Box>
                              <CustomPara color={'brand.800'} fontSize={'14px'}>
                                Name
                              </CustomPara>
                              <CustomHeading
                                textAlign={'left'}
                                color={'#fff'}
                                mb={'0'}
                                fontSize={'18px'}
                              >
                               {item?.firstname}
                              </CustomHeading>
                            </Box>
                          </Stack>
                        </Box>
                        <Box
                          bg={'#202020'}
                          p={'23px 34px'}
                          borderRadius={'11px'}
                          textAlign={'left'}
                        >
                          <CustomHeading
                            fontSize={'18px'}
                            color={'#676767'}
                            textAlign={'left'}
                            mb={'10px'}
                          >
                            Total Tip
                          </CustomHeading>
                          <CustomPara
                            marginBottom={'0'}
                            textAlign={'center'}
                            fontSize={'28px'}
                          >
                            $15.00
                          </CustomPara>
                        </Box>
                        <Box
                          bg={'#202020'}
                          p={'23px 34px'}
                          borderRadius={'11px'}
                          textAlign={'left'}
                        >
                          <CustomHeading
                            fontSize={'18px'}
                            color={'#676767'}
                            textAlign={'left'}
                            mb={'10px'}
                          >
                            Total Tip
                          </CustomHeading>
                          <CustomPara
                            marginBottom={'0'}
                            textAlign={'center'}
                            fontSize={'28px'}
                          >
                            $15.00
                          </CustomPara>
                        </Box>
                        <Box
                          bg={'#202020'}
                          p={'23px 34px'}
                          borderRadius={'11px'}
                          textAlign={'left'}
                        >
                          <CustomHeading
                            fontSize={'18px'}
                            color={'#676767'}
                            textAlign={'left'}
                            mb={'10px'}
                          >
                            Total Tip
                          </CustomHeading>
                          <CustomPara
                            marginBottom={'0'}
                            textAlign={'center'}
                            fontSize={'28px'}
                          >
                            $15.00
                          </CustomPara>
                        </Box>
                      </Stack>
                    );
                  })
                ) : (
                  <Text fontSize={'17px'} color={'white'}>
                    No Data Found
                  </Text>
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </MainDashboard>
    </>
  );
}
