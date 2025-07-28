import React, { useEffect } from 'react';
import { Box, Icon, SimpleGrid, VStack, HStack, Heading, Text } from '@chakra-ui/react';
import { MdAccessTime } from 'react-icons/md';

const TempleTimings = () => {
  useEffect(() => {
    console.log('✅ TempleTimings: Component mounted successfully');
    return () => {
      console.log('🔄 TempleTimings: Component unmounting');
    };
  }, []);

  try {
    console.log('🔍 TempleTimings: Starting render process');
    
    // Debug: Check if MdAccessTime icon is available
    console.log('🔍 TempleTimings: MdAccessTime icon available:', !!MdAccessTime);
    
    return (
      <Box bg="white" p="8" borderRadius="lg" shadow="md" mb="12">
        <HStack spacing="4" mb="6">
          <Icon as={MdAccessTime} boxSize={6} color="brand.600" />
          <Heading as="h2" size="xl" color="brand.700">Temple Timings & Daily Schedule</Heading>
        </HStack>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8">
          <Box>
            <Heading as="h3" size="lg" mb="4" color="brand.600">Darshan Timings</Heading>
            <VStack align="start" spacing="3">
              <HStack>
                <Text fontWeight="bold" minW="100px">5:00 AM</Text>
                <Text>Temple opens - Mangala Arati</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold" minW="100px">6:00 AM</Text>
                <Text>Morning Darshan begins</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold" minW="100px">12:00 PM</Text>
                <Text>Madhyahna Dhupa (Afternoon worship)</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold" minW="100px">7:00 PM</Text>
                <Text>Sandhya Arati (Evening worship)</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold" minW="100px">10:00 PM</Text>
                <Text>Temple closes</Text>
              </HStack>
            </VStack>
          </Box>
          
          <Box>
            <Heading as="h3" size="lg" mb="4" color="brand.600">Best Darshan Times</Heading>
            <VStack align="start" spacing="3">
              <Text><strong>Early Morning (6-8 AM):</strong> Peaceful, less crowded</Text>
              <Text><strong>Evening (7-9 PM):</strong> Beautiful arati ceremony</Text>
              <Text><strong>Avoid:</strong> 11 AM - 1 PM (very crowded)</Text>
              <Text><strong>Festival Days:</strong> Arrive very early</Text>
            </VStack>
          </Box>
        </SimpleGrid>
        
        {console.log('✅ TempleTimings: Render completed successfully')}
      </Box>
    );
  } catch (error) {
    console.error('❌ TempleTimings: Render error', error);
    throw error; // Re-throw to be caught by ErrorBoundary
  }
};

export default TempleTimings; 