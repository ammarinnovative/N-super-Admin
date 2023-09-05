import React from 'react'
import {
  Box,
  Stack,
} from '@chakra-ui/react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import Teammemberdetails from './Teammemberdetails'
import { POST, GET } from '../../../utilities/ApiProvider.js';
import { useEffect, useState } from 'react';

export default function TeamDetail() {

  let bar = localStorage.getItem('user');
  bar = JSON.parse(bar)

  const [members, setMembers] = useState([]);

  useEffect(() => {
    getTeamMembers()
  }, [])


  const getTeamMembers = async () => {
    var response = await GET(`/teammember/${bar.barInfo}`);
    setMembers(response.data)
  }

  useEffect(() => console.log(members), [members])
  return (

    <>
      {
        members?.length &&
        members?.map(m => (
          <Stack p={'4'} bg={'dashbg.100'}>
            <Box>
              <CustomHeading
                fontSize={'25px'}
                color={'#fff'}
                textAlign={'left'}
              >
                {m.name}
              </CustomHeading>
            </Box>
            <Stack h={'400px'} overflow={'scroll'} bg={'dashbg.100'} p={'4'}>

              {
                m.members.map((e) => {
                  return <Teammemberdetails members={e} />
                })
              }

            </Stack>
          </Stack>
        ))
      }
    </>
  )
}
