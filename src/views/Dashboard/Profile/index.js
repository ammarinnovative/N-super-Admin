import { Container, Img, Button, Stack, Box, UnorderedList, ListItem, Link, Input } from '@chakra-ui/react';
import { useState, React, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler.js';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import profileimg from '../../../assets/images/other/profile.png';
import { useEffect } from 'react';
import { Link as ReactLink } from 'react-router-dom';

import { CirclePicker, SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import CustomHeading from '../../../components/Website/Headings/CustomHeading.js';
import PrimaryBtn from '../../../components/Website/Buttons/PrimaryBtn.js';
import Startermenu from '../../../components/Dashboard/Headers/Startermenu.js';

export default function Index() {

  const profileImageRef = useRef(null);
  const [images, setImages] = useState({});
  const [theImage, setTheImage] = useState(null);

  const location = useLocation();

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);

  const defaultSrc = profileimg;
  

  const [blockPickerColor, setBlockPickerColor] = useState('');
  useEffect(() => {
    console.log(blockPickerColor);
  }, [blockPickerColor])
  
  const [displayColorPicker, setdisplayColorPicker] = useState(false);
  const handleClick = () => {
    setdisplayColorPicker(true);
  };
  const handleClose = () => {
    setdisplayColorPicker(false);
  };
  const handleChange = color => {
    this.setState({ color: color.rgb });
  };
  const popover = {
    position: 'absolute',
    zIndex: '2',
    bottom: '50px',
  };
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };




  const imageConverter = (file) => {
    setImages(file)
    setTheImage(URL.createObjectURL(new Blob(file)));
  }

  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundImage={Signupimg}
        py={'32'}
      >
        <Container maxW={'full'} px={'14'}>
          <Stack direction={'row'} gap={'8'}>
            <Stack w={'30%'}>
              <Startermenu/>
            </Stack>
            <Stack w={'70%'}>
              <Stack gap={'20'}>
                <Stack>
                  <Img margin={'auto'} w={'150px'} src={logo} />
                </Stack>

                <Stack>
                  <Img
                    cursor={'pointer'}
                   
                    w={'120px'}
                    h={'120px'}
                    objectFit={'cover'}
                    m={'auto'}
                    borderRadius={'50%'}
                    src={theImage ?? defaultSrc}
                    alt="preview"
                  />
                  <Input type={'file'} display={'none'} ref={profileImageRef}  onChange={(e)=>imageConverter(e.target.files)}  />
                  <Button
                    bg={'transparent'}
                    color={'#fff'}
                    _hover={{
                      bg: 'transparent',
                      color: 'primaryText.200',
                    }}
                    onClick={()=> profileImageRef?.current.click()}
                   
                    
                  >
                    Upload Avatar
                  </Button>
                </Stack>
                <Stack
                  direction={'row'}
                  alignItems={'flex-end'}
                  justifyContent={'space-between'}
                >
                  <Box>
                    <CustomHeading
                      color={'white'}
                      fontSize={'20px'}
                      textAlign={'left'}
                    >
                      Choose Your Color Preference
                    </CustomHeading>
                    <CirclePicker onChange={(color)=>setBlockPickerColor(color.hex)} width={'60%'} />
                  </Box>
                  <Box position={'relative'}>
                    <Button onClick={() => handleClick()}>
                      Custom Color Picker
                    </Button>
                    {displayColorPicker ? (
                      <div style={popover}>
                        <div style={cover} onClick={() => handleClose()} />
                        <SketchPicker
                          color={blockPickerColor}
                          onChange={color => {
                            setBlockPickerColor(color.hex);
                          }}
                        />
                      </div>
                    ) : null}
                  </Box>
                </Stack>
                <Stack>
                  <PrimaryBtn
                    px={'20'}
                    m={'auto'}
                    w={'fit-content'}
                    value={'Next'}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack w={'30%'}></Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
