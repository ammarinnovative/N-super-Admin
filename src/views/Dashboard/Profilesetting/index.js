import {
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Img,
  Flex,
  Box,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import { Input } from '@chakra-ui/react';
import Teamone from '../../../assets/images/Team/t1.jpg';
import { Link as Reactlink } from 'react-router-dom';
import PrimaryBtn from '../../../components/Website/Buttons/PrimaryBtn';
import ContactFields from '../../../components/Website/Contact/ContactFields';
import { useSelector } from 'react-redux';
import { POST } from '../../../utilities/ApiProvider';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';

export default function Index() {
  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState({});
  const [Fields, setFields] = useState({
    name: '',
    city: '',
    email: '',
    phone: '',
    password:"",
    overviewReport: 'true',
    email_notification: 'true',
  });


  const selector = useSelector(state => state);
  const submitForm = async () => {
    try {
      setisLoading(true);

      const objData = {
        firstname: Fields.name,
        city: Fields.city,
        phone: Fields.phone,
        password:Fields.password
      };

      if (Fields.name.length == 0) {
        delete objData.firstname;
      }
      if (Fields.city.length == 0) {
        delete objData.city;
      }
      if (Fields.phone == 0) {
        delete objData.phone;
      }
      if(Fields.password == 0){
      delete objData.password
      }

      const formData = new FormData();

      for (const key in objData) {
        if (objData.hasOwnProperty(key)) {
          formData.append(key, objData[key]);
        }
      }


      let response = await POST('/mailtest/emailer.php', FormData, {
        'Content-Type': 'application/x-www-form-urlencoded',
      });
      console.log(response);

      toast({
        description: response.message,
        status: response.status,
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
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
      setisLoading(false);
    }
  };

  useEffect(() => {
    if (selector) {
      setUser(selector?.value);
    }
  }, [selector]);


  const settb = {
    bg: 'pHeading.100',
    color: '#fff',
    px: '8',
    borderRadius: '6',
  };

  useEffect(() => {
    setFields({
      ...Fields,
      name: user?.username,
      city: user?.address,
      email: user?.email,
      phone: user?.phone ?? 'No phone number',
    });
  }, [user]);

  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'4'}>
          <Stack bg={'dashbg.100'} p={'6'}>
            <Tabs>
              <TabList mb={'6'} gap={'4'} borderBottom={'0px solid'}>
                <Tab sx={settb}>Profile Setting</Tab>
                <Tab sx={settb}>My Team</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Stack gap={'16'}>
                    <Stack>
                      
                      <CustomHeading
                        fontSize={'30px'}
                        mb={'8'}
                        color={'#fff'}
                        textAlign={'left'}
                      >
                        Profile Details
                      </CustomHeading>
                      <Stack gap={'3'} alignItems={'center'} direction={'row'}>
                        <Box textAlign={'center'}>
                          <Img src={Teamone} mb={'4'} w={'120px'} />
                        </Box>
                        <Box>
                          
                          <Flex mb={'4'} gap={'4'}>
                          <label htmlFor='file'>
                            <PrimaryBtn
                              fontSize={'15px'}
                              px={'5'}
                              value={'Upload New Photo'}
                            />
                          </label>
                          </Flex>
                        </Box>
                      </Stack>
                    </Stack>
                    <Stack>
                      <CustomHeading
                        fontSize={'30px'}
                        mb={'8'}
                        color={'#fff'}
                        textAlign={'left'}
                      >
                        Account Settings
                      </CustomHeading>
                      <Box
                        display={'flex'}
                        flexWrap={'wrap'}
                        gap={5}
                        pb={'12'}
                        justifyContent={'space-between'}
                      >
                        <ContactFields
                          type={'text'}
                          placeholder={'Name'}
                          name={'name'}
                          value={Fields.name}
                          setFields={name => setFields({ ...Fields, name })}
                        />
                        <Input
                          type="file"
                          id="file"
                          display={"none"}
                          name='profile_picture'
                          onChange={(e)=>{setFields({...Fields,profile_picture:e.target.files[0]})}}
                        />
                        <ContactFields
                          type={'text'}
                          placeholder={'City'}
                          name={'city'}
                          value={Fields.city}
                          setFields={city => setFields({ ...Fields, city })}
                        />
                        <ContactFields
                          type={'text'}
                          placeholder={'email'}
                          name={'email'}
                          value={Fields.email}
                        />
                        <ContactFields
                          type={'text'}
                          placeholder={'phone'}
                          name={'phone'}
                          value={Fields.phone}
                          setFields={phone => setFields({ ...Fields, phone })}
                        />
                      </Box>
                      <Box>
                        <CustomHeading
                          fontSize={'30px'}
                          mb={'8'}
                          color={'#fff'}
                          textAlign={'left'}
                        >
                          Connected Account
                        </CustomHeading>
                        <ContactFields
                          type={'text'}
                          placeholder={'Name'}
                          name={'name'}
                          value={Fields.name}
                          setFields={name => setFields({ ...Fields, name })}
                        />
                      </Box>
                    </Stack>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
