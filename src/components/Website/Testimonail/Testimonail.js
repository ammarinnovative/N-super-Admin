import {
  Box,
  Container,
  Flex,
  Image,
  Stack,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../Headings/CustomHeading';
import CustomPara from '../Paragraph/CustomPara';
import profile from '../../../assets/images/shorts/profile.jpg';
import Qta from '../../../assets/images/shorts/quta.png';
import { AiFillStar } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';

export default function Testimonail() {
  return (
    <>
      <Stack py={'20'}>
        <Container maxW={'6xl'} p={{ base: '15px !important', '2xl': 0 }}>
          <Stack>
            <Box mb={'10'}>
              <CustomHeading color={'#fff'}>What Our Client Says</CustomHeading>
              <CustomPara textAlign={'center'}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris
                <br />
                nisi ut aliquip ex ea commodo consequat.
              </CustomPara>
            </Box>
            <Stack direction={'row'} gap={'6'}>
              <Box bg={'#1d1d1d'} borderRadius={'12'} py={'10'} px={'12'}>
                <Flex mb={'6'} gap={'3'} alignItems={'center'}>
                  <Box>
                    <Image borderRadius={'50%'} src={profile} />
                  </Box>
                  <Box>
                    <CustomHeading fontSize={'25px'} mb={'0'}>
                      Maira Flynn
                    </CustomHeading>
                    <CustomPara fontSize={'14px'}>CEO of Bata</CustomPara>
                  </Box>
                </Flex>
                <Flex gap={'3'} >
                  <Box w={'20%'}>
                    <Image src={Qta} />
                  </Box>
                  <Box w={'80%'}>
                    <CustomPara fontSize={'15px'}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua....
                    </CustomPara>
                  </Box>
                </Flex>
                <UnorderedList display={'flex'} marginLeft={'0'} >
                  <ListItem><Icon color={'#ffcc00'} fontSize={'16px'} as={AiFillStar} /></ListItem>
                  <ListItem><Icon color={'#ffcc00'} fontSize={'16px'} as={AiFillStar} /></ListItem>
                  <ListItem><Icon color={'#ffcc00'} fontSize={'16px'} as={AiFillStar} /></ListItem>
                  <ListItem><Icon color={'#ffcc00'} fontSize={'16px'} as={AiFillStar} /></ListItem>
                </UnorderedList>
              </Box>
              <Box bg={'#1d1d1d'} borderRadius={'12'} py={'10'} px={'12'}>
                <Flex mb={'6'} gap={'3'} alignItems={'center'}>
                  <Box>
                    <Image borderRadius={'50%'} src={profile} />
                  </Box>
                  <Box>
                    <CustomHeading fontSize={'25px'} mb={'0'}>
                      Maira Flynn
                    </CustomHeading>
                    <CustomPara fontSize={'14px'}>CEO of Bata</CustomPara>
                  </Box>
                </Flex>
                <Flex gap={'3'} >
                  <Box w={'20%'}>
                    <Image src={Qta} />
                  </Box>
                  <Box w={'80%'}>
                    <CustomPara fontSize={'15px'}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua....
                    </CustomPara>
                  </Box>
                </Flex>
                <UnorderedList display={'flex'} marginLeft={'0'} >
                  <ListItem><Icon color={'#ffcc00'} fontSize={'16px'} as={AiFillStar} /></ListItem>
                  <ListItem><Icon color={'#ffcc00'} fontSize={'16px'} as={AiFillStar} /></ListItem>
                  <ListItem><Icon color={'#ffcc00'} fontSize={'16px'} as={AiFillStar} /></ListItem>
                  <ListItem><Icon color={'#ffcc00'} fontSize={'16px'} as={AiFillStar} /></ListItem>
                </UnorderedList>
              </Box>  
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
