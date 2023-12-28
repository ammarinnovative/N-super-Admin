import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Stack,
  Heading,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link as Reactlink } from 'react-router-dom';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo2.png';
import { useSelector } from 'react-redux';

const LinkItems = [
  { name: 'Home', icon: FiHome, url: '/dashboard' },
  { name: 'Menu', icon: FiTrendingUp, url: '/dashboard/menu' },
  { name: 'Subscription', icon: AiOutlineDollar, url: '/dashboard/subscription' },
  { name: 'Bar Owners', icon: AiOutlineDollar, url: '/dashboard/barowner' },
  // { name: 'Wallet', icon: AiOutlineDollar, url:'/dashboard/wallet' },
  { name: 'Users', icon: AiOutlineDollar, url: '/dashboard/users' },
  // { name: 'Event', icon: FiStar ,url:'/dashboard/event'},
  // { name: 'Feed', icon: FiHome, url:'/dashboard/feed' }, 
  // { name: 'Analytics', icon: FiTrendingUp,url:'/dashboard/analytics' },
  // { name: 'promotions', icon: FiCompass,url : '/dashboard/promotions' },
  { name: 'Settings', icon: FiStar, url: '/dashboard/setting' },
  { name: 'Drink Table', icon: FiStar, url: '/dashboard/drinktable' },
  { name: 'Payments', icon: FiSettings ,url:'/dashboard/payments' },
  // { name: 'Contact Us', icon: FiSettings,url:'/dashboard/Contact' },
];

export default function SidebarWithHeader({ children, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('#121212', '#000')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} title={title} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('#212121', '#212121')}
      borderRight="1px"
      borderRightColor={useColorModeValue('#212121', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        pt={'4'}
        alignItems="center"
        mb={'5'}
        justifyContent="space-between"
      >
        <Image w={'90px'} src={logo} m={'auto'} />
        <CloseButton
          color={'#7a7a7a'}
          display={{ base: 'flex', md: 'none' }}
          onClick={onClose}
        />
      </Flex>
      {LinkItems.map(link => (
        <NavItem key={link.name} icon={link.icon} url={link.url}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, url, children, ...rest }) => {
  return (
    <Link
      as={Reactlink}
      to={url ?? ''}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        color="#7a7a7a"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'pHeading.100',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            color={'#7a7a7a'}
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, title, ...rest }) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.value)
  const clear = () => {
    navigate('/dashboard/login');
  }

  return (
    <Flex
      ml={{ base: 0, md: '270px' }}
      mr={{ base: 0, md: 30 }}
      mt={{ base: 0, md: 6 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('#212121', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('#212121', '#212121')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        color={'#7a7a7a'}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image display={{ base: 'flex', md: 'none' }} w={'80px'} src={logo} />

      <HStack spacing={{ base: '0', md: '6' }}>
        <Stack
          direction={'row'}
          spacing={{ base: '0', md: '6' }}
          alignItems={'center'}
        >
          <IconButton
            size="lg"
            variant="ghost"
            color={'#7a7a7a'}
            aria-label="open menu"
            icon={<FiBell />}
          />
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}
              >
                <HStack>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm" color={'#7a7a7a'} textTransform={'capitalize'}>
                      {user?.username}
                    </Text>
                    <Text fontSize="xs" color="#7a7a7a">
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                zIndex={"5"}
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => { clear() }}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Stack>
      </HStack>
    </Flex>
  );
};
