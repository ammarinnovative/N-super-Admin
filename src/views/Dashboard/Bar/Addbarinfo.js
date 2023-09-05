import {
  Badge,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  Img,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import PrimaryBtn from '../../../components/Website/Buttons/PrimaryBtn';

export default function Addbarinfo() {
  const location = useLocation();

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);

  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundImage={Signupimg}
        py={'32'}
      >
        <Container maxW={'6xl'}>
          <Stack gap={'12'}>
            <Stack>
              <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
              <CustomHeading color={'#fff'}>
                Add Your Bar’s Information
              </CustomHeading>
              <CustomPara textAlign={'center'}>Enter your details</CustomPara>
            </Stack>
            <Stack alignItems={'start'} direction={'row'} gap={'12'}>
              <Stack w={'60%'} gap={'3'}>
                <CustomPara marginBottom={'0'}>Bar Hours</CustomPara>
                <Stack
                  border={'1px solid #fff'}
                  p={'4'}
                  borderRadius={'6'}
                  spacing={5}
                  color={'#fff'}
                >
                  <Checkbox colorScheme="green">
                    <Stack alignItems={'center'} direction={'row'} gap={'8'}>
                      <Box w={'100px'}>
                        <Text>Sunday</Text>
                      </Box>
                      <Box gap={'8'}>
                        <Tag
                          mr={'4'}
                          py={'3'}
                          px={'12'}
                          border={'1px solid #fff'}
                          bg={'transparent'}
                          color={'#fff'}
                        >
                          10:00 AM
                        </Tag>
                        <Tag
                          mr={'4'}
                          py={'3'}
                          px={'12'}
                          border={'1px solid #fff'}
                          bg={'transparent'}
                          color={'#fff'}
                        >
                          6:00 PM
                        </Tag>
                      </Box>
                    </Stack>
                  </Checkbox>
                  <Checkbox colorScheme="green">
                    <Stack alignItems={'center'} direction={'row'} gap={'8'}>
                      <Box w={'100px'}>
                        <Text>Monday</Text>
                      </Box>
                      <Box gap={'8'}>
                        <Tag
                          mr={'4'}
                          py={'3'}
                          px={'12'}
                          border={'1px solid #fff'}
                          bg={'transparent'}
                          color={'#fff'}
                        >
                          10:00 AM
                        </Tag>
                        <Tag
                          mr={'4'}
                          py={'3'}
                          px={'12'}
                          border={'1px solid #fff'}
                          bg={'transparent'}
                          color={'#fff'}
                        >
                          6:00 PM
                        </Tag>
                      </Box>
                    </Stack>
                  </Checkbox>
                  <Checkbox colorScheme="green">
                    <Stack alignItems={'center'} direction={'row'} gap={'8'}>
                      <Box w={'100px'}>
                        <Text>Wednesday</Text>
                      </Box>
                      <Box gap={'8'}>
                        <Tag
                          mr={'4'}
                          py={'3'}
                          px={'12'}
                          border={'1px solid #fff'}
                          bg={'transparent'}
                          color={'#fff'}
                        >
                          10:00 AM
                        </Tag>
                        <Tag
                          mr={'4'}
                          py={'3'}
                          px={'12'}
                          border={'1px solid #fff'}
                          bg={'transparent'}
                          color={'#fff'}
                        >
                          6:00 PM
                        </Tag>
                      </Box>
                    </Stack>
                  </Checkbox>
                  <Checkbox colorScheme="green">
                    <Stack alignItems={'center'} direction={'row'} gap={'8'}>
                      <Box w={'100px'}>
                        <Text>Thrusday</Text>
                      </Box>
                      <Box gap={'8'}>
                        <Tag
                          mr={'4'}
                          py={'3'}
                          px={'12'}
                          border={'1px solid #fff'}
                          bg={'transparent'}
                          color={'#fff'}
                        >
                          10:00 AM
                        </Tag>
                        <Tag
                          mr={'4'}
                          py={'3'}
                          px={'12'}
                          border={'1px solid #fff'}
                          bg={'transparent'}
                          color={'#fff'}
                        >
                          6:00 PM
                        </Tag>
                      </Box>
                    </Stack>
                  </Checkbox>
                  <Checkbox colorScheme="green">
                    <Stack alignItems={'center'} direction={'row'} gap={'8'}>
                      <Box w={'100px'}>
                        <Text>Friday</Text>
                      </Box>
                      <Box gap={'8'}>
                        <Tag
                          mr={'4'}
                          py={'3'}
                          px={'12'}
                          border={'1px solid #fff'}
                          bg={'transparent'}
                          color={'#fff'}
                        >
                          10:00 AM
                        </Tag>
                        <Tag
                          mr={'4'}
                          py={'3'}
                          px={'12'}
                          border={'1px solid #fff'}
                          bg={'transparent'}
                          color={'#fff'}
                        >
                          6:00 PM
                        </Tag>
                      </Box>
                    </Stack>
                  </Checkbox>
                  <Checkbox colorScheme="green">
                    <Stack alignItems={'center'} direction={'row'} gap={'8'}>
                      <Box w={'100px'}>
                        <Text>Saturday</Text>
                      </Box>
                      <Box gap={'8'}>
                        <Tag
                          mr={'4'}
                          py={'3'}
                          px={'12'}
                          border={'1px solid #fff'}
                          bg={'transparent'}
                          color={'#fff'}
                        >
                          10:00 AM
                        </Tag>
                        <Tag
                          mr={'4'}
                          py={'3'}
                          px={'12'}
                          border={'1px solid #fff'}
                          bg={'transparent'}
                          color={'#fff'}
                        >
                          6:00 PM
                        </Tag>
                      </Box>
                    </Stack>
                  </Checkbox>
                </Stack>
                <Stack>
                  <RadioGroup defaultValue="2">
                    <Stack color={'#fff'} spacing={5} direction="row">
                      <Radio colorScheme="green" value="1">
                        18+
                      </Radio>
                      <Radio colorScheme="green" value="2">
                        21+
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Stack>
              </Stack>
              <Stack w={'50%'}>
                <CustomPara>Add Hashtags</CustomPara>
                <Stack pb={'4'}>
                  <FormControl position={'relative'}>
                    <Input
                      color={'#fff'}
                      border={'1px solid #fff !important'}
                      _placeholder={{ color: '#fff' }}
                      placeholder="Search"
                    />
                    <Button
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
                </Stack>
                <Stack
                  direction={'row'}
                  gap={'3'}
                  spacing={'0'}
                  flexWrap={'wrap'}
                  color={'#fff'}
                >
                  <Checkbox
                    border={'1px solid #fff'}
                    position={'relative'}
                    px={'4'}
                    py={'1'}
                    borderRadius={'6'}
                    className="chckbox"
                  >
                    <Stack direction={'row'}>
                      <Icon
                        color={'white'}
                        fontSize={'20px'}
                        as={AiOutlinePlusCircle}
                      />
                      <Text>Checkbox One</Text>
                    </Stack>
                  </Checkbox>
                  <Checkbox
                    border={'1px solid #fff'}
                    position={'relative'}
                    px={'4'}
                    py={'1'}
                    borderRadius={'6'}
                    className="chckbox"
                  >
                    <Stack direction={'row'}>
                      <Icon
                        color={'white'}
                        fontSize={'20px'}
                        as={AiOutlinePlusCircle}
                      />
                      <Text>Checkbox Two</Text>
                    </Stack>
                  </Checkbox>
                  <Checkbox
                    border={'1px solid #fff'}
                    position={'relative'}
                    px={'4'}
                    py={'1'}
                    borderRadius={'6'}
                    className="chckbox"
                  >
                    <Stack direction={'row'}>
                      <Icon
                        color={'white'}
                        fontSize={'20px'}
                        as={AiOutlinePlusCircle}
                      />
                      <Text>Checkbox</Text>
                    </Stack>
                  </Checkbox>
                  <Checkbox
                    border={'1px solid #fff'}
                    position={'relative'}
                    px={'4'}
                    py={'1'}
                    borderRadius={'6'}
                    className="chckbox"
                  >
                    <Stack direction={'row'}>
                      <Icon
                        color={'white'}
                        fontSize={'20px'}
                        as={AiOutlinePlusCircle}
                      />
                      <Text>Checkbox</Text>
                    </Stack>
                  </Checkbox>
                  <Checkbox
                    border={'1px solid #fff'}
                    position={'relative'}
                    px={'4'}
                    py={'1'}
                    borderRadius={'6'}
                    className="chckbox"
                  >
                    <Stack direction={'row'}>
                      <Icon
                        color={'white'}
                        fontSize={'20px'}
                        as={AiOutlinePlusCircle}
                      />
                      <Text>Checkbox</Text>
                    </Stack>
                  </Checkbox>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <CustomPara>
                Add the following information to make adding your menu easier
              </CustomPara>
              <Stack gap={'6'}>
                <Stack
                  alignItems={'center'}
                  direction={'row'}
                  justifyContent={'space-between'}
                >
                  <Box>
                    <CustomPara marginBottom={'0'}>
                      Standard pour:
                      <br />
                      How much does a guest receive when they order the
                      following:
                    </CustomPara>
                  </Box>
                  <Box gap={'2'} display={'flex'} alignItems={'flex-end'}>
                    <Input bg={'#171717'} color={'#fff'}  outline={'1px solid #fff'} placeholder="" size="md" />
                    <CustomPara marginBottom={'0'}>Oz</CustomPara>
                  </Box>
                </Stack>
                <Stack
                  alignItems={'center'}
                  direction={'row'}
                  justifyContent={'space-between'}
                >
                  <Box>
                    <CustomPara>
                    Shot:
                    </CustomPara>
                  </Box>
                  <Box gap={'2'} display={'flex'} alignItems={'flex-end'}>
                    <Input bg={'#171717'} color={'#fff'}  outline={'1px solid #fff'} placeholder="" size="md" />
                    <CustomPara marginBottom={'0'}>Oz</CustomPara>
                  </Box>
                </Stack>
                <Stack
                  alignItems={'center'}
                  direction={'row'}
                  justifyContent={'space-between'}
                >
                  <Box>
                    <CustomPara>
                    On the Rocks/Neat:
                    </CustomPara>
                  </Box>
                  <Box gap={'2'} display={'flex'} alignItems={'flex-end'}>
                    <Input bg={'#171717'} color={'#fff'}  outline={'1px solid #fff'} placeholder="" size="md" />
                    <CustomPara marginBottom={'0'}>Oz</CustomPara>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
                <PrimaryBtn value={'Continue'}/>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
