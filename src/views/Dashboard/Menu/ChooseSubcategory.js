import { useEffect, React } from 'react';
import { Box, Button, Container, FormControl, Img, Input, Stack, Link} from '@chakra-ui/react';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import { AiOutlineSearch } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import cat1 from '../../../assets/images/menu/c1.jpg';
import PrimaryBtn from '../../../components/Website/Buttons/PrimaryBtn';
import { useLocation } from "react-router-dom";

export default function ChooseSubcategory(props) {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  


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
        <Container maxW={'6xl'} px={'14'}>
          <Stack>
            <Stack>
              <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
              <CustomHeading color={'#fff'}>Add Your Menu</CustomHeading>
              <CustomPara textAlign={'center'}>
                Select a menu Sub category to get started
              </CustomPara>
            </Stack>
            <Stack>
              <Stack>
                <CustomHeading
                  mb={'0'}
                  textAlign={'left'}
                  fontSize={'25px'}
                  color={'#fff'}
                >
                  Bourbon
                </CustomHeading>
                <CustomPara color={'primaryText.200'}>Spirits</CustomPara>
              </Stack>
              <Stack gap={'6'}>
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
              <Stack direction={'row'} flexWrap={'wrap'} spacing={'0'} gap={'3'}>
              {state.map((v, i) => {
                          return (
              <Link key={i} marginLeft={'0'}>
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
                        fontSize={'20px'}
                        fontWeight={'500'}
                        color={'#fff'}
                      >
                        {v.menu_name}
                      </CustomHeading>
                    </Box>
                  </Link>
                 );
                })}
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
