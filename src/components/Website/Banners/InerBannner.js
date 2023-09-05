import { Box, Container, Grid, GridItem, Heading, Image, Stack, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom';
import Homebanner from '../../../assets/images/Banner/homebanner.jpg'
import { BiPlay } from 'react-icons/bi'
import { Icon } from '@chakra-ui/icons';
import CustomPara from '../Paragraph/CustomPara';

export default function InerBannner({simpleHeading}) {
  return (
    <>
      <Stack
        backgroundImage={Homebanner}
        height={'60vh'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={{ base: 'inherit', md: 'fixed' }}
        py={{ base: '6', md: '24', xl: '14', '2xl': '24' }}
        position={'relative'}
        justifyContent={'center'}
      >
        <Container maxW={'8xl'} p={{ base: '15px !important', '2xl': 0 }}>
          <Grid templateColumns="repeat(12, 1fr)" gap={2} alignItems={'center'}>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <Stack textAlign={{ base: 'center', md: 'left' }}>
                <Heading
                  lineHeight={1.1}
                  fontStyle={'bold'}
                  textTransform={'uppercase'}
                  pt={'14'}
                  fontSize={{
                    base: '32px',
                    md: '50px',
                    xl: '45px',
                    '2xl': '54px',
                  }}
               
                  color={'white'}
                  fontFamily={'Nunito Sans'}
                >
                  {simpleHeading}
                </Heading>
                <CustomPara color={'primaryText.100'}>{`Home / ${simpleHeading}`}</CustomPara>

            
              </Stack>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
          
            </GridItem>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}
