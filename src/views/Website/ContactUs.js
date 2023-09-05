import React from 'react'
import { useEffect, useState } from 'react';
import InerBannner from '../../components/Website/Banners/InerBannner'
import Contact from '../../components/Website/Contact/Contact'

export default function ContactUs() {
  const [Fields, setFields] = useState({
    name: '',
    city: '',
    email: '',
    phone: '',
    message: '',
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])

  return (
    <>
    <InerBannner simpleHeading={'Contact Us'}/>
    <Contact/>
    </>
  )
}
