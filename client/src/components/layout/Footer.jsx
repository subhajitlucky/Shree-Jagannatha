import { Box, Text } from '@chakra-ui/react';

// A simple placeholder Footer component
export default function Footer() {
  return (
    <Box as="footer" bg="brand.900" color="white" p="4" mt="auto">
      <Box maxW="container.md" mx="auto" textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Shree Jagannatha Temple. All Rights Reserved.</Text>
      </Box>
    </Box>
  );
} 