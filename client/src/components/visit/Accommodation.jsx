import React, { useEffect } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text } from '@chakra-ui/react';

const Accommodation = () => {
  useEffect(() => {
    console.log('✅ Accommodation: Component mounted successfully');
    return () => {
      console.log('🔄 Accommodation: Component unmounting');
    };
  }, []);

  try {
    console.log('🔍 Accommodation: Starting render process');
    
    const accommodationTypes = [
      {
        emoji: "🏨",
        title: "Hotels & Resorts",
        description: "Luxury and mid-range hotels with modern amenities near the beach and temple"
      },
      {
        emoji: "🏠",
        title: "Guesthouses",
        description: "Budget-friendly options run by local families, offering authentic experience"
      },
      {
        emoji: "🏛️",
        title: "Dharamshala",
        description: "Traditional pilgrimage rest houses with basic facilities at nominal rates"
      }
    ];

    console.log('🔍 Accommodation: Accommodation types loaded:', accommodationTypes.length, 'types');
    
    return (
      <Box bg="white" p="8" borderRadius="lg" shadow="md" mb="12">
        <Heading as="h2" size="xl" mb="6" color="brand.700">Where to Stay</Heading>
        
        <VStack align="start" spacing="4">
          <Text fontSize="lg" lineHeight="1.6">
            Puri offers a wide range of accommodation options for every budget, from luxury beach resorts 
            to simple pilgrimage guesthouses, most within walking distance of the temple.
          </Text>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6" w="100%">
            {accommodationTypes.map((accommodation, index) => {
              console.log(`🔍 Accommodation: Rendering type ${index + 1}:`, accommodation.title);
              return (
                <Box key={`accommodation-${index}`}>
                  <Heading as="h3" size="md" mb="2" color="brand.600">
                    {accommodation.emoji} {accommodation.title}
                  </Heading>
                  <Text fontSize="sm">{accommodation.description}</Text>
                </Box>
              );
            })}
          </SimpleGrid>
          
          <Box bg="brand.100" p="4" borderRadius="md" w="100%">
            <Text fontSize="sm" color="brand.700">
              <strong>Tip:</strong> Book in advance during festival seasons, especially Rath Yatra. 
              Most accommodations are within 1-2 km of the temple.
            </Text>
          </Box>
        </VStack>
        
        {console.log('✅ Accommodation: Render completed successfully')}
      </Box>
    );
  } catch (error) {
    console.error('❌ Accommodation: Render error', error);
    throw error; // Re-throw to be caught by ErrorBoundary
  }
};

export default Accommodation; 