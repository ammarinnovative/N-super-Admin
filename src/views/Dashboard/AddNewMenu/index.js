import {
  Box,
  Checkbox,
  Input,
  Link,
  Stack,
  Text,
  Button,
  Textarea,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import { useToast } from '@chakra-ui/react';
import CategoryMenu from '../../../components/Dashboard/Menu/CategoryMenu.js';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Icon } from '@chakra-ui/icons';
import { POST } from '../../../utilities/ApiProvider';

export default function Menu() {
  const toast = useToast();
  const [fields, setFields] = useState({
    menu_name: '',
    description: '',
    categories: [{ parent: '', child: [] }],
    pictures: '',
  });
  const [user, setUser] = useState('');

  const submitData = async () => {
    const find = document.getElementById('data');

    const formData = new FormData(find);
    formData.append('menu_name', fields.menu_name);
    formData.append('description', fields.description);
    formData.append('categories', JSON.stringify(fields.categories));

    try {
      const res = await POST('admin/menu', formData, {
        authorization: `bearer ${user?.verificationToken}`,
      });
      console.log(res);
      if (res.message == "success") {
        toast({
          position: 'bottom-left',
          isClosable: true,
          duration: 5000,
          description: 'Success',
          status: 'success',
        });
        onclose();
      } else {
        toast({
          position: 'bottom-left',
          isClosable: true,
          duration: 5000,
          description: res?.message,
          status: 'error',
        });
      }
    } catch (error) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        duration: 5000,
        status: 'error',
        description: error,
      });
    }
  };

  const getMenuData = res => {
    setFields({
      ...fields,
      categories: [{ parent: res, child: [] }],
    });
  };

  // let tempArr = [];

  const getSubCatId = res => {
    setFields({
      ...fields,
      categories: [
        {
          parents: fields.categories[0]['parent'],
          child: res,
        },
      ],
    });
  };

  console.log(fields);

  const selector = useSelector(state => state);

  useEffect(() => {
    setUser(selector?.value);
  }, [selector]);

  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'8'}>
          {/* First Div Starts */}
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={'4'}>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Enter your menu details
              </CustomHeading>
            </Box>
            <Box>
              <BorderButton Url={'./'} Btnctn={'Continue'} />
            </Box>
          </Stack>
          {/* First Div Ends */}

          {/* Second Div Starts */}
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            verticalAlign={'top'}
          >
            <Box w={'60%'} alignItems={'center'} gap={'4'}>
              <Stack w={'100%'}>
                <Box>
                  <Input
                    w={'100%'}
                    py={'6'}
                    placeholder={'Menu Name'}
                    type={'Text'}
                    fontSize={'14px'}
                    border={'1px solid #fff !important'}
                    borderRadius={'10px'}
                    onChange={e => {
                      setFields({ ...fields, menu_name: e.target.value });
                    }}
                    fontWeight={500}
                    color={'#fff !important'}
                    _focus={{
                      border: '2px solid #fff !important',
                      borderColor: '#fff !important',
                      outline: '0px !impoartant',
                    }}
                    _placeholder={{ color: '#fff' }}
                  />
                  <Textarea
                    mt={'15px'}
                    py={'4'}
                    color={'#fff'}
                    borderRadius={'10px'}
                    height={'100px'}
                    placeholder={'Description'}
                    onChange={e => {
                      setFields({ ...fields, description: e.target.value });
                    }}
                    fontSize={'14px'}
                    border={'1px solid #fff !important'}
                    fontWeight={500}
                    borderColor={'primaryBlue.100'}
                    resize={'none'}
                    _focus={{
                      borderColor: 'primaryOrange.100',
                      outline: 'none',
                    }}
                    _placeholder={{ color: '#fff' }}
                  ></Textarea>
                  <form id="data">
                    <Input
                      color={'white'}
                      name=""
                      onChange={e => {
                        setFields({ ...fields, pictures: e.target.files[0] });
                      }}
                      borderColor="white"
                      border={'1px solid white'}
                      type="file"
                    />
                  </form>
                </Box>
              </Stack>
            </Box>
            <Button onClick={submitData}>sub</Button>

            <CategoryMenu getSubCatId={getSubCatId} getMenuData={getMenuData} />
          </Stack>
          {/* Second Div Ends */}
        </Stack>
      </MainDashboard>
    </>
  );
}
