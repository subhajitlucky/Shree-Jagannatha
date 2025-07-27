import { Box, Text, VStack, HStack, Heading, SimpleGrid, Container, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Box as="footer" bg="brand.900" color="white" py="12" mt="auto">
      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing="8" mb="8">
          {/* Temple Info */}
          <VStack align="start" spacing="3">
            <Heading as="h3" size="md" color="brand.200" mb="2">
              Shree Jagannatha Temple
            </Heading>
            <Text fontSize="sm" opacity="0.9">
              Grand Road, Puri<br />
              Odisha 752001, India
            </Text>
            <Text fontSize="sm" opacity="0.9">
              Temple Phone: +91-6752-222216
            </Text>
          </VStack>

          {/* Quick Links */}
          <VStack align="start" spacing="3">
            <Heading as="h3" size="md" color="brand.200" mb="2">
              Quick Links
            </Heading>
            <Link as={RouterLink} to="/history" fontSize="sm" color="white" _hover={{ color: 'brand.300' }}>
              Temple History
            </Link>
            <Link as={RouterLink} to="/festivals" fontSize="sm" color="white" _hover={{ color: 'brand.300' }}>
              Festivals
            </Link>
            <Link as={RouterLink} to="/visit" fontSize="sm" color="white" _hover={{ color: 'brand.300' }}>
              Visit Guide
            </Link>
            <Link as={RouterLink} to="/gallery" fontSize="sm" color="white" _hover={{ color: 'brand.300' }}>
              Photo Gallery
            </Link>
          </VStack>

          {/* Temple Timings */}
          <VStack align="start" spacing="3">
            <Heading as="h3" size="md" color="brand.200" mb="2">
              Temple Timings
            </Heading>
            <Text fontSize="sm" opacity="0.9">
              <Text as="span" fontWeight="semibold">Mangal Aarti:</Text> 5:00 AM
            </Text>
            <Text fontSize="sm" opacity="0.9">
              <Text as="span" fontWeight="semibold">Darshan:</Text> 6:00 AM - 10:00 PM
            </Text>
            <Text fontSize="sm" opacity="0.9">
              <Text as="span" fontWeight="semibold">Sandhya Aarti:</Text> 7:00 PM
            </Text>
          </VStack>

          {/* Important Festivals */}
          <VStack align="start" spacing="3">
            <Heading as="h3" size="md" color="brand.200" mb="2">
              Major Festivals
            </Heading>
            <Text fontSize="sm" opacity="0.9">Rath Yatra (June-July)</Text>
            <Text fontSize="sm" opacity="0.9">Snana Yatra (June)</Text>
            <Text fontSize="sm" opacity="0.9">Janmashtami (August)</Text>
            <Text fontSize="sm" opacity="0.9">Diwali (October-November)</Text>
          </VStack>
        </SimpleGrid>

        {/* Divider */}
        <Box height="1px" bg="brand.700" my="6" />

        {/* Bottom Section */}
        <HStack justify="space-between" align="center" wrap="wrap" spacing="4">
          <Text fontSize="sm" opacity="0.8">
            &copy; {new Date().getFullYear()} Shree Jagannatha Temple Heritage Site. All Rights Reserved.
          </Text>
          <HStack spacing="4">
            <Text fontSize="sm" opacity="0.8">
              Built with devotion for pilgrims worldwide
            </Text>
          </HStack>
        </HStack>

        {/* Sanskrit Blessing */}
        <Box textAlign="center" mt="6" pt="4" borderTop="1px solid" borderColor="brand.700">
          <Text fontSize="sm" fontStyle="italic" opacity="0.9" color="brand.200">
            "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
          </Text>
          <Text fontSize="xs" opacity="0.7" mt="1">
            May all beings be happy, may all beings be healthy
          </Text>
        </Box>
      </Container>
    </Box>
  );
} 