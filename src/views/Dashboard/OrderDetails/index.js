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
              Total Orders
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
              Canceled Orders
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Stack mt={'25px'}>
                <Box mt={'25px'}>
                  <CustomHeading
                    fontSize={'30px'}
                    color={'#fff'}
                    textAlign={'left'}
                  >
                    121 Orders
                  </CustomHeading>
                </Box>
                <Stack 
                  direction={'row'} 
                  flexWrap={'wrap'} 
                  justifyContent={'space-between'}
                  spacing={'0'}
                >
                  <Box w={'33%'}>
                    <Stack
                      direction={'row'}
                      flexWrap={'wrap'}
                      justifyContent={'space-between'}
                      bg={'#272727'}
                      p={'14px 19px'}
                      borderRadius={'10px'}
                      mb={'10px'}
                    >
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
                            <Stack
                              direction={'row'}
                              alignItems={'center'}
                              mt={'15px'}
                            >
                              <Box>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Category
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Spirits
                                </CustomPara>
                              </Box>
                              <Box ml={'40px'}>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Subcategory
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Bourbon
                                </CustomPara>
                              </Box>
                            </Stack>
                            
                            
                            
                        </Box>
                      </Stack>     
                    </Stack>

                  </Box>
                  <Box w={'33%'}>
                    <Stack
                      direction={'row'}
                      flexWrap={'wrap'}
                      justifyContent={'space-between'}
                      bg={'#272727'}
                      p={'14px 19px'}
                      borderRadius={'10px'}
                      mb={'10px'}
                    >
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
                            <Stack
                              direction={'row'}
                              alignItems={'center'}
                              mt={'15px'}
                            >
                              <Box>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Category
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Spirits
                                </CustomPara>
                              </Box>
                              <Box ml={'40px'}>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Subcategory
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Bourbon
                                </CustomPara>
                              </Box>
                            </Stack>
                            
                            
                            
                        </Box>
                      </Stack>     
                    </Stack>

                  </Box>
                  <Box w={'33%'}>
                    <Stack
                      direction={'row'}
                      flexWrap={'wrap'}
                      justifyContent={'space-between'}
                      bg={'#272727'}
                      p={'14px 19px'}
                      borderRadius={'10px'}
                      mb={'10px'}
                    >
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
                            <Stack
                              direction={'row'}
                              alignItems={'center'}
                              mt={'15px'}
                            >
                              <Box>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Category
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Spirits
                                </CustomPara>
                              </Box>
                              <Box ml={'40px'}>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Subcategory
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Bourbon
                                </CustomPara>
                              </Box>
                            </Stack>
                            
                            
                            
                        </Box>
                      </Stack>     
                    </Stack>

                  </Box>
                  <Box w={'33%'}>
                    <Stack
                      direction={'row'}
                      flexWrap={'wrap'}
                      justifyContent={'space-between'}
                      bg={'#272727'}
                      p={'14px 19px'}
                      borderRadius={'10px'}
                      mb={'10px'}
                    >
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
                            <Stack
                              direction={'row'}
                              alignItems={'center'}
                              mt={'15px'}
                            >
                              <Box>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Category
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Spirits
                                </CustomPara>
                              </Box>
                              <Box ml={'40px'}>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Subcategory
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Bourbon
                                </CustomPara>
                              </Box>
                            </Stack>
                            
                            
                            
                        </Box>
                      </Stack>     
                    </Stack>

                  </Box>
                  
                </Stack>
              </Stack>
             
            </TabPanel>
            
            
            {/* Second Tab */}
            
            
            
            <TabPanel>
              <Stack mt={'25px'}>
                <Box mt={'25px'}>
                  <CustomHeading
                    fontSize={'30px'}
                    color={'#fff'}
                    textAlign={'left'}
                  >
                    3 Canceled Orders
                  </CustomHeading>
                </Box>
                <Stack 
                  direction={'row'} 
                  flexWrap={'wrap'} 
                  justifyContent={'space-between'}
                  spacing={'0'}
                >
                  <Box w={'33%'}>
                    <Stack
                      direction={'row'}
                      flexWrap={'wrap'}
                      justifyContent={'space-between'}
                      bg={'#272727'}
                      p={'14px 19px'}
                      borderRadius={'10px'}
                      mb={'10px'}
                    >
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
                            <Stack
                              direction={'row'}
                              alignItems={'center'}
                              mt={'15px'}
                            >
                              <Box>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Category
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Spirits
                                </CustomPara>
                              </Box>
                              <Box ml={'40px'}>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Subcategory
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Bourbon
                                </CustomPara>
                              </Box>
                            </Stack>
                            
                            
                            
                        </Box>
                      </Stack>     
                    </Stack>

                  </Box>
                  <Box w={'33%'}>
                    <Stack
                      direction={'row'}
                      flexWrap={'wrap'}
                      justifyContent={'space-between'}
                      bg={'#272727'}
                      p={'14px 19px'}
                      borderRadius={'10px'}
                      mb={'10px'}
                    >
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
                            <Stack
                              direction={'row'}
                              alignItems={'center'}
                              mt={'15px'}
                            >
                              <Box>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Category
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Spirits
                                </CustomPara>
                              </Box>
                              <Box ml={'40px'}>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Subcategory
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Bourbon
                                </CustomPara>
                              </Box>
                            </Stack>
                            
                            
                            
                        </Box>
                      </Stack>     
                    </Stack>

                  </Box>
                  <Box w={'33%'}>
                    <Stack
                      direction={'row'}
                      flexWrap={'wrap'}
                      justifyContent={'space-between'}
                      bg={'#272727'}
                      p={'14px 19px'}
                      borderRadius={'10px'}
                      mb={'10px'}
                    >
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
                            <Stack
                              direction={'row'}
                              alignItems={'center'}
                              mt={'15px'}
                            >
                              <Box>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Category
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Spirits
                                </CustomPara>
                              </Box>
                              <Box ml={'40px'}>
                                <CustomPara color={'brand.800'} fontSize={'16px'} lineHeight={'13px'}>
                                  Subcategory
                                </CustomPara>
                                <CustomPara color={'#dc0b9b'} fontSize={'16px'} lineHeight={'13px'}>
                                  Bourbon
                                </CustomPara>
                              </Box>
                            </Stack>
                            
                            
                            
                        </Box>
                      </Stack>     
                    </Stack>

                  </Box>
                  
                </Stack>
              </Stack>
             
            </TabPanel>

            
          </TabPanels>
        </Tabs>
        </Stack>

      </MainDashboard>
    </>
  );
}
