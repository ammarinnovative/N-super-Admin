import { Table, Thead, Tbody, Tr, Th, Td, Image, Stack, Tooltip, Box, Text } from '@chakra-ui/react';
import MainDashboard from '../MainDashboard';
import { GET } from "../../../utilities/ApiProvider";
import { useEffect, useState } from 'react';
import {imgUrl} from "../../../utilities/Config";

const DrinkTable = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await GET("admin/allDrinks", {});
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

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
                        src={imgUrl+item?.pictures[0]}
                        alt="Drink"
                      />
                    ) : (
                      "No Image"
                    )}
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Stack>
    </MainDashboard>
  );
};

export default DrinkTable;
