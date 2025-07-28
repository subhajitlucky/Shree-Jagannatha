import React, { useEffect } from 'react';
import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';

const BestTimeToVisit = () => {
  useEffect(() => {
    console.log('✅ BestTimeToVisit: Component mounted successfully');
    return () => {
      console.log('🔄 BestTimeToVisit: Component unmounting');
    };
  }, []);

  try {
    console.log('🔍 BestTimeToVisit: Starting render process');
    
    const visitTimes = [
      {
        emoji: "🌤️",
        period: "October - March",
        description: "Pleasant weather, ideal for darshan and sightseeing"
      },
      {
        emoji: "🎭",
        period: "June - July",
        description: "Rath Yatra season - witness the grand festival"
      },
      {
        emoji: "⚠️",
        period: "Avoid April - May",
        description: "Very hot and humid weather"
      }
    ];

    console.log('🔍 BestTimeToVisit: Visit times data loaded:', visitTimes.length, 'periods');
    
    return (
      <Box bg="brand.600" color="white" p="8" borderRadius="lg" textAlign="center">
        <Heading as="h3" size="lg" mb="6">Best Time to Visit</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
          {visitTimes.map((time, index) => {
            console.log(`🔍 BestTimeToVisit: Rendering period ${index + 1}:`, time.period);
            return (
              <Box key={`visit-time-${index}`}>
                <Text fontSize="2xl" fontWeight="bold" mb="2">
                  {time.emoji} {time.period}
                </Text>
                <Text>{time.description}</Text>
              </Box>
            );
          })}
        </SimpleGrid>
        
        {console.log('✅ BestTimeToVisit: Render completed successfully')}
      </Box>
    );
  } catch (error) {
    console.error('❌ BestTimeToVisit: Render error', error);
    throw error; // Re-throw to be caught by ErrorBoundary
  }
};

export default BestTimeToVisit; 