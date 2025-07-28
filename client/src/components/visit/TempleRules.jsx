import React, { useEffect } from 'react';
import { Box, Icon, SimpleGrid, HStack, VStack, Heading, Text } from '@chakra-ui/react';
import { MdInfo, MdCheckCircle } from 'react-icons/md';

const TempleRules = () => {
  useEffect(() => {
    console.log('✅ TempleRules: Component mounted successfully');
    return () => {
      console.log('🔄 TempleRules: Component unmounting');
    };
  }, []);

  try {
    console.log('🔍 TempleRules: Starting render process');
    
    // Debug: Check if icons are available
    console.log('🔍 TempleRules: MdInfo icon available:', !!MdInfo);
    console.log('🔍 TempleRules: MdCheckCircle icon available:', !!MdCheckCircle);
    
    return (
      <Box bg="white" p="8" borderRadius="lg" shadow="md" mb="12">
        <HStack spacing="4" mb="6">
          <Icon as={MdInfo} boxSize={6} color="gray.800" />
          <Heading as="h2" size="xl" color="brand.700">Temple Rules & Etiquette</Heading>
        </HStack>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8">
          <Box>
            <Heading as="h3" size="lg" mb="4" color="red.600">❌ Not Allowed</Heading>
            <VStack align="start" spacing="3">
              <HStack><Icon as={MdCheckCircle} boxSize={4} color="red.600" /><Text>Shoes, sandals, or any footwear</Text></HStack>
              <HStack><Icon as={MdCheckCircle} boxSize={4} color="red.600" /><Text>Leather items (belts, bags, wallets)</Text></HStack>
              <HStack><Icon as={MdCheckCircle} boxSize={4} color="red.600" /><Text>Mobile phones, cameras inside sanctum</Text></HStack>
              <HStack><Icon as={MdCheckCircle} boxSize={4} color="red.600" /><Text>Non-vegetarian food, alcohol, tobacco</Text></HStack>
            </VStack>
          </Box>
          
          <Box>
            <Heading as="h3" size="lg" mb="4" color="green.600">✅ Dress Code & Conduct</Heading>
            <VStack align="start" spacing="3">
              <HStack><Icon as={MdCheckCircle} boxSize={4} color="green.500" /><Text>Modest clothing covering shoulders & knees</Text></HStack>
              <HStack><Icon as={MdCheckCircle} boxSize={4} color="green.500" /><Text>Traditional Indian attire recommended</Text></HStack>
              <HStack><Icon as={MdCheckCircle} boxSize={4} color="green.500" /><Text>Maintain silence in prayer halls</Text></HStack>
              <HStack><Icon as={MdCheckCircle} boxSize={4} color="green.500" /><Text>Follow queue systems patiently</Text></HStack>
            </VStack>
          </Box>
        </SimpleGrid>
        
        {console.log('✅ TempleRules: Render completed successfully')}
      </Box>
    );
  } catch (error) {
    console.error('❌ TempleRules: Render error', error);
    throw error; // Re-throw to be caught by ErrorBoundary
  }
};

export default TempleRules; 