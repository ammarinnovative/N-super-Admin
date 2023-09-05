import { Container, Image, Stack ,  Link,
  ListItem,
  useColorModeValue,
  UnorderedList,
 
} from '@chakra-ui/react';
import logo from '../../../assets/images/logo/logo2.png';
import { Link as ReactLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../../utilities/navigationLinks.js'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaWhatsapp } from 'react-icons/fa';
import AppStore from '../../../assets/images/shorts/appstore.png';
import PlayStore from '../../../assets/images/shorts/playstore.png';
import { Icon } from '@chakra-ui/icons';
import CustomPara from '../Paragraph/CustomPara';


export default function Index() {
  const linkColor = useColorModeValue('white', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  return (
    <>
      <Stack id='Footer' bg={'#000'} pt={'20'} pb={'7'}>
        <Container maxW={'6xl'} p={{ base: '15px !important', '2xl': 0 }}>
          <Stack textAlign={'center'}>
            <Image src={logo} w={'120px'} m={'auto'} mb={'10'}  />
            <UnorderedList mb={'10 !important'} listStyleType={'none'} gap={'6'} display={'flex'} justifyContent={'center'}>
            {NAV_ITEMS?.map((navItem) => (
              <ListItem>  
                 <Link
                  p={{ base: 1 }}
                  py={{ base: 5 }}
                  as={ReactLink}
                  to={navItem.href ?? '#'}
                  fontSize={{ base: '13px', xl: '17px' }}
                  fontWeight={500}
                  color={linkColor}
                  transition={'0.3s ease-in-out'}
                  position={'relative'}
                  fontFamily= {'Nunito Sans'}
                  _hover={{
                    color: 'primaryHeading.100',
                    _before: {
                      transform: 'scaleX(1)',
                      transformOrigin: 'bottom left',
                    }
                  }}
                  _before={{
                    content: `""`,
                    position: 'absolute',
                    w: '100%',
                    h: '3px',
                    transform: 'scaleX(0)',
                    bottom: '-2px',
                    left: '0px',
                    borderRadius: '25px',
                    backgroundColor: "primaryHeading.100",
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease-in-out'
                  }}>
                  {navItem.label}
                </Link>
                </ListItem>
                ))}
            </UnorderedList>
            <UnorderedList  mb={'10 !important'} listStyleType={'none'} gap={'6'} display={'flex'} justifyContent={'center'}>
              <ListItem><Icon color={'white'} fontSize={'23px'} as={FaFacebookF} /></ListItem>
              <ListItem><Icon color={'white'} fontSize={'23px'} as={FaTwitter} /></ListItem>
              <ListItem><Icon color={'white'} fontSize={'23px'} as={FaLinkedinIn} /></ListItem>
              <ListItem><Icon color={'white'} fontSize={'23px'} as={FaWhatsapp} /></ListItem>
            </UnorderedList>
            <Stack direction={'row'} justifyContent={'center'} marginBottom={'24 !important'}>
              <Link><Image src={PlayStore} /></Link>
              <Link><Image src={AppStore} /></Link>
              </Stack>
              <CustomPara textAlign={'center'}>Copyright © 2022. All Rights Reserved</CustomPara>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}

