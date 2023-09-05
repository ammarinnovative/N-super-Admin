import { 
  Box, 
  Button, 
  Flex, 
  ListItem, 
  Stack, 
  UnorderedList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import MainDashboard from '../MainDashboard';
import { AiOutlineCheck } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import Planwarp from '../../../components/Dashboard/Plans/Planwarp';
import BorderButton from '../../../components/Website/Buttons/BorderButton';


const signupstyle = {
  outline: '1px solid #fff',
  py: '25px',
  bg: '#271623b5',
  color: '#fff',
};


export default function Index() {

  const OverlayOne = () => (
    <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen: isAddSubscriptionOpen, onOpen: onAddSubscriptionOpen, onClose: onAddSubscriptionClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />);


  return (
    <>
      {/* Add Category Modal Starts */}
      <Modal size={'3xl'} isCentered isOpen={isAddSubscriptionOpen} onClose={onAddSubscriptionClose}>
        {overlay}
        <ModalContent bg={'dashbg.100'}>
            <ModalHeader>
                <CustomPara marginBottom={'0'} fontSize={'20px'}>
                    Create New Subscription Plan
                </CustomPara>
            </ModalHeader>
            <ModalCloseButton color={'#fff'} />
            <ModalBody>
                <Stack gap={'4'}>
                    <Input
                        sx={signupstyle}
                        placeholder={'Category Name'}
                        type="Name"
                        _placeholder={{ color: '#fff' }}
                    />
                    <Input
                        sx={signupstyle}
                        placeholder={'Price'}
                        type="Name"
                        _placeholder={{ color: '#fff' }}
                    />
                </Stack>
            </ModalBody>
            <ModalHeader>
                <CustomPara marginBottom={'0'} fontSize={'20px'}>
                    Subscription Features
                </CustomPara>
            </ModalHeader>
            <ModalBody>
                <Stack gap={'4'}>
                    <Input
                        sx={signupstyle}
                        placeholder={'Feature 1'}
                        type="Name"
                        _placeholder={{ color: '#fff' }}
                    />
                    <Input
                        sx={signupstyle}
                        placeholder={'Feature 2'}
                        type="Name"
                        _placeholder={{ color: '#fff' }}
                    />
                </Stack>
            </ModalBody>
            <ModalFooter>
                <Stack direction={'row'} w={'full'} justifyContent={'center'}>
                    <Button bg={'pHeading.100'} color={'#fff'} px={'14'}>
                        Continue
                    </Button>
                    <Button onClick={onAddSubscriptionClose}>Discard</Button>
                </Stack>
            </ModalFooter>
        </ModalContent>
    </Modal>
    {/* Add Category Modal Ends */}
      <MainDashboard>
        <Stack p={'4'} gap={'8'}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box>
              <CustomHeading
                textAlign={'left'}
                fontSize={'30px'}
                color={'#fff'}
              >
                Current Plans
              </CustomHeading>
            </Box>
            <Box>
            {/* <Button
              bg={'transparent'}
              textAlign={'center'}
              margin={'auto'}
              py={'10px'}
              px={'8'}
              lineHeight={'inherit'}
              border={'1px solid #fff'}
              borderRadius={'6px'}
              color={'#fff'}
              _hover={{
                  color: 'primaryText.200',
              }}
              onClick={() => {
                  setOverlay(<OverlayOne />);
                  onAddSubscriptionOpen();
              }}
          >
              Create New Subscription
          </Button> */}
            </Box>

          </Stack>
          <Stack direction={'row'} gap={'6'}>
            <Planwarp />
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
