import React, { useEffect } from 'react';
import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';

const Facilities = () => {
  useEffect(() => {
    console.log('✅ Facilities: Component mounted successfully');
    return () => {
      console.log('🔄 Facilities: Component unmounting');
    };
  }, []);

  try {
    console.log('🔍 Facilities: Starting render process');
    
    const facilities = [
      {
        emoji: "👟",
        title: "Shoe Keeping",
        description: "Free shoe storage counters available outside the temple premises"
      },
      {
        emoji: "🎒",
        title: "Cloak Room", 
        description: "Secure storage for bags, mobile phones, and other restricted items"
      },
      {
        emoji: "🚿",
        title: "Clean Restrooms",
        description: "Well-maintained toilet facilities for pilgrims near the temple"
      },
      {
        emoji: "ℹ️",
        title: "Help Desk",
        description: "Information counters with guides to assist pilgrims"
      },
      {
        emoji: "🍽️",
        title: "Prasada",
        description: "Sacred food offerings available for purchase from authorized vendors"
      },
      {
        emoji: "♿",
        title: "Accessibility",
        description: "Wheelchair access and assistance available for elderly and disabled"
      }
    ];

    console.log('🔍 Facilities: Facilities data loaded:', facilities.length, 'items');
    
    return (
      <Box bg="white" p="8" borderRadius="lg" shadow="md" mb="12">
        <Heading as="h2" size="xl" mb="6" color="brand.700">Temple Facilities & Services</Heading>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          {facilities.map((facility, index) => {
            console.log(`🔍 Facilities: Rendering facility ${index + 1}:`, facility.title);
            return (
              <Box 
                key={`facility-${index}`} 
                textAlign="center" 
                p="4" 
                bg="brand.50" 
                borderRadius="lg"
              >
                <Text fontSize="3xl" mb="3">{facility.emoji}</Text>
                <Heading as="h3" size="md" mb="2">{facility.title}</Heading>
                <Text fontSize="sm">{facility.description}</Text>
              </Box>
            );
          })}
        </SimpleGrid>
        
        {console.log('✅ Facilities: All facilities rendered successfully')}
      </Box>
    );
  } catch (error) {
    console.error('❌ Facilities: Render error', error);
    throw error; // Re-throw to be caught by ErrorBoundary
  }
};

export default Facilities; 