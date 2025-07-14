import { Flex, Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

// This component wraps page content with the Navbar and Footer
export default function MainLayout({ children }) {
  return (
    <Flex direction="column" minH="100vh" bg="brand.50" color="brand.900">
      <Navbar />
      <Box flex="1">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
} 