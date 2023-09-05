import { Input } from '@chakra-ui/react'

export default function ContactFields({ type, placeholder, value, setFields, name }) {
    return (
        <Input
            w={placeholder !== 'Message' ? {base: '100%', md: '48.5%'} : '100%'}
            py={'6'}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setFields(e.target.value)}
            fontSize={'14px'}
            border={'none'}
            borderBottom={'2px solid #fff !important'}
            borderRadius={'0'}
            fontWeight={500}
            color={'#fff !important'}
            name={name}
            _focus={{
                border: '2px solid #fff !important',
                borderColor: '#fff !important',
                outline: '0px !impoartant',
               
            }}
            _placeholder={{ color: '#fff' }}
        />
    )
}
