import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';

export default function PrimaryBtn(props) {
  return (
    <Button
      width={props?.w ? props?.w : 'auto'}
      fontSize={props.fontSize ?? 'md'}
      m={props?.m ? props?.m : 'inherit'}
      px={{ md: props.px ?? '10', base: '5' }}
      fontWeight={600}
      color={'white'}
      bg={'#dc0b9b'}
      href={'#'}
      boxShadow={`0px 15px 15px -15px ${props?.shadow ?? 'transparent'}`}
      _hover={{
        bg: '#ffbb5c',
        boxShadow: 'none',
        transform: 'translateY(2px)',
      }}
      disabled={props?.disabled === undefined || props?.disabled ? false : true}
    >
      {props.value}
    </Button>
  );
}
