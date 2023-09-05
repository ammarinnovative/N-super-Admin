import { Stack, Text } from '@chakra-ui/react';
import HomeBanner from '../../components/Website/Banners/HomeBanner';
import About from '../../components/Website/About';
import AppCta from '../../components/Website/Appcta/AppCta';
import Subscribe from '../../components/Website/Subscribe/Subscribe';
import Contact from '../../components/Website/Contact/Contact';
import Featured from '../../components/Website/Featured/Featured';
import Testimonail from '../../components/Website/Testimonail/Testimonail';
import { useEffect } from 'react';
export default function Home() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])

  return (
    <Stack>
      <HomeBanner MainHeading={"Allow Guests to View Your Menu & Pay from Their Phone"} Mainpara={'Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  idunt ut labore et dolore magna aliqua.'} />
      <About/>
      <AppCta/>
      <Subscribe/>
      <Contact/>
      <Featured/>
      <Testimonail/>
    </Stack>
  );
}
