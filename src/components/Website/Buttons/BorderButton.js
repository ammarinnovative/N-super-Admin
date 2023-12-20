import { Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

export default function BorderButton({ Btnctn, Url, w, data }) {
  return (
    <>
      <Link
        as={ReactLink}
        textAlign={'center'}
        margin={'auto'}
        to={Url}
        py={'10px'}
        px={'4'}
        w={w ?? 'fit-content'}
        lineHeight={'inherit'}
        border={'1px solid #fff'}
        borderRadius={'6px'}
        color={'#fff'}
        display={'block'}
        state={data ?? null}
        textOverflow={'ellipsis'}
        overflow={'hidden'}
        whiteSpace={'nowrap'}
      >
        {Btnctn}
      </Link>
    </>
  );
}
