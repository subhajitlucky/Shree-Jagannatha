import { Box, Flex, Heading, Link, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'History', path: '/history' },
    { label: 'Deities', path: '/deities' },
    { label: 'Festivals', path: '/festivals' },
    { label: 'Visit', path: '/visit' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <Box as="nav" bg="brand.900" color="white" position="sticky" top="0" zIndex="50" shadow="md">
      {/* Main Navbar */}
      <Flex maxW="container.xl" mx="auto" px="4" py="4" justify="space-between" align="center">
        {/* Logo */}
        <Heading 
          as={RouterLink} 
          to="/" 
          size={{ base: "md", md: "lg" }} 
          fontFamily="heading" 
          _hover={{ textDecoration: 'none' }}
          color="white"
          flex="1"
        >
          Shree Jagannatha Temple
        </Heading>

        {/* Desktop Navigation */}
        <Flex gap="8" display={{ base: 'none', lg: 'flex' }} align="center">
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
                fontSize="md"
                whiteSpace="nowrap"
              >
                {link.label}
              </Link>
            );
          })}
        </Flex>

        {/* Mobile Menu Toggle */}
        <Button
          display={{ base: 'block', lg: 'none' }}
          onClick={toggleMenu}
          variant="ghost"
          color="white"
          _hover={{ bg: 'brand.700' }}
          _active={{ bg: 'brand.600' }}
          p="2"
          minW="auto"
        >
          <Box>
            <Box 
              w="6" 
              h="0.5" 
              bg="white" 
              mb="1.5" 
              transition="all 0.3s"
              transform={isOpen ? 'rotate(45deg) translateY(2px)' : 'none'}
            />
            <Box 
              w="6" 
              h="0.5" 
              bg="white" 
              mb="1.5" 
              transition="all 0.3s"
              opacity={isOpen ? 0 : 1}
            />
            <Box 
              w="6" 
              h="0.5" 
              bg="white" 
              transition="all 0.3s"
              transform={isOpen ? 'rotate(-45deg) translateY(-2px)' : 'none'}
            />
          </Box>
        </Button>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box 
          display={{ base: 'block', lg: 'none' }} 
          bg="brand.800" 
          px="4" 
          py="4"
          borderTop="1px solid"
          borderColor="brand.700"
        >
          <VStack spacing="4" align="stretch">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  color={isActive ? 'brand.300' : 'white'}
                  fontWeight={isActive ? 'bold' : 'normal'}
                  _hover={{ color: 'brand.300', textDecoration: 'none', bg: 'brand.700' }}
                  transition="all 0.2s ease-in-out"
                  fontSize="lg"
                  p="3"
                  borderRadius="md"
                  textAlign="left"
                >
                  {link.label}
                </Link>
              );
            })}
          </VStack>
        </Box>
      )}
    </Box>
  );
} 