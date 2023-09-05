import { React } from 'react';
import {
  Container,
  Img,
  Stack,
  UnorderedList,
  ListItem,
  Link,
  Box,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { GET, POST } from '../../../utilities/ApiProvider.js';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import cat1 from '../../../assets/images/menu/c1.jpg';
import { useSelector } from 'react-redux';
import { baseUrl,imgUrl } from '../../../utilities/Config.js';
import Startermenu from '../../../components/Dashboard/Headers/Startermenu.js';

export default function ChooseCategory() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [menu, setmenu] = useState([]);
  const user = useSelector(state => state?.value);

  const getUserData = async () => {
    setIsLoading(true);
    let response = await GET(`${baseUrl}admin/category`, {
      authorization: `Bearer ${user?.verificationToken}`,
    });
    console.log(response.data);
    setmenu(response.data);
  
  };

  useEffect(() => {
    getUserData();
    HeadFootEnabler(location);
  }, [location]);

  const tblist = {
    color: '#fff',
  };

  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundImage={Signupimg}
        py={'32'}
      >
        <Container maxW={'full'} px={'14'}>
          <Stack direction={'row'} gap={'8'}>
            <Stack w={'350px'}>
              <Startermenu />
            </Stack>
            <Stack w={'70%'} gap={'8'}>
              <Stack>
                <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
                <CustomHeading color={'#fff'}>Add Your Menu</CustomHeading>
                <CustomPara textAlign={'center'}>
                  Select a menu category to get started
                </CustomPara>
              </Stack>
              <Stack gap={'8'}>
                {menu?.length > 0 &&
                  menu.map((v, i) => {
                    return (
                      <Stack key={i}>
                        <Box>
                          <CustomHeading
                            textAlign={'left'}
                            fontSize={'25px'}
                            color={'#fff'}
                          >
                            {v.description}
                          </CustomHeading>
                        </Box>
                        <Stack
                          direction={'row'}
                          gap={'4'}
                          flexWrap={'wrap'}
                          spacing={'0'}
                        >
                           {v.subcategories.map((v, i) => {
                          
                      return (

                          <Link as={ReactLink} state={v.items} to={'/dashboard/Menu/Choosesubcategory'} key={i} marginLeft={'0'}>
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
                              backgroundImage={`${imgUrl}${v.category_image}`}
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
                                fontSize={'20px'}
                                fontWeight={'500'}
                                color={'#fff'}
                              >
                                {v.name}
                              </CustomHeading>
                            </Box>
                          </Link>
                           );
                          })}
                        </Stack>
                      </Stack>
                    );
                  })}
              </Stack>
            </Stack>
            <Stack w={'350px'}></Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
