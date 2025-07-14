import { Box, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';

export default function AboutSection() {
  return (
    <Box as="section" py="20" bg="brand.50">
      <Flex maxW="container.lg" mx="auto" px="6" direction={{ base: 'column', md: 'row' }} align="center">
        <Box w={{ base: 'full', md: '1/2' }} px="4">
          <Heading as="h2" size="2xl" fontFamily="heading" color="brand.700" mb="4">
            A Legacy of Faith and Tradition
          </Heading>
          <Text fontSize="lg" color="brand.900" mb="6">
            The Shree Jagannatha Temple in Puri is one of the most revered Vaishnava sites in India, and one of the original Char Dham pilgrimage sites for Hindus. This brief introduction will share the temple's profound history and enduring spiritual significance.
          </Text>
          <Button colorPalette="brand" rounded="full">
            Read More
          </Button>
        </Box>
        <Box w={{ base: 'full', md: '1/2' }} px="4" mt={{ base: '8', md: '0' }}>
          <Image 
            src="/assets/temple-old.jpg" 
            alt="An ancient depiction of the Shree Jagannatha Temple" 
            borderRadius="lg" 
            shadow="2xl"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
} 