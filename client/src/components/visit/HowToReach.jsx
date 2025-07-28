import React, { useEffect } from 'react';
import { Box, Icon, SimpleGrid, VStack, HStack, Heading, Text } from '@chakra-ui/react';
import { MdLocationOn } from 'react-icons/md';

const HowToReach = () => {
  useEffect(() => {
    console.log('✅ HowToReach: Component mounted successfully');
    return () => {
      console.log('🔄 HowToReach: Component unmounting');
    };
  }, []);

  try {
    console.log('🔍 HowToReach: Starting render process');
    
    // Debug: Check if MdLocationOn icon is available
    console.log('🔍 HowToReach: MdLocationOn icon available:', !!MdLocationOn);
    
    return (
      <Box bg="white" p="8" borderRadius="lg" shadow="md" mb="12">
        <HStack spacing="4" mb="6">
          <Icon as={MdLocationOn} boxSize={6} color="brand.600" />
          <Heading as="h2" size="xl" color="brand.700">How to Reach Puri</Heading>
        </HStack>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
          <Box>
            <Heading as="h3" size="lg" mb="4" color="brand.600">✈️ By Air</Heading>
            <Text mb="3"><strong>Nearest Airport:</strong> Biju Patnaik International Airport, Bhubaneswar (60 km)</Text>
            <VStack align="start" spacing="2">
              <Text><strong>Taxi:</strong> ₹1,500-2,000 (1.5 hours)</Text>
              <Text><strong>Bus:</strong> ₹100-150 (2 hours)</Text>
              <Text><strong>Pre-paid taxi:</strong> Available at airport</Text>
            </VStack>
          </Box>
          
          <Box>
            <Heading as="h3" size="lg" mb="4" color="brand.600">🚂 By Train</Heading>
            <Text mb="3"><strong>Puri Railway Station:</strong> Direct trains from major cities</Text>
            <VStack align="start" spacing="2">
              <Text><strong>From Bhubaneswar:</strong> 1.5-2 hours</Text>
              <Text><strong>From Kolkata:</strong> 6-7 hours</Text>
              <Text><strong>From Delhi:</strong> 18-20 hours</Text>
              <Text><strong>Auto/Cycle rickshaw:</strong> ₹50-100 to temple</Text>
            </VStack>
          </Box>
          
          <Box>
            <Heading as="h3" size="lg" mb="4" color="brand.600">🚌 By Road</Heading>
            <Text mb="3"><strong>Well connected</strong> by state and private buses</Text>
            <VStack align="start" spacing="2">
              <Text><strong>From Bhubaneswar:</strong> 60 km (1.5 hours)</Text>
              <Text><strong>From Cuttack:</strong> 85 km (2 hours)</Text>
              <Text><strong>From Konark:</strong> 35 km (45 minutes)</Text>
              <Text><strong>Parking:</strong> Available near temple</Text>
            </VStack>
          </Box>
        </SimpleGrid>
        
        {console.log('✅ HowToReach: Render completed successfully')}
      </Box>
    );
  } catch (error) {
    console.error('❌ HowToReach: Render error', error);
    throw error; // Re-throw to be caught by ErrorBoundary
  }
};

export default HowToReach; 