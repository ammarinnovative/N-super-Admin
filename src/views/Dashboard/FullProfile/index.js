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
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillCar } from 'react-icons/ai'; 
import { CgWebsite } from 'react-icons/cg'; 
import { FiPhoneCall } from 'react-icons/fi'; 
import { Icon } from '@chakra-ui/icons';
import { GET, POST } from '../../../utilities/ApiProvider';
import Ownerprofile from '../../../assets/images/01.png';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import cat1 from '../../../assets/images/menu/c1.jpg';
import menu1 from '../../../assets/images/menu/menu1.jpg';
import { Link as ReactLink } from 'react-router-dom';


export default function Index() {
  
  const [posts, setPost] = useState([]);
  const [Hashtags, setHashtags] = useState([]);
  const [hashtagData, sethashtagData] = useState([]);
  const [user,setUser] = useState({});
  const toast = useToast();
  const selcetor = useSelector(state=>state);
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

  const getEvents = async ()=>{
    const res = await GET(`admin/bar/details/${params.id}`,{
      authorization:`bearer ${user?.verificationToken}`
    });
  }


  useEffect(() => {
    // getHastags();
    // getPosts();
    
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


  useEffect(()=>{
    if(selector){
      setUser(selector?.value);
    }
  },[selector]);

  const signupstyle = {
    outline: '1px solid #fff',
    py: '25px',
    bg: '#271623b5',
    color: '#fff',
  };

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
                  <Img src={Ownerprofile} w={'80px'} h={'80px'}/>  
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

                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                    >
                      <Box>
                        <BorderButton w={'full'}  Url={'/dashboard/analytics'} Btnctn={'View Analytics'} />
                      </Box>
                      <Box>
                        <Menu>
                          <MenuButton>
                            <Icon color={'#fff'} fontSize={'25px'} as={BiDotsVerticalRounded}/>
                          </MenuButton>
                          <MenuList>
                            <MenuItem><Link as={ReactLink} to={'/dashboard/accountinfo'} color={'#fff'}>Account Info</Link></MenuItem>
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
                  <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'40px'}>
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
                  <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'40px'}>
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
                  <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'40px'}>
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
                  <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'40px'}>
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
                  <Link as={ReactLink} to={'./'}><Icon color={'#fff'} fontSize={'20px'} mr={'20px'} as={FaFacebook}/></Link>
                  <Link as={ReactLink} to={'./'}><Icon color={'#fff'} fontSize={'20px'} mr={'20px'} as={FiInstagram}/></Link>
                  <Link as={ReactLink} to={'./'}><Icon color={'#fff'} fontSize={'20px'} as={AiOutlineTwitter}/></Link>
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
                    <Icon as={AiOutlineHeart}/> 210 Favorites
                  </CustomHeading>
                  <BorderButton w={'full'}  Url={'./'} Btnctn={'View'} />
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
                    <Icon as={AiFillCar}/> 17 Min
                  </CustomHeading>
                  <BorderButton w={'full'}  Url={'./'} Btnctn={'View Location'} />
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
                   <Icon as={CgWebsite}/> Website
                  </CustomHeading>
                  <BorderButton w={'full'}  Url={'./'} Btnctn={'View Website'} />
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
                   <Icon as={FiPhoneCall}/> Call
                  </CustomHeading>
                  <BorderButton w={'full'}  Url={'./'} Btnctn={'Call To'} />
                </Box>
              </Stack>
            </Box>
        </Stack> 


        <Stack mt={'30px'}  p={'0px 15px'}>
        <Tabs>
          <TabList
            border={'none'}
          >
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
                <Box  mt={'25px'}>
                  <CustomHeading
                    fontSize={'30px'}
                    color={'#fff'}
                    textAlign={'left'}
                  >
                    Live Events
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
            </TabPanel>
            
            
            {/* Second Tab */}
            
            
            
            <TabPanel>
              <Stack mt={'25px'}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Box display={'flex'} alignItems={'center'} gap={'4'}>
                    <CustomHeading
                      fontSize={'30px'}
                      color={'#fff'}
                      textAlign={'left'}
                    >
                      All Menu
                    </CustomHeading>
                  </Box>
                </Stack>
                <Stack direction={'row'} gap={'4'}>
                   
                      <Box
                        position={'relative'}
                        pr={'4'}
                        display={'flex'}
                        justifyContent={'right'}
                        alignItems={'flex-end'}
                        borderRadius={'8px'}
                        h={'125px'}
                        w={'198px'}
                        zIndex={'1'}
                        backgroundImage={cat1}
                        _before={{
                          content: "''",
                          w: '100%',
                          h: '100%',
                          position: 'absolute',
                          bg: '#000',
                          right: '0',
                          left: '0',
                          zIndex: '-1',
                          borderRadius:'6px',
                          opacity:'0.6'
                        }}
                      >
                        <CustomHeading
                          fontSize={'25px'}
                          fontWeight={'700'}
                          color={'#fff'}
                        >
                          Spirits
                        </CustomHeading>
                      </Box>
                    
                  
                      <Box
                        position={'relative'}
                        pr={'4'}
                        display={'flex'}
                        justifyContent={'right'}
                        alignItems={'flex-end'}
                        borderRadius={'8px'}
                        h={'125px'}
                        w={'198px'}
                        zIndex={'1'}
                        backgroundImage={cat1}
                        _before={{
                          content: "''",
                          w: '100%',
                          h: '100%',
                          position: 'absolute',
                          bg: '#000',
                          right: '0',
                          left: '0',
                          zIndex: '-1',
                          borderRadius:'6px',
                          opacity:'0.6'
                        }}
                      >
                        <CustomHeading
                          fontSize={'25px'}
                          fontWeight={'700'}
                          color={'#fff'}
                        >
                          Spirits
                        </CustomHeading>
                      </Box>
                  

                  </Stack>
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
                      <Box w={'339px'}>
                        <Img src={menu1} />
                        <Stack p={'3'} bg={'dashbg.100'}>
                          <CustomHeading
                            textAlign={'left'}
                            color={'#fff'}
                            mb={'0'}
                            fontSize={'21px'}
                          >
                            Tito's Handmade Vodka
                          </CustomHeading>
                          <CustomPara color={'brand.800'} fontSize={'14px'}>
                            Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
                            incididunt ut...
                          </CustomPara>
                          <Box>
                            <Flex gap={'2'}>
                            <CustomHeading  mb={'0'} color={'#fff'} fontSize={'17px'} textAlign={'left'}>Category: </CustomHeading>
                            <CustomPara> Spirits</CustomPara>
                            </Flex>
                            <Flex gap={'2'}>
                            <CustomHeading color={'#fff'} fontSize={'17px'} textAlign={'left'}>Subcategory: </CustomHeading>
                            <CustomPara> Bourbon</CustomPara>
                            </Flex>
                            <BorderButton w={'full'}  Url={'./'} Btnctn={'$49.00'} />
                            
                            
                          </Box>
                        </Stack>
                      </Box>
                      <Box w={'339px'}>
                        <Img src={menu1} />
                        <Stack p={'3'} bg={'dashbg.100'}>
                          <CustomHeading
                            textAlign={'left'}
                            color={'#fff'}
                            mb={'0'}
                            fontSize={'21px'}
                          >
                            Tito's Handmade Vodka
                          </CustomHeading>
                          <CustomPara color={'brand.800'} fontSize={'14px'}>
                            Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
                            incididunt ut...
                          </CustomPara>
                          <Box>
                            <Flex gap={'2'}>
                            <CustomHeading  mb={'0'} color={'#fff'} fontSize={'17px'} textAlign={'left'}>Category: </CustomHeading>
                            <CustomPara> Spirits</CustomPara>
                            </Flex>
                            <Flex gap={'2'}>
                            <CustomHeading color={'#fff'} fontSize={'17px'} textAlign={'left'}>Subcategory: </CustomHeading>
                            <CustomPara> Bourbon</CustomPara>
                            </Flex>
                            <BorderButton w={'full'}  Url={'./'} Btnctn={'$49.00'} />
                            
                            
                          </Box>
                        </Stack>
                      </Box>
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
                  justifyContent={'space-between'}
                  spacing={'0'}
                >
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
                          Sunday
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
                            10:00 AM
                          </CustomHeading>
                        </Box>
                        <Box>
                          <CustomHeading
                            fontSize={'18px'}
                            color={'#fff'}
                            mb={'0'}
                            textAlign={'left'}
                          >
                            06:00 PM
                          </CustomHeading>
                        </Box>
                      </Stack>
                                              
                    </Stack>
                  </Box>
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
                          Sunday
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
                            10:00 AM
                          </CustomHeading>
                        </Box>
                        <Box>
                          <CustomHeading
                            fontSize={'18px'}
                            color={'#fff'}
                            mb={'0'}
                            textAlign={'left'}
                          >
                            06:00 PM
                          </CustomHeading>
                        </Box>
                      </Stack>
                                              
                    </Stack>
                  </Box>
                  <Box w={'49%'}>
                    <Stack
                      direction={'row'}
                      flexWrap={'wrap'}
                      justifyContent={'space-between'}
                      bg={'#272727'}
                      p={'14px 19px'}
                      borderRadius={'10px'}
                      mt={'10px'}
                    >
                      <Box>
                        <CustomHeading
                          fontSize={'18px'}
                          color={'#fff'}
                          textAlign={'left'}
                          mb={'0'}
                        >
                          Sunday
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
                            10:00 AM
                          </CustomHeading>
                        </Box>
                        <Box>
                          <CustomHeading
                            fontSize={'18px'}
                            color={'#fff'}
                            mb={'0'}
                            textAlign={'left'}
                          >
                            06:00 PM
                          </CustomHeading>
                        </Box>
                      </Stack>
                                              
                    </Stack>
                  </Box>
                  <Box w={'49%'} >
                    <Stack
                      direction={'row'}
                      flexWrap={'wrap'}
                      justifyContent={'space-between'}
                      bg={'#272727'}
                      p={'14px 19px'}
                      borderRadius={'10px'}
                      mt={'10px'}
                    >
                      <Box>
                        <CustomHeading
                          fontSize={'18px'}
                          color={'#fff'}
                          textAlign={'left'}
                          mb={'0'}
                        >
                          Sunday
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
                            10:00 AM
                          </CustomHeading>
                        </Box>
                        <Box>
                          <CustomHeading
                            fontSize={'18px'}
                            color={'#fff'}
                            mb={'0'}
                            textAlign={'left'}
                          >
                            06:00 PM
                          </CustomHeading>
                        </Box>
                      </Stack>
                                              
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </TabPanel>




              {/* Fourth Tab */}



            <TabPanel>
              <Stack 
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
                        <Img src={Ownerprofile} w={'80px'} h={'80px'}/>  
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
                              Jordan
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
                        <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'28px'}>
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
                        <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'28px'}>
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
                        <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'28px'}>
                          $15.00
                        </CustomPara>
                      </Box>
                  {/* <Box>
                    <Stack 
                      direction={'row'}
                      flexWrap={'wrap'}
                      gap={'4'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      textAlign={'left'}
                    >
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
                        <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'28px'}>
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
                          Total Tip Earned
                        </CustomHeading>
                        <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'28px'}>
                          $45.00
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
                          Total Tip Earned
                        </CustomHeading>
                        <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'28px'}>
                          $45.00
                        </CustomPara>
                      </Box>
                    </Stack>
                  </Box> */}
              </Stack>  
              <Stack 
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
                        <Img src={Ownerprofile} w={'80px'} h={'80px'}/>  
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
                              Jordan
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
                        <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'28px'}>
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
                        <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'28px'}>
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
                        <CustomPara marginBottom={'0'} textAlign={'center'} fontSize={'28px'}>
                          $15.00
                        </CustomPara>
                      </Box>
              </Stack>  
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Stack>

      </MainDashboard>
    </>
  );
}
