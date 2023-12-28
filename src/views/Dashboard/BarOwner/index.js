import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Img,
  Input,
  Link,
  Spinner,
  Stack,
  Text,
  selector,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { baseUrl, imgUrl } from '../../../utilities/Config';
import { useSelector } from 'react-redux';
import { Icon } from '@chakra-ui/icons';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import cat1 from '../../../assets/images/menu/c1.jpg';
import menu1 from '../../../assets/images/menu/menu1.jpg';
import Ownerprofile from '../../../assets/images/01.png';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { DELETE, GET } from '../../../utilities/ApiProvider';

export default function BarOwner() {
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(4);

  const selctor = useSelector(state => state);

  const [dataLoading, setDataLoading] = useState(false);
  const getData = async () => {
    setDataLoading(true);
    const res = await GET('admin/bars', {
      authorization: `bearer ${user?.verificationToken}`,
    });
    setData(res?.data);
    setDataLoading(false);
  };

  console.log(data);
  useEffect(() => {
    if (selector) {
      setUser(selector?.value);
    }
  }, [selector]);

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const toast = useToast();
  const [removeLoading, setRemoveLoading] = useState(false);

  async function removeOwner(id) {
    setRemoveLoading(true);
    try {
      let response = await DELETE(`admin/bar/${id}/remove`);
      if (response.status === 200) {
        getData();
        toast({
          isClosable: true,
          description: response?.message,
          duration: 5000,
          status: 'success',
        });
      }
    } catch (err) {
      toast({
        isClosable: true,
        description: err.message,
        duration: 5000,
        status: 'error',
      });
    }
    setRemoveLoading(false);
  }

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
                {data.length} Bar Owners
              </CustomHeading>
            </Box>
            <Stack direction={'row'} flexWrap={'wrap'} gap={'4'} spacing={0}>
              {
                dataLoading ? <Spinner color='#dc0b9b' /> :
                  data && data?.length > 0 ? (
                    data?.map(item => {
                      return (
                        <Box w={'23%'}>
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
                                mb={'20px'}
                              >
                                {item?.upload_logo ? (
                                  <Box>
                                    <Image objectFit={'contain'} bgColor={'#fff'} width={"50px"} borderRadius={"50%"} height={"50px"} src={imgUrl + item?.upload_logo} />
                                  </Box>
                                ) : (
                                  <Box>
                                    <Image src={Ownerprofile} />
                                  </Box>
                                )}

                                <Box>
                                  <CustomHeading
                                    textAlign={'left'}
                                    color={'#fff'}
                                    mb={'0'}
                                    fontSize={'18px'}
                                  >
                                    {item?.barName ?? 'Infinity Night Club'}
                                  </CustomHeading>
                                  <CustomPara color={'brand.800'} fontSize={'14px'}>
                                    {item?.city ?? 'testing'}
                                  </CustomPara>
                                </Box>
                              </Stack>
                              <Box>{/* <MyRatingComponent /> */}</Box>
                            </Stack>

                            <Box display={'flex'} justifyContent={'space-between'}>
                              <BorderButton
                                data={item?._id}
                                w={'49%'}
                                Url={`/dashboard/barownerdetails/${item?._id}`}
                                Btnctn={'View'}
                              />
                              <Button
                                isLoading={removeLoading}
                                onClick={() => removeOwner(item?._id)}
                                w={"49%"}
                                height={'45px'}
                                bgColor={'#dc0b9b'}
                              >Remove</Button>
                            </Box>
                          </Stack>
                        </Box>
                      );
                    })
                  ) : (
                    <Text fontSize={'20px'} color={'white'}>
                      No Data Found
                    </Text>
                  )}
            </Stack>
          </Stack>
        </Stack >
      </MainDashboard >
    </>
  );
}
