import { Stack } from '@chakra-ui/react';
import { useEffect, React } from 'react';
import { useLocation } from 'react-router';
import SideBar from '../../../components/Dashboard/Headers/SideBar';


export default function MainDashboard({ children, title }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.split('/')[1].toLowerCase() === 'dashboard') {
      document.getElementById('Footer').style.display = 'none';
      document.getElementById('Header').style.display = 'none';
    } else {
      document.getElementById('Footer').style.display = 'block';
      document.getElementById('Header').style.display = 'block';
    }
  }, [location.pathname]);

  return (
    <Stack
      direction={'row'}
      gap={{ base: '3', md: '12' }}
      overflow={{ base: 'hidden', md: 'initial' }}
    >
      <Stack w={'100%'}>
        <SideBar children={children} title={title} />
      </Stack>
     
    </Stack>
  );
}
