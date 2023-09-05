import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  FormControl,
  FormLabel,
  Img,
  Input,
  Stack,
  Switch,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import logo from '../../../assets/images/Banner/signlogo.png';
import menuimg from '../../../assets/images/menu/menu1.jpg';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';

export default function Addfirstmenu() {
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
          <Stack>
            <Stack>
              <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
              <CustomHeading color={'#fff'}>Add Your Prices</CustomHeading>
              <CustomPara textAlign={'center'}>Enter your details</CustomPara>
            </Stack>
            <Stack>
              <Accordion allowMultiple>
                <AccordionItem
                  bgColor={'dashbg.100'}
                  marginBottom={{ base: '5px', md: '15px' }}
                >
                  {({ isExpanded }) => (
                    <Stack
                      className="chu"
                      border={
                        isExpanded ? '2px solid #f79e22' : '2px solid #e1e1e1'
                      }
                    >
                      <h2>
                        <AccordionButton
                          fontSize={'16px'}
                          fontWeight={'600'}
                          color={'primaryText.300'}
                          padding={'15px 15px'}
                          _hover={{
                            bgColor: '#fff',
                          }}
                        >
                          <Box flex="1" textAlign="left">
                            <Text fontSize={{ base: '12px', md: '13px' }}>
                              Spirits
                            </Text>
                            <Text fontSize={{ base: '12px', md: '16px' }}>
                              Bourbon
                            </Text>
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        color={'primaryText.200'}
                        fontSize={'14px'}
                      >
                        <Stack gap={'6'}>
                          <Stack>
                            <FormControl position={'relative'}>
                              <FormLabel>Autofill price per 1.5oz</FormLabel>
                              <Input
                                size="lg"
                                color={'#fff'}
                                outline={'1px solid #fff'}
                                type="email"
                              />
                              <Switch
                                right={'10px'}
                                bottom={'15px'}
                                margin={'auto'}
                                position={'absolute'}
                                size="md"
                                colorScheme="green"
                              />
                            </FormControl>
                          </Stack>
                          <Stack direction={'row'} flexWrap={'wrap'} gap={'3'}>
                            <Stack
                              bg={'#2c2a2a'}
                              boxShadow="base"
                              p="6"
                              rounded="md"
                            >
                              <Stack>
                                <Img
                                  height={'150px'}
                                  borderRadius={'6'}
                                  src={menuimg}
                                />
                                <CustomPara marginBottom={'0'}>
                                  Knob Creek
                                </CustomPara>
                              </Stack>
                              <Stack gap={'2'}>
                                <FormControl>
                                  <FormLabel>1.50z</FormLabel>
                                  <Input
                                    outline={'1px solid #fff'}
                                    type="email"
                                  />
                                </FormControl>
                                <FormControl>
                                  <FormLabel>Shot</FormLabel>
                                  <Input
                                    outline={'1px solid #fff'}
                                    type="email"
                                  />
                                </FormControl>
                                <FormControl>
                                  <FormLabel>Neat/Rocks</FormLabel>
                                  <Input
                                    outline={'1px solid #fff'}
                                    type="email"
                                  />
                                </FormControl>
                              </Stack>
                            </Stack>

                            <Stack
                              bg={'#2c2a2a'}
                              boxShadow="base"
                              p="6"
                              rounded="md"
                            >
                              <Stack
                                
                                height={'140px'}
                                borderRadius={'6'}
                                border={'1px dashed #fff'}
                                display={'flex'}
                                alignItems={'center'}
                                textAlign={'center'}
                                justifyContent={'center'}
                              >
                                <Link as={ReactLink} to={'/'}>
                                  <Icon
                                    fontSize={'40px'}
                                    color={'#fff'}
                                    as={AiOutlinePlusCircle}
                                  />
                                </Link>
                              </Stack>
                              <Stack gap={'2'}>
                                <FormControl>
                                  <FormLabel>1.50z</FormLabel>
                                  <Input
                                    outline={'1px solid #fff'}
                                    type="email"
                                  />
                                </FormControl>
                                <FormControl>
                                  <FormLabel>Shot</FormLabel>
                                  <Input
                                    outline={'1px solid #fff'}
                                    type="email"
                                  />
                                </FormControl>
                                <FormControl>
                                  <FormLabel>Neat/Rocks</FormLabel>
                                  <Input
                                    outline={'1px solid #fff'}
                                    type="email"
                                  />
                                </FormControl>
                              </Stack>
                            </Stack>
                          </Stack>
                        </Stack>
                      </AccordionPanel>
                    </Stack>
                  )}
                </AccordionItem>
              </Accordion>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
