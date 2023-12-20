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
  Text,
  ModalOverlay,
  Input,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import MainDashboard from '../MainDashboard';
import { AiOutlineCheck } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import Planwarp from '../../../components/Dashboard/Plans/Planwarp';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { GET, PUT } from '../../../utilities/ApiProvider';


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
  const user = useSelector(state => state.value);
  const { isOpen: isAddSubscriptionOpen, onOpen: onAddSubscriptionOpen, onClose: onAddSubscriptionClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [updateId, setUpdateId] = useState(null);
  const [update, setUpdate] = useState({});
  const toast = useToast();
  const [editIndex, setEditIndex] = useState(null);


  const handleEdit = (index) => {
    setEditIndex(index);
    onAddSubscriptionOpen();
  };

  const getData = (data) => {
    setUpdateId(data._id);
    setUpdate(data);
    onAddSubscriptionOpen();
  }
  console.log("user", user);


  const updateData = async () => {
    if (!update.name || !update.price || !update.description.length > 0) {
      toast({
        position: "bottom-left",
        isClosable: true,
        duration: 5000,
        status: 'error',
        description: "please fill all the fields"
      });
      return;
    }
    const res = await PUT(`membership/${updateId}`, update, {
      authorization: `bearer ${user?.verificationToken}`
    });
    if (res.status == 200) {
      toast({
        position: "bottom-left",
        isClosable: true,
        duration: 5000,
        status: 'success',
        description: "Updated"
      });
      getUserData()
      onAddSubscriptionClose();
    } else {
      toast({
        position: "bottom-left",
        isClosable: true,
        duration: 5000,
        status: 'error',
        description: res.message
      });

    }
  }
  const [isLoading, setIsLoading] = useState(false);
  const [packages, setpackages] = useState([]);
  const getUserData = async () => {

    setIsLoading(true);
    let response = await GET(`membership/?limit=10&page=1`, {
      authorization: `Bearer ${user?.verificationToken}`,
    });
    console.log("da", response);
    setpackages(response.data);
  };
  useEffect(() => {
    if (user) getUserData();
  }, [user]);
  return (
    <>
      {/* Add Category Modal Starts */}
      <Modal size={'3xl'} isCentered isOpen={isAddSubscriptionOpen} onClose={onAddSubscriptionClose}>
        {overlay}
        <ModalContent bg={'dashbg.100'} maxH="80vh">
          <ModalHeader>
            <CustomPara marginBottom={'0'} fontSize={'20px'}>
              Update Subscription Plan
            </CustomPara>
          </ModalHeader>
          <ModalCloseButton color={'#fff'} />
          <ModalBody>
            <Stack gap={'4'} mb={'30px !important'}>
              <Input
                sx={signupstyle}
                placeholder={'Subscription Name'}
                type="text"
                onChange={(e) => { setUpdate({ ...update, name: e.target.value }) }}
                value={update.name}
                _placeholder={{ color: '#fff' }}
              />
              <Input
                sx={signupstyle}
                placeholder={'Price'}
                type="text"
                onChange={(e) => { setUpdate({ ...update, price: e.target.value }) }}
                value={update.price}
                _placeholder={{ color: '#fff' }}
              />
            </Stack>
            <Stack gap={'4'}>
              {update?.description && update?.description?.length > 0 && update?.description?.map((item, index) => {
                return (
                  <Flex key={index} alignItems="center">
                    <Box color={"white"} border={"1px solid gray"} padding={"5px 10px"} flex="1">
                      {editIndex === index ? (
                        <Input
                          sx={signupstyle}
                          placeholder={'Edit Description'}
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const updatedDescription = [...update.description];
                            updatedDescription[index] = e.target.value;
                            setUpdate({ ...update, description: updatedDescription });
                          }}
                          _placeholder={{ color: '#fff' }}
                        />
                      ) : (
                        item
                      )}
                    </Box>
                    <Button
                      bg={'pHeading.100'}
                      color={"white"}
                      width={"100px"}
                      onClick={() => {
                        if (editIndex === index) {
                          setEditIndex(null); // If already in edit mode, disable edit mode
                        } else {
                          setEditIndex(index); // Enable edit mode for this index
                        }
                      }}
                    >
                      {editIndex === index ? "Save" : "Edit"}
                    </Button>
                  </Flex>
                );
              })}
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Stack direction={'row'} w={'full'} justifyContent={'center'}>
              <Button bg={'pHeading.100'} onClick={updateData} color={'#fff'} px={'14'}>
                Update Plan
              </Button>
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
            <Planwarp getData={getData} packages={packages} />
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}











// <Modal size={'3xl'} isCentered isOpen={isAddSubscriptionOpen} onClose={onAddSubscriptionClose}>
//         {overlay}
//         <ModalContent bg={'dashbg.100'}>
//             <ModalHeader>
//                 <CustomPara marginBottom={'0'} fontSize={'20px'}>
//                     Create New Subscription Plan
//                 </CustomPara>
//             </ModalHeader>
//             <ModalCloseButton color={'#fff'} />
//             <ModalBody>
//                 <Stack gap={'4'}>
//                     <Input
//                         sx={signupstyle}
//                         placeholder={'Category Name'}
//                         type="Name"
//                         _placeholder={{ color: '#fff' }}
//                     />
//                     <Input
//                         sx={signupstyle}
//                         placeholder={'Price'}
//                         type="Name"
//                         _placeholder={{ color: '#fff' }}
//                     />
//                 </Stack>
//             </ModalBody>
//             <ModalHeader>
//                 <CustomPara marginBottom={'0'} fontSize={'20px'}>
//                     Subscription Features
//                 </CustomPara>
//             </ModalHeader>
//             <ModalBody>
//                 <Stack gap={'4'}>
//                     <Input
//                         sx={signupstyle}
//                         placeholder={'Feature 1'}
//                         type="Name"
//                         _placeholder={{ color: '#fff' }}
//                     />
//                     <Input
//                         sx={signupstyle}
//                         placeholder={'Feature 2'}
//                         type="Name"
//                         _placeholder={{ color: '#fff' }}
//                     />
//                 </Stack>
//             </ModalBody>
//             <ModalFooter>
//                 <Stack direction={'row'} w={'full'} justifyContent={'center'}>
//                     <Button bg={'pHeading.100'} color={'#fff'} px={'14'}>
//                         Continue
//                     </Button>
//                     <Button onClick={onAddSubscriptionClose}>Discard</Button>
//                 </Stack>
//             </ModalFooter>
//         </ModalContent>
//     </Modal>