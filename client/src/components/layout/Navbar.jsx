import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'History', path: '/history' },
    { label: 'Deities', path: '/deities' },
    { label: 'Festivals', path: '/festivals' },
    { label: 'Visit', path: '/visit' },
    { label: 'Gallery', path: '/gallery' },
  ];

  return (
    <Box as="nav" bg="brand.900" color="white" position="sticky" top="0" zIndex="50" shadow="md">
      <Flex maxW="container.xl" mx="auto" px="4" py="4" justify="space-between" align="center">
        <Heading as={RouterLink} to="/" size="lg" fontFamily="heading" _hover={{ textDecoration: 'none' }}>
          Shree Jagannatha Temple
        </Heading>
        <Flex gap={{ base: '4', md: '6' }} direction={{ base: 'column', md: 'row' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                as={RouterLink}
                to={link.path}
                color={isActive ? 'brand.300' : 'white'}
                fontWeight={isActive ? 'bold' : 'normal'}
                _hover={{ color: 'brand.300', textDecoration: 'none' }}
                transition="color 0.2s ease-in-out"
              >
                {link.label}
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
} 