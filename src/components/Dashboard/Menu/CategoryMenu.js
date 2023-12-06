import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { useToast } from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { GET, POST } from '../../../utilities/ApiProvider';

const signupstyle = {
  outline: '1px solid #fff',
  py: '25px',
  bg: '#271623b5',
  color: '#fff',
};

export default function OrderSalesCharts({ fields, setDatas, datas, getSubCatId, token, setFields, }) {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [checkId, setCheckId] = useState(null);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [selectedTertiaryOption, setSelectedTertiaryOption] = useState({});
  const [selectedTertiaryCheckbox, setSelectedTertiaryCheckbox] = useState(null);
  const [id, setID] = useState(null);
  console.log("data", data)
  const [cat, setCat] = useState({
    name: '',
    description: '',
    category_image: '',
    parent: '',
  });
  console.log("checkId", checkId);
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const getData = async () => {
    const res = await GET('admin/category');
    setData(res?.data);
    console.log("res", res);
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

  const parentData = e => {
    setCat({
      ...cat,
      parent: e,
    });
    console.log(e);
  };


  // INHERITED CHILD STATE


  // USE this state for youtfuther process this inherited has the data from parents and freedom to add new entites.
  // can you carry on from here?
  const [inheritedData, setInheritedData] = useState({});

  useEffect(() => {
    setInheritedData(fields);
  }, [fields])


  const submitCat = async () => {
    const formdata = new FormData();

    formdata.append('name', cat.name);
    formdata.append('description', cat.description);
    formdata.append('category_image', cat.category_image);
    formdata.append('parent', cat.parent);

    try {
      const res = await POST('admin/category', formdata, {
        authorization: `bearer ${token}`,
      });
      console.log(res);
      if (res.status == 'success') {
        toast({
          position: 'bottom-left',
          isClosable: true,
          description: 'Success',
          duration: 5000,
          status: 'success',
        });
        setCat({
          name: '',
          description: '',
          parent: '',
          category_image: '',
        });
        onAddCategoryClose();
      } else {
        toast({
          position: 'bottom-left',
          isClosable: true,
          description: 'Something went wrong',
          duration: 5000,
          status: 'error',
        });
      }
    } catch (error) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        description: 'Something went wrong',
        duration: 5000,
        status: error,
      });
    }
  };


  const handleParentCategoryClick = (parentCategory) => {
    const selectedId = parentCategory;

    // Update the fields state if the category is selected
    if (selectedId !== datas.parent) {
      setDatas((prevState) => ({
        ...prevState,
        parent: selectedId,
      }));
    } else {

      setDatas((prevState) => ({
        ...prevState,
        parent: null,
      }));
    }
  };


  const myCheck = (id) => {
    if (id !== datas.subcategory) {
      setDatas((pre) => (
        { ...pre, subcategory: id }
      ))
    } else {
      setDatas((pre) => (
        { ...pre, subcategory: null }
      ))
    }
  }


  const tertiaryCheck = (id) => {
    if (id !== datas.tertiary) {
      setDatas((pre) => (
        { ...pre, tertiary: id }
      ))
    } else {
      setDatas((pre) => (
        { ...pre, tertiary: null }
      ))
    }
  }

  const submitNewCat = async () => {
    let form = document.getElementById('newSubCatForm');
    let data = new FormData(form);
    try {
      const res = await POST('admin/category', data, {
        authorization: `bearer ${token}`,
      });
      console.log(res);
      if (res.status == 'success') {
        toast({
          position: 'bottom-left',
          isClosable: true,
          description: 'Success',
          duration: 5000,
          status: 'success',
        });
        onAddSubCategoryClose();
      } else {
        toast({
          position: 'bottom-left',
          isClosable: true,
          description: 'Something went wrong',
          duration: 5000,
          status: 'error',
        });
      }
    } catch (error) {
      toast({
        position: 'bottom-left',
        isClosable: true,
        description: error.message,
        duration: 5000,
        status: error,
      });
    }
  }


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
                  onChange={e => {
                    setCat({ ...cat, category_image: e.target.files[0] });
                  }}
                  cursor={'pointer'}
                  color={'white'}
                  value={cat.category_image}
                  py={'34px'}
                  type={'file'}
                  name={'file'}
                />
              </Box>
              <Input
                sx={signupstyle}
                placeholder={'Title'}
                value={cat.name}
                onChange={e => {
                  setCat({ ...cat, name: e.target.value });
                }}
                type="text"
                _placeholder={{ color: '#fff' }}
              />
              <Textarea
                onChange={e => {
                  setCat({ ...cat, description: e.target.value });
                }}
                color={'white'}
                value={cat.description}
                placeholder="Description"
              ></Textarea>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Stack direction={'row'} w={'full'} justifyContent={'center'}>
              <Button
                onClick={submitCat}
                bg={'pHeading.100'}
                color={'#fff'}
                px={'14'}
              >
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
            <form id="newSubCatForm">
              <Stack gap={'4'}>
                <Input
                  sx={signupstyle}
                  placeholder={'name'}
                  type="Name"
                  name='name'
                  _placeholder={{ color: '#fff' }}
                />
                <Input
                  sx={signupstyle}
                  placeholder={'description'}
                  name='description'
                  type="Name"
                  _placeholder={{ color: '#fff' }}
                />
                <FormLabel color={'white'}>Upload picture</FormLabel>
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
                    name={'category_image'}
                  />
                </Box>
                <FormLabel color={'white'}>Select Parent Category <sub>(optional)</sub></FormLabel>
                <Select
                  name='parent'
                >
                  <option style={{ display: 'none' }}></option>
                  {
                    data?.length > 0 &&
                    data?.map(val =>
                      <option key={val?._id} value={val?._id}>{val?.name}</option>
                    )
                  }
                </Select>
              </Stack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Stack direction={'row'} w={'full'} justifyContent={'center'}>
              <Button onClick={() => submitNewCat()} bg={'pHeading.100'} color={'#fff'} px={'14'}>
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
          <Box w={'100%'}>
            <Text color={'#fff'} fontSize={'24px'}>
              Choose Category
            </Text>
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
              onClick={() => { onAddCategoryOpen() }}
              mb={'20px'}
            >
              Add New Category
            </Button> */}
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
              onClick={() => { onAddSubCategoryOpen() }}
            >
              Add New Sub Category
            </Button>
          </Box>
        </Stack>
        {data?.length > 0 ? (
          data?.length > 0 &&
          data?.map(item => {
            return (
              <Stack
                border={item._id == id ? 'solid 1px pink' : 'solid 1px #fff'}
                p={'20px 10px'}
                cursor={'pointer'}
                mt={'18px'}
                // display={item._id == id?"block":"none"}
                borderRadius={'10px'}
                onClick={() => {
                  setID(item._id);
                  handleParentCategoryClick(item._id);
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
                      lineHeight={'inherit'}
                      border={'1px solid #fff'}
                      borderRadius={'6px'}
                      color={'#fff'}
                      disabled={item._id !== id}
                      ml={'4px'}
                      onClick={() => {
                        setOverlay(<OverlayOne />);
                        onAddCategoryOpen();
                        parentData(item._id);
                      }}
                      _hover={{
                        color: 'primaryText.200',
                      }}
                    >
                      Add
                    </Button>
                    <Button
                      bg={'transparent'}
                      textAlign={'center'}
                      margin={'auto'}
                      py={'5px'}
                      px={'8'}
                      w={'10px'}
                      disabled={item._id !== id}
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
                      disabled={item._id !== id}
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
                  <CheckboxGroup onChange={e => { }}>
                    <Box>
                      {item?.subcategories?.length > 0 ? (
                        item?.subcategories?.map(primaryCategory => {
                          return (
                            <Box key={primaryCategory._id} lineHeight={'30px'}>
                              <Checkbox
                                onChange={() => {
                                  setSelectedCheckbox(selectedCheckbox === primaryCategory._id ? null : primaryCategory._id);
                                  setSelectedTertiaryOption(null);
                                  myCheck(primaryCategory._id);
                                }}
                                value={primaryCategory?._id}
                                color={'#fff'}
                                defaultChecked={selectedCheckbox === primaryCategory._id}
                                disabled={selectedCheckbox !== null && selectedCheckbox !== primaryCategory._id}
                                style={{ display: 'inline-block' }}
                              >
                                {primaryCategory?.name}
                              </Checkbox>
                              {/* Display tertiary data below the selected primary category */}
                              {selectedCheckbox === primaryCategory._id &&
                                primaryCategory.tertiary &&
                                primaryCategory.tertiary.map(tertiaryItem => {
                                  return (
                                    <Box key={tertiaryItem._id} lineHeight={'30px'} marginLeft={'20px'}>
                                      <Checkbox
                                        onChange={() => {
                                          setSelectedTertiaryOption(tertiaryItem._id);
                                          tertiaryCheck(tertiaryItem._id);
                                        }}
                                        value={tertiaryItem._id}
                                        color={'#fff'}
                                        defaultChecked={selectedTertiaryOption === tertiaryItem._id}
                                        disabled={selectedTertiaryOption !== null && selectedTertiaryOption !== tertiaryItem._id}
                                        style={{ display: 'inline-block' }}
                                      >
                                        {tertiaryItem?.name}
                                      </Checkbox>
                                    </Box>
                                  );
                                })}
                            </Box>
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
                    disabled={item._id !== id}
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
