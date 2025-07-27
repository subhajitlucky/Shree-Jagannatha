import { Box, Heading, Text, Button, Image, Flex, VStack, HStack, SimpleGrid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function HeroSection() {
  return (
    <Flex as="section" bg="brand.100"
      minH="100vh"
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      maxW="container.lg"
      mx="auto"
      position="relative"
    >
      {/* Text Content */}
      <Box
        w={{ base: '100%', md: '50%' }}
        px={{ base: '6', md: '8' }}
        py={{ base: '8', md: '16' }}
        order={{ base: 2, md: 1 }}
      >
        <VStack align={{ base: 'center', md: 'start' }} spacing="6" textAlign={{ base: 'center', md: 'left' }}>
          <Box>
            <Text 
              fontSize="lg" 
              color="brand.600" 
              fontWeight="semibold" 
              mb="2"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Welcome to
            </Text>
            <Heading
              as="h1"
              size={{ base: 'xl', md: '2xl' }}
              fontFamily="heading"
              color="brand.700"
              mb="4"
              lineHeight="1.2"
            >
              Where Divinity Meets Eternity
            </Heading>
          </Box>
          
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="brand.900"
            lineHeight="1.6"
            maxW="md"
          >
            Bathed in golden sunlight, the Shree Jagannatha Temple stands as a living testament to centuries of devotion, where every stone tells a story of faith that transcends time.
          </Text>
          
          <HStack spacing="4" wrap="wrap" justify={{ base: 'center', md: 'start' }}>
            <Button as={RouterLink} to="/history" colorPalette="brand" size="lg" rounded="full">
              Discover Sacred History
            </Button>
            <Button 
              as={RouterLink} 
              to="/visit" 
              variant="outline" 
              colorPalette="brand" 
              size="lg" 
              rounded="full"
            >
              Plan Your Visit
            </Button>
          </HStack>

          {/* Quick Facts */}
          <Box pt="6">
            <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={{ base: "4", sm: "6", md: "8" }}>
              <Box 
                bg="white" 
                p={{ base: "4", sm: "5", md: "6" }}
                borderRadius="lg" 
                shadow="md" 
                textAlign="center"
                border="1px solid"
                borderColor="brand.200"
                _hover={{ shadow: "lg" }}
                transition="all 0.3s ease"
              >
                <Text fontSize={{ base: "lg", sm: "xl", md: "2xl" }} fontWeight="bold" color="brand.700" mb="2">12th Century</Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="brand.600">Founded</Text>
              </Box>
              <Box 
                bg="white" 
                p={{ base: "4", sm: "5", md: "6" }}
                borderRadius="lg" 
                shadow="md" 
                textAlign="center"
                border="1px solid"
                borderColor="brand.200"
                _hover={{ shadow: "lg" }}
                transition="all 0.3s ease"
              >
                <Text fontSize={{ base: "lg", sm: "xl", md: "2xl" }} fontWeight="bold" color="brand.700" mb="2">214 ft</Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="brand.600">Height</Text>
              </Box>
              <Box 
                bg="white" 
                p={{ base: "4", sm: "5", md: "6" }}
                borderRadius="lg" 
                shadow="md" 
                textAlign="center"
                border="1px solid"
                borderColor="brand.200"
                _hover={{ shadow: "lg" }}
                transition="all 0.3s ease"
              >
                <Text fontSize={{ base: "lg", sm: "xl", md: "2xl" }} fontWeight="bold" color="brand.700" mb="2">Puri, Odisha</Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="brand.600">Location</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </VStack>
      </Box>

      {/* Image Content */}
      <Box
        w={{ base: '100%', md: '50%' }}
        p={{ base: '4', md: '8' }}
        order={{ base: 1, md: 2 }}
      >
        <Box>
          <Image
            src="/assets/temple-new.jpg"
            alt="Shree Jagannatha Temple in perfect sunlight"
            w="100%"
            h={{ base: "300px", md: "500px" }}
            objectFit="cover"
            objectPosition="center"
            borderRadius="2xl"
            transition="transform 0.5s ease, box-shadow 0.5s ease"
            _hover={{ transform: 'scale(1.02)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            shadow="xl"
          />
        </Box>
        {/* UNESCO badge below image */}
        <Box textAlign="center" mt="4">
          <Box bg="white" px="4" py="2" borderRadius="full" shadow="md" display="inline-block" border="1px solid" borderColor="brand.200">
            <Text fontSize="sm" fontWeight="bold" color="brand.700">
              UNESCO Heritage Candidate
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
} 