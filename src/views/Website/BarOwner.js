import React from 'react'
import { useEffect } from 'react';
import HomeBanner from '../../components/Website/Banners/HomeBanner'
import Contact from '../../components/Website/Contact/Contact'
import HowitWork from '../../components/Website/HowWork/HowitWork';

export default function BarOwner() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, [])
  return (
    <>
    <HomeBanner MainHeading={'Meet The New Standard'} Mainpara={'Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  idunt ut labore et dolore magna aliqua.'}/>
    <HowitWork/>
    <Contact/>
    </>
  )
}
