import React from 'react'
import { useEffect } from 'react'
import OurStory from '../../components/Website/About/OurStory'
import InerBannner from '../../components/Website/Banners/InerBannner'
import Testimonail from '../../components/Website/Testimonail/Testimonail'

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])

  return (
    <>
    <InerBannner simpleHeading={'About Us'} />
    <OurStory/>
    <Testimonail/>

    </>
  )
}
