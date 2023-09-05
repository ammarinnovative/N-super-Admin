import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { GET } from '../../../utilities/ApiProvider';

const signupstyle = {
  outline: '1px solid #fff',
  py: '25px',
  bg: '#271623b5',
  color: '#fff',
};

export default function OrderSalesCharts({ getMenuData, getSubCatId }) {
  const [data, setData] = useState([]);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const getData = async () => {
    const res = await GET('admin/category');
    setData(res?.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const {
    isOpen: isAddCategoryOpen,
    onOpen: onAddCategoryOpen,
    onClose: onAddCategoryClose,
  } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isAddSubCategoryOpen,
    onOpen: onAddSubCategoryOpen,
    onClose: onAddSubCategoryClose,
  } = useDisclosure();

  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      {/* Add Category Modal Starts */}
      <Modal
        size={'3xl'}
        isCentered
        isOpen={isAddCategoryOpen}
        onClose={onAddCategoryClose}
      >
        {overlay}
        <ModalContent bg={'dashbg.100'}>
          <ModalHeader>
            <CustomPara marginBottom={'0'} fontSize={'20px'}>
              Create New Category
            </CustomPara>
          </ModalHeader>
          <ModalCloseButton color={'#fff'} />
          <ModalBody>
            <Stack gap={'4'}>
              <Box
                position={'relative'}
                overflow={'hidden'}
                w={'full'}
                border={'1px dashed #fff'}
                py={'8'}
                textAlign={'center'}
                borderRadius={'6'}
              >
                <Button>Upload a file</Button>
                <Input
                  position={'absolute'}
                  left={'0'}
                  right={'0'}
                  bottom={'0'}
                  top={'0'}
                  h={'100%'}
                  cursor={'pointer'}
                  color={'white'}
                  py={'34px'}
                  type={'file'}
                  name={'file'}
                />
              </Box>
              <Input
                sx={signupstyle}
                placeholder={'Title'}
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
              <Button onClick={onAddCategoryClose}>Discard</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Add Category Modal Ends */}

      {/* Edit Modal Starts */}
      <Modal size={'3xl'} isCentered isOpen={isEditOpen} onClose={onEditClose}>
        {overlay}
        <ModalContent bg={'dashbg.100'}>
          <ModalHeader>
            <CustomPara marginBottom={'0'} fontSize={'20px'}>
              Edit Spirits Category
            </CustomPara>
          </ModalHeader>
          <ModalCloseButton color={'#fff'} />
          <ModalBody>
            <Stack gap={'4'}>
              <Box
                position={'relative'}
                overflow={'hidden'}
                w={'full'}
                border={'1px dashed #fff'}
                py={'8'}
                textAlign={'center'}
                borderRadius={'6'}
              >
                <Button>Upload a file</Button>
                <Input
                  position={'absolute'}
                  left={'0'}
                  right={'0'}
                  bottom={'0'}
                  top={'0'}
                  h={'100%'}
                  cursor={'pointer'}
                  color={'white'}
                  py={'34px'}
                  type={'file'}
                  name={'file'}
                />
              </Box>
              <Input
                sx={signupstyle}
                placeholder={'Category Name'}
                type="Name"
                _placeholder={{ color: '#fff' }}
              />
              <Text color={'#fff'} fontSize={'20px'} lineHeight={'2px'}>
                Spirits Subcategories
              </Text>
              <Text color={'#fff'} fontSize={'12px'} lineHeight={'2px'}>
                You have 10 subcategories
              </Text>

              <Stack
                w={'100%'}
                direction={'row'}
                justifyContent={'space-between'}
                p={'10px 15px'}
                border={'solid 1px #fff'}
                borderRadius={'10px'}
              >
                <Box>
                  <Text color={'#fff'} fontSize={'14px'}>
                    Bourban
                  </Text>
                </Box>
                <Box>
                  <Link color={'#fff'} fontSize={'14px'} opacity={'0.5'}>
                    {' '}
                    <Icon as={AiFillEdit} /> Edit
                  </Link>
                  <Link
                    color={'#fff'}
                    fontSize={'14px'}
                    ml={'12px'}
                    pl={'8px'}
                    opacity={'0.5'}
                    borderLeft={'solid 1px #fff'}
                  >
                    {' '}
                    <Icon as={AiFillDelete} /> Remove
                  </Link>
                </Box>
              </Stack>

              <Stack
                w={'100%'}
                direction={'row'}
                justifyContent={'space-between'}
                p={'10px 15px'}
                border={'solid 1px #fff'}
                borderRadius={'10px'}
              >
                <Box>
                  <Text color={'#fff'} fontSize={'14px'}>
                    Bourban
                  </Text>
                </Box>
                <Box>
                  <Link color={'#fff'} fontSize={'14px'} opacity={'0.5'}>
                    {' '}
                    <Icon as={AiFillEdit} /> Edit
                  </Link>
                  <Link
                    color={'#fff'}
                    fontSize={'14px'}
                    ml={'12px'}
                    pl={'8px'}
                    opacity={'0.5'}
                    borderLeft={'solid 1px #fff'}
                  >
                    {' '}
                    <Icon as={AiFillDelete} /> Remove
                  </Link>
                </Box>
              </Stack>

              <Stack
                w={'100%'}
                direction={'row'}
                justifyContent={'space-between'}
                p={'10px 15px'}
                border={'solid 1px #fff'}
                borderRadius={'10px'}
              >
                <Box>
                  <Text color={'#fff'} fontSize={'14px'}>
                    Bourban
                  </Text>
                </Box>
                <Box>
                  <Link color={'#fff'} fontSize={'14px'} opacity={'0.5'}>
                    {' '}
                    <Icon as={AiFillEdit} /> Edit
                  </Link>
                  <Link
                    color={'#fff'}
                    fontSize={'14px'}
                    ml={'12px'}
                    pl={'8px'}
                    opacity={'0.5'}
                    borderLeft={'solid 1px #fff'}
                  >
                    {' '}
                    <Icon as={AiFillDelete} /> Remove
                  </Link>
                </Box>
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Stack direction={'row'} w={'full'} justifyContent={'center'}>
              <Button bg={'pHeading.100'} color={'#fff'} px={'14'}>
                Continue
              </Button>
              <Button onClick={onEditClose}>Discard</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Edit Modal Ends */}

      {/* Add New Subcategory Modal Starts */}
      <Modal
        size={'3xl'}
        isCentered
        isOpen={isAddSubCategoryOpen}
        onClose={onAddSubCategoryClose}
      >
        {overlay}
        <ModalContent bg={'dashbg.100'}>
          <ModalHeader>
            <CustomPara marginBottom={'0'} fontSize={'20px'}>
              Create New Subcategory
            </CustomPara>
          </ModalHeader>
          <ModalCloseButton color={'#fff'} />
          <ModalBody>
            <Stack gap={'4'}>
              <Box
                position={'relative'}
                overflow={'hidden'}
                w={'full'}
                border={'1px dashed #fff'}
                py={'8'}
                textAlign={'center'}
                borderRadius={'6'}
              >
                <Button>Upload a file</Button>
                <Input
                  position={'absolute'}
                  left={'0'}
                  right={'0'}
                  bottom={'0'}
                  top={'0'}
                  h={'100%'}
                  cursor={'pointer'}
                  color={'white'}
                  py={'34px'}
                  type={'file'}
                  name={'file'}
                />
              </Box>
              <Input
                sx={signupstyle}
                placeholder={'Subcategory Name'}
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
              <Button onClick={onAddSubCategoryClose}>Discard</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Add New Subcategory Modal Ends */}

      <Box w={'39%'} bgColor={'#212121'} p={'25px 25px'} borderRadius={'15px'}>
        <Stack w={'100%'} direction={'row'} justifyContent={'space-between'}>
          <Box>
            <Text color={'#fff'} fontSize={'24px'}>
              Choose Category
            </Text>
          </Box>
          <Box>
            <Button
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
                onAddCategoryOpen();
              }}
            >
              Add New Category
            </Button>
          </Box>
        </Stack>
        {data?.length > 0 ? (
          data?.length > 0 &&
          data?.map(item => {
            return (
              <Stack
                border={'solid 1px #fff'}
                p={'20px 10px'}
                cursor={'pointer'}
                mt={'18px'}
                borderRadius={'10px'}
                onClick={() => {
                  getMenuData(item._id);
                }}
              >
                <Stack
                  borderBottom={'solid 1px #fff'}
                  w={'100%'}
                  direction={'row'}
                  justifyContent={'space-between'}
                  pb={'20px'}
                >
                  <Box w={'49%'}>
                    <Text color={'#fff'} fontSize={'20px'}>
                      {item?.name}
                    </Text>
                  </Box>
                  <Box w={'49%'} textAlign={'right'}>
                    <Button
                      bg={'transparent'}
                      textAlign={'center'}
                      margin={'auto'}
                      py={'5px'}
                      px={'8'}
                      w={'10px'}
                      lineHeight={'inherit'}
                      border={'1px solid #fff'}
                      borderRadius={'6px'}
                      color={'#fff'}
                      _hover={{
                        color: 'primaryText.200',
                      }}
                      onClick={() => {
                        setOverlay(<OverlayOne />);
                        onEditOpen();
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      bg={'transparent'}
                      textAlign={'center'}
                      margin={'auto'}
                      py={'5px'}
                      px={'8'}
                      lineHeight={'inherit'}
                      border={'1px solid #fff'}
                      borderRadius={'6px'}
                      color={'#fff'}
                      ml={'4px'}
                      _hover={{
                        color: 'primaryText.200',
                      }}
                    >
                      Remove
                    </Button>
                    <Link ml={'10px'}>
                      <Icon
                        fontSize={'20px'}
                        color={'#fff'}
                        as={MdKeyboardArrowDown}
                      />
                    </Link>
                  </Box>
                </Stack>
                <Stack
                  w={'100%'}
                  direction={'row'}
                  justifyContent={'space-between'}
                  p={'0px 35px'}
                >
                  <CheckboxGroup onChange={(e)=>{getSubCatId(e)}} >
                    <Box lineHeight={'30px'}>
                      {item?.subcategories?.length > 0 ? (
                        item?.subcategories?.map(value => {
                          return (
                            <>
                              <Checkbox
                                value={value?._id}
                                color={'#fff'}
                              >
                                {value?.name}
                              </Checkbox>
                              <br />
                            </>
                          );
                        })
                      ) : (
                        <Text fontSize={'18px'} color={'white'}>
                          No Data Found
                        </Text>
                      )}
                    </Box>
                  </CheckboxGroup>
                </Stack>
                <Stack>
                  <Button
                    bg={'transparent'}
                    textAlign={'center'}
                    margin={'auto'}
                    py={'5px'}
                    px={'8'}
                    w={'100%'}
                    lineHeight={'inherit'}
                    border={'1px solid #fff'}
                    borderRadius={'6px'}
                    color={'#fff'}
                    _hover={{
                      color: 'primaryText.200',
                    }}
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      onAddSubCategoryOpen();
                    }}
                  >
                    Add New Subcategory
                  </Button>
                </Stack>
              </Stack>
            );
          })
        ) : (
          <Text color={'white'} fontSize={'20px'}>
            No Data Found
          </Text>
        )}
      </Box>
    </>
  );
}
