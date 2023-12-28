import { Table, Thead, Tbody, Tr, Th, Td, Image, Stack, Tooltip, Box, Text, Button, useDisclosure, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalOverlay, ModalFooter, FormLabel, Input, Select, useToast, Spinner } from '@chakra-ui/react';
import MainDashboard from '../MainDashboard';
import { GET, POST, PUT } from "../../../utilities/ApiProvider";
import { useEffect, useState } from 'react';
import { imgUrl, imgUrlNew } from "../../../utilities/Config";
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

const Payments = () => {

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const [PageCount, setPageCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  }

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
  const [loadingDrinks, setLoadingDrinks] = useState(false);

  const getData = async (currentPage) => {
    setLoadingDrinks(true);
    try {
      const res = await GET(`admin/bar/payments`, {
        authorization: `bearer ${defaultUser?.verificationToken}`
      });
      console.log(res)
      setData(res.data);
      // setPageCount(Math.ceil(res.paginate.totalRecords / 20))
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    setLoadingDrinks(false);
  };
  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

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

  const [removeLoading, setRemoveLoading] = useState(false);
  async function removeDrink(id, status) {
    setRemoveLoading(true);
    try {
      let response = await POST(`admin/menus/${id}/archive`, { archive: !status });
      if (response.status === 200) {
        getData();
        toast({
          isClosable: true,
          description: response?.message,
          duration: 5000,
          status: 'success',
        });
      }
    } catch (err) {
      toast({
        isClosable: true,
        description: err.message,
        duration: 5000,
        status: 'error',
      });
    }
    setRemoveLoading(false);
  }

  return (
    <MainDashboard>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        margin={'30px 0'}
      >
        <Box>
          {/* <Input
            placeholder='search'
            color={'#fff'}
            border={'1px solid'}
            borderColor={'#fff'}
            outlineColor={'#fff'}
            w={'400px'}
          /> */}
          {
            loadingDrinks ?
              <Spinner ml={'-40px'} color='#dc0b9b' />
              :
              null
          }
        </Box>
        {/* <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={PageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        /> */}
      </Stack>
      <Stack overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Bar Name</Th>
              <Th>Bar Image</Th>
              <Th>Address</Th>
              <Th>City</Th>
              <Th>State</Th>
              <Th>Total Payment</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((item) => (
                <Tr color="white" mb="10px" key={item._id}>
                  <Td>{item?.bar.barName}</Td>
                  <Td>
                    {item?.bar.upload_logo ? (
                      <Image
                        width="65px"
                        height="65px"
                        borderRadius="50%"
                        src={`${imgUrlNew}${item?.bar.upload_logo}`}
                        objectFit={'contain'}
                        bgColor={'#fff'}
                        alt="Drink"
                      />
                    ) : (
                      "No Image"
                    )}
                  </Td>
                  <Td>
                    <Tooltip label={item?.description} fontSize="md">
                      <Box maxW="200px" overflow="hidden" textOverflow="ellipsis">
                        <Text fontSize="sm">
                          {truncateText(item?.bar.address ? item?.bar.address : "----", 50)}
                        </Text>
                      </Box>
                    </Tooltip>
                  </Td>
                  <Td>{item?.bar.city ? item?.bar.city : "----"}</Td>
                  <Td>{item?.bar.state ? item?.bar.state : "----"}</Td>
                  <Td>{item?.totalSales ? `$${item?.totalSales}` : "----"}</Td>

                  {/* <Td>
                    <Button
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
                      mb={'10px'}
                    >Edit
                    </Button>
                    <Button
                      isLoading={removeLoading}
                      onClick={() => removeDrink(item?._id, item?.archive)}
                      textAlign={'center'}
                      py={'10px'}
                      px={'4'}
                      lineHeight={'inherit'}
                      border={'1px solid #fff'}
                      borderRadius={'6px'}
                      color={'#fff'}
                      display={'block'}
                      bgColor={item?.archive ? '#dc0b9b' : 'transparent'}
                    >{item?.archive ? 'Restore' : 'Archive'}</Button>
                  </Td> */}
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

export default Payments;
