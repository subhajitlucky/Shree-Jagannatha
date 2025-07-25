import { Box, Heading, Text, Button, Image, Flex } from '@chakra-ui/react';

export default function HeroSection() {
  return (
    <Flex as="section" bg="brand.100"
      h="100vh"
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      maxW="container.lg"
      mx="auto"
    >
      <Box
        w={{ base: '100%', md: '1/2' }}
        p={{ base: '4', md: '8' }}
      >
        <Image
          src="/assets/temple-new.jpg"
          alt="Shree Jagannatha Temple in perfect sunlight"
          w="100%"
          h="auto"
          objectFit="cover"
          objectPosition="center"
          borderRadius="lg"
          transition="transform 0.5s ease"
          _hover={{ transform: 'scale(1.02)' }}
        />
      </Box>

      <Box
        w={{ base: '100%', md: '1/2' }}
        px={{ base: '4', md: '4' }}
      >
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Heading
            as="h1"
            size="2xl"
            fontFamily="heading"
            color="brand.700"
            mb="4"
            lineHeight="1.2"
          >
            Where Divinity Meets Eternity
          </Heading>
          
          <Text
            fontSize="lg"
            color="brand.900"
            mb="6"
            lineHeight="1.6"
          >
            Bathed in golden sunlight, the Shree Jagannatha Temple stands as a living testament to centuries of devotion, where every stone tells a story of faith that transcends time.
          </Text>
          
          <Button colorPalette="brand" size="lg" rounded="full">
            Discover Sacred History
          </Button>
        </Box>
      </Box>
    </Flex>
  );
} 