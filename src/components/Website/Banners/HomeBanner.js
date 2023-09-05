import { Box, Container, Grid, GridItem, Heading, Image, Stack, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom';
import Homebanner from '../../../assets/images/Banner/homebanner.jpg'
import { BiPlay } from 'react-icons/bi'
import { Icon } from '@chakra-ui/icons';

export default function HomeBanner({MainHeading,Mainpara}) {
   
    return (
        <div>
            <Stack

                backgroundImage={Homebanner}
                height={'100vh'}
                bgSize={'cover'}
                bgRepeat={'no-repeat'}
                bgAttachment={{ base: 'inherit', md: 'fixed' }}
                py={{ base: '6', md: '24', xl: '14', '2xl': '24' }}
                position={'relative'}
                justifyContent={'center'}
                
            >
                <Container maxW={'8xl'} p={{ base: '15px !important', "2xl": 0 }}>

                    <Grid templateColumns='repeat(12, 1fr)' gap={2} alignItems={'center'}>
                        <GridItem colSpan={{ base: 12, md: 6 }} >
                            <Stack textAlign={{ base: 'center', md: 'left' }}
                            >
                                <Heading
                                    lineHeight={1.1}
                                    fontStyle={'bold'}
                                    textTransform={'uppercase'}
                                    fontSize={{ base: '32px', md: '50px', xl: '45px', '2xl': '54px' }}
                                    pb={{ base: '60px', lg: 0 }}
                                    color={'white'}
                                    fontFamily={'Nunito Sans'}
                                >
                                    {MainHeading}
                                  
                                </Heading>

                                <Text pr={'20%'} fontSize={{ base: '14px', md: '14px', lg: '18px' }} fontWeight={'500'} color={'white'} lineHeight={{ md: '30px', base: '23px' }}>
                                    {Mainpara}
                                </Text>

                            </Stack>
                        </GridItem>
                        <GridItem colSpan={{ base: 12, md: 6 }} >

                        <Box textAlign={'center'}>
                                    <Link 
                                    border={'2px solid #dc0b9b'}
                                    w={'120px'} h={'120px'}
                                    display={'flex'}
                                    alignItems={'center'}
                                    borderRadius={'50%'}
                                    justifyContent={'center'}
                                    m={'auto'}
                                    as={ReactLink} to={'/register'}>
                                        <Icon color={'white'} fontSize={'50px'} as={BiPlay} />
                                    </Link>
                                </Box>

                        </GridItem>

                    </Grid>

                </Container>

            </Stack>
        </div>
    )
}
