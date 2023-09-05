import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  ListItem,
  Stack,
  UnorderedList,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { AiOutlineCheck } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { GET, POST } from '../../../utilities/ApiProvider';
import { baseUrl } from '../../../utilities/Config';
import PrimaryBtn from '../../Website/Buttons/PrimaryBtn';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateBarInfo } from '../../../reducers/useReducers';


export default function Planwarp() {

  


  const toast = useToast();
  const user = useSelector(state => state?.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [packages, setpackages] = useState([]);
  const [state,setState] = useState(0);

  // let user = localStorage.getItem('user');
  // user = JSON.parse(user);

  useEffect(() => {
    console.log(user);
    if(user) getUserData();
  }, [user]);

  // useEffect(()=>{
  //   Selectmambership();
  // },[state])

  const getUserData = async () => {
    setIsLoading(true);
    let response = await GET(`membership/?limit=10&page=1`, {
      authorization: `Bearer ${user?.verificationToken}`,
    });
    console.log(response);
    setpackages(response.data);
  };

  const Selectmambership = async id => {
    console.log("id=>",id);
    let response = await POST(
      `users/selectMembership`,
      {
        membership: id,
      },
      { authorization: `Bearer ${user?.verificationToken}` }
    );
    setState(state+1);
    toast({
      description: response.message,
      status: response.status,
      isClosable: true,
      position: 'bottom-left',
      duration: 2500,
    });
    if (response.status === 'success') {
      
      // update user credentials

      // let user = JSON.parse(localStorage.getItem("user"));
      // user.barInfo = response.data.barInfo


      // localStorage.setItem('user',user);

      console.log(response.data.barInfo);


      dispatch(updateBarInfo(response.data.barInfo));
      navigate('/dashboard/equipment');
    } else {
      navigate('/dashboard/Plan');
    }
  };

  return (
    <>
      <Stack direction={{base:"column",lg:"row"}} alignItems={"center"} gap={'4'} w={'full'}>
        {packages?.length > 0 &&
          packages.map((v, i) => {
            return (
              <Box
                role="group"
                key={i}
                justifyItems={'center'}
                py={'8'}
                w={{base:"100%",md:"45%",lg:"31%"}}
                border={'1px solid #fff'}
                borderRadius={'6'}
                justifyContent={'center'}
                textAlign={'center'}
                bg={'dashbg.100'}
                _hover={{
                  bg:'wcolor.100',
                
                }}
                transition={'all 0.5s ease'}
              >
                <Stack
                  pb={'6'}
                  mb={'4'}
                  borderBottom={'1px solid #fff'}
                  
                >
                  <Box
                    mt={'-50px !important'}
                    mb={'5 !important'}
                    p={'2'}
                    borderRadius={'8'}
                    m={'auto'}
                    w={'100px'}
                    transition={'all 0.5s ease'}
                    bg={'wcolor.100'}
                    _groupHover={{ bg: "#212121" }}
                  >
                    <CustomPara marginBottom={'0'} textAlign={'center'}>
                      {v.name}
                    </CustomPara>
                  </Box>
                  <CustomPara textAlign={'center'}>{v.type}</CustomPara>
                  <CustomHeading color={'#fff'}>${v.price}</CustomHeading>
                </Stack>
                <Stack mb={6} pr={'6'}>
                  <UnorderedList listStyleType={'none'} spacing={'4'}>
                    {v.description.map((v, i) => {
                      return (
                        <ListItem key={i}>
                          <Flex alignItems={'center'} gap={'2'}>
                            <Icon
                              color={'white'}
                              fontSize={'16px'}
                              as={AiOutlineCheck}
                            />
                            <CustomPara marginBottom={'0'}>{v}</CustomPara>
                          </Flex>
                        </ListItem>
                      );
                    })}
                  </UnorderedList>
                </Stack>
                <Stack>
                  <Button
                  transition={'all 0.5s ease'}
                    bg={'wcolor.100'}
                    margin={'auto'}
                    px={'12'}
                    color={'#fff'}
                    py={'6'}
                    _groupHover={{ bg: "#212121" }}
                    _hover={{
                      bg: '#000',
                    }}
                    onClick={() => {
                      Selectmambership(v._id);
                    }}
                  >
                    Get Started
                  </Button>
                </Stack>
              </Box>
            );
          })}
      </Stack>
    </>
  );
}
