import React from 'react'
import {
    Box,
    Stack,
    Image,
    Link,
  } from '@chakra-ui/react';
import { Link as Reactlink } from 'react-router-dom';
import { AiOutlineSetting, AiOutlineDelete } from 'react-icons/ai';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import Teamone from '../../../assets/images/Team/t1.jpg';
import { Icon } from '@chakra-ui/icons';

export default function Teammemberdetails(members) {
  return (

    <>
    <Stack
                py={'5'}
                borderBottom={'1px solid #fff'}
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Box gap={'8'} alignItems={'center'} display={'flex'}>
                  <Image borderRadius={'50%'} w={'100px'} src={Teamone} />
                  <Box>
                    <CustomPara
                      fontWeight={'900'}
                      marginBottom={0}
                      color={'brand.800'}
                    >
                      {members.name}
                    </CustomPara>
                    <CustomHeading
                      textAlign={'left'}
                      color={'#fff'}
                      fontSize={'15px'}
                    >
                      Hasan Saleem
                    </CustomHeading>
                  </Box>
                </Box>
                <Box>
                  <CustomPara
                    fontWeight={'900'}
                    marginBottom={0}
                    color={'brand.800'}
                  >
                    Id no
                  </CustomPara>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'15px'}
                  >
                    #545631
                  </CustomHeading>
                </Box>
                <Box>
                  <CustomPara
                    fontWeight={'900'}
                    marginBottom={0}
                    color={'brand.800'}
                  >
                    Today Tip
                  </CustomPara>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'15px'}
                  >
                    $15.00
                  </CustomHeading>
                </Box>
                <Box>
                  <CustomPara
                    fontWeight={'900'}
                    marginBottom={0}
                    color={'brand.800'}
                  >
                    Total Tip Earned
                  </CustomPara>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'15px'}
                  >
                    $45.00
                  </CustomHeading>
                </Box>
                <Box>
                  <CustomPara
                    fontWeight={'900'}
                    marginBottom={0}
                    color={'brand.800'}
                  >
                    Amount Withdraw
                  </CustomPara>
                  <CustomHeading
                    textAlign={'left'}
                    color={'#fff'}
                    fontSize={'15px'}
                  >
                    $0.00
                  </CustomHeading>
                </Box>

                <Box  display={'flex'} gap={'4'}>
                  <Link as={Reactlink} to={'./'}>
                    <Icon color={'#F0E22F'} fontSize={'25px'} as={AiOutlineSetting} />
                  </Link>
                  <Link as={Reactlink} to={'./'}>
                    <Icon color={'#EA0000'} fontSize={'25px'} as={AiOutlineDelete} />
                  </Link>
                </Box>
              </Stack>
    </>
  )
}
