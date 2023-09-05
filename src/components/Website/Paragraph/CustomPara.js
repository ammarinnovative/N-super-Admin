import { Text } from '@chakra-ui/react'
import React from 'react'

export default function CustomPara({children,fontSize,color,marginBottom,textAlign,lineHeight,fontWeight}) {
  return (
    <Text
    fontSize={fontSize ?? '16px'}
    color={color ?? '#fff'}
    textAlign={textAlign ?? 'left'}
    lineHeight={lineHeight ?? '26px'}
    marginBottom={marginBottom ?? '10px'}
    fontWeight={fontWeight ?? '400'}
    >{children}</Text>
  )
}
