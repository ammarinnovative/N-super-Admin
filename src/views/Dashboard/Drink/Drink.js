import { Table, Thead, Tbody, Tr, Th, Td, Image, Stack, Tooltip, Box, Text, Button, useDisclosure, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalOverlay, ModalFooter, FormLabel, Input, Select, useToast } from '@chakra-ui/react';
import MainDashboard from '../MainDashboard';
import { GET, PUT } from "../../../utilities/ApiProvider";
import { useEffect, useState } from 'react';
import { imgUrl } from "../../../utilities/Config";
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { useSelector } from 'react-redux';

const DrinkTable = () => {

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const toast = useToast();

  const defaultUser = useSelector(state => state.value);
  const { isOpen: isAddSubscriptionOpen, onOpen: onAddSubscriptionOpen, onClose: onAddSubscriptionClose } = useDisclosure()
  const [data, setData] = useState([]);
  const [overlay, setOverlay] = useState(<OverlayOne />);

  const getData = async () => {
    try {
      const res = await GET("admin/allDrinks", {});
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const [listOfCategories, setListOfCategories] = useState([]);

  const getCat = async () => {
    const res = await GET('admin/category');
    setListOfCategories(res?.data);
    console.log("res", res);
  };
  useEffect(() => {
    getData();
    getCat();
  }, []);

  const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  const [selectedCategories, setSelectedCategories] = useState({
    parent: '',
    subcategory: '',
    tertiary: ''
  })
  const [extractedSub, setExtractedSub] = useState([]);
  const [extractedTertiary, setExtractedTertiary] = useState([]);

  const [selectedData, setSelectedData] = useState({});

  const setValues = (data) => {
    console.log(data)
    setSelectedData(data);
    console.log(data?.category?._id)
    console.log(data?.subCategory?._id)
    console.log(data?.tertiaryCategory?._id)
    setSelectedCategories({
      parent: data?.category?._id,
      subcategory: data?.subCategory?._id,
      tertiary: data?.tertiaryCategory?._id,
    })
    onAddSubscriptionOpen();
  }

  const updateParent = (id) => {
    console.log(id)
    setSelectedData({
      ...selectedData,
      category: null,
      subcategory: null,
      tertiary: null,
    })
    setSelectedCategories({
      parent: id,
      subcategory: '',
      tertiary: ''
    });
    listOfCategories.map(val => {
      if (val?._id === id) setExtractedSub(val?.subcategories);
    });
    setExtractedTertiary([]);
  }
  const updateSub = (id) => {
    console.log(id)
    setSelectedData({
      ...selectedData,
      tertiary: null,
    })
    setSelectedCategories({
      ...selectedCategories,
      subcategory: id,
      tertiary: ''
    });
    listOfCategories.map(val => {
      val?.subcategories?.map(subVal => {
        console.log(subVal)
        if (subVal?._id === id) {
          console.log('matched val', subVal)
          setExtractedTertiary(subVal?.tertiary)
        }
      })
    })
  }

  const updateTertiary = (id) => {
    setSelectedCategories({
      ...selectedCategories,
      tertiary: id
    });
  }

  const [isImage, setIsImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const updateItem = async () => {
    setIsLoading(true)

    let data = new FormData();

    data.append('menu_name', selectedData?.menu_name);
    data.append('description', selectedData?.description);
    data.append('parent', selectedCategories?.parent);
    data.append('subcategory', selectedCategories?.subcategory);
    data.append('tertiary', selectedCategories?.tertiary);
    if (isImage !== null) {
      data.append('pictures', isImage)
    }

    console.log(data);

    let updateItemRes = await PUT(`admin/menu/${selectedData?._id}`, data, {
      authorization: `bearer ${defaultUser?.verificationToken}`
    });
    setIsLoading(false);
    if (updateItemRes?.message === 'success') {
      onAddSubscriptionClose();
      getData();
      toast({
        description: 'Update success',
        duration: 3000,
        position: 'bottom-left',
        isClosable: true,
        status: 'success'
      });
    }
  }

  return (
    <MainDashboard>
      <Stack overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Drink Name</Th>
              <Th>Description</Th>
              <Th>Category Name</Th>
              <Th>Subcategory Name</Th>
              <Th>Tertiary Category Name</Th>
              <Th>Drink Image</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((item) => (
                <Tr color="white" mb="10px" key={item.id}>
                  <Td>{item?.menu_name}</Td>
                  <Td>
                    <Tooltip label={item?.description} fontSize="md">
                      <Box maxW="200px" overflow="hidden" textOverflow="ellipsis">
                        <Text fontSize="sm">
                          {truncateText(item?.description ? item?.description : "----", 50)}
                        </Text>
                      </Box>
                    </Tooltip>
                  </Td>
                  <Td>{item?.category?.name ? item?.category?.name : "----"}</Td>
                  <Td>{item?.subCategory?.name ? item?.subCategory?.name : "----"}</Td>
                  <Td>{item?.tertiaryCategory?.name ? item?.tertiaryCategory?.name : "----"}</Td>
                  <Td>
                    {item?.pictures && item?.pictures.length > 0 ? (
                      <Image
                        width="80px"
                        height="80px"
                        borderRadius="50%"
                        src={imgUrl + item?.pictures[0]}
                        alt="Drink"
                      />
                    ) : (
                      "No Image"
                    )}
                  </Td>
                  <Td><Button
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      setValues(item);
                    }}
                    textAlign={'center'}
                    py={'10px'}
                    px={'4'}
                    lineHeight={'inherit'}
                    border={'1px solid #fff'}
                    borderRadius={'6px'}
                    color={'#fff'}
                    display={'block'}
                    background={'transparent'}
                  >Edit</Button></Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Stack>
      <Modal size={'3xl'} isCentered isOpen={isAddSubscriptionOpen} onClose={onAddSubscriptionClose}>
        {overlay}
        <ModalContent bg={'dashbg.100'} maxH="80vh">
          <ModalHeader>
            <CustomPara marginBottom={'0'} fontSize={'20px'}>
              Update Drink
            </CustomPara>
          </ModalHeader>
          <ModalCloseButton color={'#fff'} />
          <ModalBody color={'#fff'}>
            <FormLabel mt={'20px'}>Name:</FormLabel>
            <Input
              name='menu_name'
              value={selectedData?.menu_name}
              onChange={
                e => setSelectedData({
                  ...selectedData,
                  menu_name: e.target.value
                })}
            />
            <FormLabel mt={'20px'}>Description:</FormLabel>
            <Input
              name='description'
              value={selectedData?.description}
              onChange={
                e => setSelectedData({
                  ...selectedData,
                  description: e.target.value
                })}
            />
            <FormLabel mt={'20px'}>Parent Category:</FormLabel>
            <Select onChange={e => updateParent(e.target.value)}>
              <option style={{ display: 'none' }}>{selectedData?.category?.name}</option>
              {
                listOfCategories?.length > 0 &&
                listOfCategories?.map(val =>
                  <option key={val?._id} value={val?._id}>{val?.name}</option>
                )
              }
            </Select>
            <FormLabel mt={'20px'}>Sub Category:</FormLabel>
            <Select onChange={e => updateSub(e.target.value)}>
              <option style={{ display: 'none' }}>{selectedData?.subCategory?.name}</option>
              {
                extractedSub?.length > 0 &&
                extractedSub?.map(val =>
                  <option key={val?._id} value={val?._id}>{val?.name}</option>
                )
              }
            </Select>
            <FormLabel mt={'20px'}>Tertiary:</FormLabel>
            <Select onChange={e => updateTertiary(e.target.value)}>
              <option style={{ display: 'none' }}>{selectedData?.tertiaryCategory?.name}</option>
              {
                extractedTertiary?.length > 0 &&
                extractedTertiary?.map(val =>
                  <option key={val?._id} value={val?._id}>{val?.name}</option>
                )
              }
            </Select>
            <FormLabel mt={'20px'}>Upload Image <sub>(optional)</sub>:</FormLabel>
            <Input
              type='file'
              onChange={e => setIsImage(e.target.files[0])}
            />
          </ModalBody>
          <ModalFooter>
            <Stack direction={'row'} w={'full'} justifyContent={'center'}>
              <Button onClick={() => updateItem()} bg={'pHeading.100'} color={'#fff'} px={'14'}>
                Update
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </MainDashboard>
  );
};

export default DrinkTable;
