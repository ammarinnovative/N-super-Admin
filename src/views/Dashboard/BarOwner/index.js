import {
    Box,
    Button,
    Flex,
    FormControl,
    Image,
    Img,
    Input,
    Link,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import React from 'react';
  import CustomHeading from '../../../components/Website/Headings/CustomHeading';
  import MainDashboard from '../MainDashboard';
  import { AiOutlineSearch } from 'react-icons/ai';
  import { AiFillStar } from 'react-icons/ai'
  import { Icon } from '@chakra-ui/icons';
  import BorderButton from '../../../components/Website/Buttons/BorderButton';
  import cat1 from '../../../assets/images/menu/c1.jpg';
  import menu1 from '../../../assets/images/menu/menu1.jpg';
  import Ownerprofile from '../../../assets/images/01.png';
  import CustomPara from '../../../components/Website/Paragraph/CustomPara';
  
  
  export default function BarOwner() {
    return (
      <>
        <MainDashboard>
          <Stack p={'4'} gap={'8'}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Box display={'flex'} alignItems={'center'} gap={'4'}>
                <CustomHeading
                  fontSize={'30px'}
                  color={'#fff'}
                  textAlign={'left'}
                >
                  Registered Bar Owners
                </CustomHeading>
              </Box>
              {/* <Box>
                <BorderButton Url={'/dashboard/AddNewMenu'} Btnctn={'Add Drink'} />
              </Box> */}
            </Stack>
            
            <Stack>
              <Box>
                <CustomHeading
                  fontSize={'21px'}
                  color={'#5f5f5f'}
                  textAlign={'left'}
                >
                  4 Bar Owners
                </CustomHeading>
              </Box>
              <Stack direction={'row'} gap={'4'}>
               
                <Box w={'50%'}>
                  {/* <Img src={menu1} /> */}
                  <Stack p={'3'} bg={'dashbg.100'} borderRadius={'10px'}> 
                    <Stack 
                        direction={'row'}
                        flexWrap={'wrap'}
                        gap={'4'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        mt={'10px'}
                      >
                        <Stack 
                          direction={'row'}
                          flexWrap={'wrap'}
                          gap={'4'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Box>
                            <Image src={Ownerprofile} /> 
                          </Box>
                          <Box>
                              <CustomHeading
                                  textAlign={'left'}
                                  color={'#fff'}
                                  mb={'0'}
                                  fontSize={'18px'}
                                  >
                                  Infinity Night Club
                              </CustomHeading>
                              <CustomPara color={'brand.800'} fontSize={'14px'}>
                                Louisville, KY
                              </CustomPara>
                          </Box>
                        </Stack>
                        <Box>
                          <CustomHeading
                              textAlign={'left'}
                              color={'#fff'}
                              mb={'0'}
                              fontSize={'21px'}
                              >
                              4.5 
                              <Icon color={'#fcb618'} as={AiFillStar} />
                              <Icon color={'#fcb618'} as={AiFillStar} />
                              <Icon color={'#fcb618'} as={AiFillStar} />
                              <Icon color={'#fcb618'} as={AiFillStar} />
                              <Icon color={'#fcb618'} as={AiFillStar} />
                          </CustomHeading>
                        </Box>
                      </Stack>  
                    
                    <Box>
                      <Flex gap={'2'}>
                        <CustomHeading mb={'0'} color={'#fff'} fontSize={'22px'} textAlign={'left'}>Most Popular Products </CustomHeading>
                      </Flex>

                      <Stack 
                        direction={'row'}
                        flexWrap={'wrap'}
                        gap={'4'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        mt={'10px'}
                      >
                        <Stack 
                          direction={'row'}
                          flexWrap={'wrap'}
                          gap={'4'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Box>
                            <Img src={menu1} w={'80px'} h={'80px'}/>  
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
                          </Box>
                        </Stack>
                        <Box>
                            <CustomHeading
                                textAlign={'left'}
                                color={'#dc0b9b'}
                                mb={'0'}
                                fontSize={'21px'}
                                >
                                $49.00 
                            </CustomHeading>
                        </Box>
                      </Stack>  

                      <Stack 
                        direction={'row'}
                        flexWrap={'wrap'}
                        gap={'4'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        mt={'10px'}
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
                            <Img src={menu1} w={'80px'} h={'80px'}/>  
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
                          </Box>
                        </Stack>
                        <Box>
                            <CustomHeading
                                textAlign={'left'}
                                color={'#dc0b9b'}
                                mb={'0'}
                                fontSize={'21px'}
                                >
                                $49.00 
                            </CustomHeading>
                        </Box>
                      </Stack>  


                      <BorderButton w={'full'}  Url={'/dashboard/barownerdetails'} Btnctn={'View Full Profile'} />
                      
                      
                    </Box>
                  </Stack>
                </Box>


                <Box w={'50%'}>
                  {/* <Img src={menu1} /> */}
                  <Stack p={'3'} bg={'dashbg.100'} borderRadius={'10px'}> 
                    <Stack 
                        direction={'row'}
                        flexWrap={'wrap'}
                        gap={'4'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        mt={'10px'}
                      >
                        <Stack 
                          direction={'row'}
                          flexWrap={'wrap'}
                          gap={'4'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Box>
                            <Image src={Ownerprofile} /> 
                          </Box>
                          <Box>
                              <CustomHeading
                                  textAlign={'left'}
                                  color={'#fff'}
                                  mb={'0'}
                                  fontSize={'18px'}
                                  >
                                  Infinity Night Club
                              </CustomHeading>
                              <CustomPara color={'brand.800'} fontSize={'14px'}>
                                Louisville, KY
                              </CustomPara>
                          </Box>
                        </Stack>
                        <Box>
                          <CustomHeading
                              textAlign={'left'}
                              color={'#fff'}
                              mb={'0'}
                              fontSize={'21px'}
                              >
                              4.5 
                              <Icon color={'#fcb618'} as={AiFillStar} />
                              <Icon color={'#fcb618'} as={AiFillStar} />
                              <Icon color={'#fcb618'} as={AiFillStar} />
                              <Icon color={'#fcb618'} as={AiFillStar} />
                              <Icon color={'#fcb618'} as={AiFillStar} />
                          </CustomHeading>
                        </Box>
                      </Stack>  
                    
                    <Box>
                      <Flex gap={'2'}>
                      <CustomHeading  mb={'0'} color={'#fff'} fontSize={'22px'} textAlign={'left'}>Most Popular Products </CustomHeading>
                      </Flex>

                      <Stack 
                        direction={'row'}
                        flexWrap={'wrap'}
                        gap={'4'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        mt={'10px'}
                      >
                        <Stack 
                          direction={'row'}
                          flexWrap={'wrap'}
                          gap={'4'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Box>
                            <Img src={menu1} w={'80px'} h={'80px'}/>  
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
                          </Box>
                        </Stack>
                        <Box>
                            <CustomHeading
                                textAlign={'left'}
                                color={'#dc0b9b'}
                                mb={'0'}
                                fontSize={'21px'}
                                >
                                $49.00 
                            </CustomHeading>
                        </Box>
                      </Stack>  

                      <Stack 
                        direction={'row'}
                        flexWrap={'wrap'}
                        gap={'4'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        mt={'10px'}
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
                            <Img src={menu1} w={'80px'} h={'80px'}/>  
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
                          </Box>
                        </Stack>
                        <Box>
                            <CustomHeading
                                textAlign={'left'}
                                color={'#dc0b9b'}
                                mb={'0'}
                                fontSize={'21px'}
                                >
                                $49.00 
                            </CustomHeading>
                        </Box>
                      </Stack>  


                      <BorderButton w={'full'}  Url={'/dashboard/barownerdetails'} Btnctn={'View Full Profile'} />
                      
                      
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
  