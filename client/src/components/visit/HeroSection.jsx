import React, { useEffect } from 'react';
import { Container, Heading, Text, Box, VStack } from '@chakra-ui/react';

const HeroSection = () => {
  useEffect(() => {
    console.log('✅ HeroSection: Component mounted successfully');
    return () => {
      console.log('🔄 HeroSection: Component unmounting');
    };
  }, []);

  try {
    console.log('🔍 HeroSection: Starting render process');
    
    return (
      <Box bg="brand.700" color="white" py="16">
        <Container maxW="container.lg">
          <VStack spacing="4" textAlign="center">
            <Heading as="h1" size="3xl" fontFamily="heading" mb="4">
              Plan Your Sacred Journey
            </Heading>
            <Text fontSize="xl" maxW="3xl" lineHeight="1.6">
              Discover everything you need to know for your spiritual journey to the sacred Jagannatha Temple - from timings and transportation to rules and accommodation.
            </Text>
          </VStack>
        </Container>
      </Box>
    );
  } catch (error) {
    console.error('❌ HeroSection: Render error', error);
    throw error; // Re-throw to be caught by ErrorBoundary
  }
};

export default HeroSection; 