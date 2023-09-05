import React from 'react';
import { useEffect } from 'react';
import InerBannner from '../../components/Website/Banners/InerBannner';
import Testimonail from '../../components/Website/Testimonail/Testimonail';

export default function Reviews() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])

  return (
    <>
      <InerBannner simpleHeading={'Reviews'} />
      <Testimonail />
    </>
  );
}
