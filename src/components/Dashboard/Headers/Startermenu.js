import { Link, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../../Website/Headings/CustomHeading';
import { Link as ReactLink } from 'react-router-dom';

export default function Startermenu() {

    const tblist = 
    {
      color : '#fff',
    }

  return (
    <>
      <Stack>
        <CustomHeading color={'white'} textAlign={'left'} fontSize={'25px'}>
          Complete the following steps
        </CustomHeading>
        <UnorderedList  listStyleType={'none'} spacing={'3'}>
          <ListItem>
            <Link sx={tblist} as={ReactLink} to={'/dashboard/profile'}>
              Customize Your Profile
            </Link>
          </ListItem>
          <ListItem>
            <Link sx={tblist} as={ReactLink} to={'/dashboard/profile/barinformation'}>
              Add Your Bar’s Information
            </Link>
          </ListItem>
          <ListItem>
            <Link sx={tblist} as={ReactLink} to={'/'}>
              Add Your Menu
            </Link>
          </ListItem>
          <ListItem>
            <Link sx={tblist} as={ReactLink} to={'/'}>
              Add Your Events
            </Link>
          </ListItem>
        </UnorderedList>
      </Stack>
    </>
  );
}
