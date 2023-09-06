import {
  Box,
  Button,
  Flex,
  FormControl,
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
import { Icon } from '@chakra-ui/icons';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import cat1 from '../../../assets/images/menu/c1.jpg';
import menu1 from '../../../assets/images/menu/menu1.jpg';
import { useSelector } from 'react-redux';
import { imgUrl } from '../../../utilities/Config';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { useState } from 'react';
import { useEffect } from 'react';
import { GET } from '../../../utilities/ApiProvider';

export default function Menu() {
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  const selector = useSelector(state => state);

  const getData = async () => {
    const res = await GET('admin/menu', {
      authorization: `bearer ${user?.verificationToken}`,
    });
    setData(res?.data);
  };

  console.log(data);
  useEffect(() => {
    if (selector) {
      setUser(user?.value);
    }
  }, [selector]);

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

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
                Category
              </CustomHeading>
              <FormControl position={'relative'}>
                <Input
                  color={'#fff'}
                  border={'1px solid #fff !important'}
                  _placeholder={{ color: '#fff' }}
                  placeholder="Search"
                />
                <Button bg={'transparent'} right={'0'} position={'absolute'}>
                  <Icon
                    color={'white'}
                    fontSize={'20px'}
                    as={AiOutlineSearch}
                  />
                </Button>
              </FormControl>
            </Box>
            <Box>
              <BorderButton
                Url={'/dashboard/AddNewMenu'}
                Btnctn={'Add Drink'}
              />
            </Box>
          </Stack>
          <Stack direction={'row'} gap={'4'}>
            <Link>
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
                  borderRadius: '6px',
                  opacity: '0.6',
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
            </Link>
            <Link>
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
                  borderRadius: '6px',
                  opacity: '0.6',
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
            </Link>
          </Stack>
          <Stack>
            <Box>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                All Menu
              </CustomHeading>
            </Box>
            <Stack direction={'row'} flexWrap={'wrap'} gap={'4'}>
              {data && data?.length > 0 ? (
                data?.map(item => {
                  return (
                    <Box key={item?._id} w={'339px'}>
                      <Img src={imgUrl+item?.pictures[0]} />
                      <Stack p={'3'} bg={'dashbg.100'}>
                        <CustomHeading
                          textAlign={'left'}
                          color={'#fff'}
                          mb={'0'}
                          fontSize={'21px'}
                        >
                          {item?.menu_name}
                        </CustomHeading>
                        <CustomPara color={'brand.800'} fontSize={'14px'}>
                         {item?.description}
                        </CustomPara>
                        <Box>
                          <Flex gap={'2'}>
                            <CustomHeading
                              mb={'0'}
                              color={'#fff'}
                              fontSize={'17px'}
                              textAlign={'left'}
                            >
                              Category:{' '}
                            </CustomHeading>
                            <CustomPara> Spirits</CustomPara>
                          </Flex>
                          <Flex gap={'2'}>
                            <CustomHeading
                              color={'#fff'}
                              fontSize={'17px'}
                              textAlign={'left'}
                            >
                              Subcategory:{' '}
                            </CustomHeading>
                            <CustomPara> Bourbon</CustomPara>
                          </Flex>
                          <BorderButton
                            w={'full'}
                            Url={'./'}
                            Btnctn={'$49.00'}
                          />
                        </Box>
                      </Stack>
                    </Box>
                  );
                })
              ) : (
                <Text color={'white'} fontSize={'17px'}>
                  No Data Found
                </Text>
              )}
            </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
