import { Heading } from '@chakra-ui/react';
import React from 'react';

export default function CustomHeading({ children, fontSize, fontFamily, textAlign, color, fontWeight,mb }) {
  return (
    <Heading
      fontSize={fontSize ?? '45px'}
      fontWeight={fontWeight ?? '500'}
      textAlign={textAlign ?? 'center'}
      mb={mb ?? '10px'}
      color={color ?? 'pHeading.100'}
      fontFamily={fontFamily ?? 'Nunito Sans'} 
    >
      {children}
    </Heading>
  );
}
