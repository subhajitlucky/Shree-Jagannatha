import { Box, Heading, Text, Button, Flex, Image, VStack, HStack, SimpleGrid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function AboutSection() {
  return (
    <Box as="section" py="20" bg="brand.50">
      <Flex maxW="container.lg" mx="auto" px="6" direction={{ base: 'column', md: 'row' }} align="center" gap="8">
        {/* Text Content */}
        <Box w={{ base: 'full', md: '55%' }}>
          <VStack align="start" spacing="6">
            <Box>
              <Text 
                fontSize="md" 
                color="brand.600" 
                fontWeight="semibold" 
                mb="2"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Sacred Heritage
              </Text>
              <Heading as="h2" size="2xl" fontFamily="heading" color="brand.700" lineHeight="1.3">
                A Legacy of Faith and Tradition
              </Heading>
            </Box>
            
            <Text fontSize="lg" color="brand.900" lineHeight="1.7">
              The Shree Jagannatha Temple in Puri is one of the most revered Vaishnava sites in India, and one of the original Char Dham pilgrimage sites for Hindus. This sacred monument represents centuries of devotion, architectural brilliance, and spiritual significance.
            </Text>
            
            <Box bg="brand.100" p="6" borderRadius="lg" border="1px solid" borderColor="brand.200">
              <Text fontSize="md" color="brand.700" fontStyle="italic" lineHeight="1.6">
                "More than just a temple, this is where the divine consciousness of Lord Jagannatha embraces millions of souls, transcending barriers of caste, creed, and social status."
              </Text>
            </Box>

            <HStack spacing="4" wrap="wrap">
              <Button as={RouterLink} to="/history" colorPalette="brand" rounded="full" size="lg">
                Read Complete History
              </Button>
              <Button 
                as={RouterLink} 
                to="/deities" 
                variant="outline" 
                colorPalette="brand" 
                rounded="full"
                size="lg"
              >
                Meet the Deities
              </Button>
            </HStack>

            {/* Key Highlights - Enhanced Design */}
            <Box pt="6">
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: "6", md: "8" }}>
                <Box 
                  bg="white" 
                  p={{ base: "6", md: "7" }}
                  borderRadius="xl" 
                  shadow="lg" 
                  textAlign="center"
                  border="2px solid"
                  borderColor="brand.100"
                  _hover={{ 
                    shadow: "xl", 
                    borderColor: "brand.300",
                    transform: "translateY(-4px)"
                  }}
                  transition="all 0.3s ease"
                  position="relative"
                  overflow="hidden"
                >
                  {/* Background accent */}
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    h="4px"
                    bg="linear-gradient(90deg, brand.400, brand.600)"
                  />
                  
                  <VStack spacing="4">
                    <Box
                      w="16"
                      h="16"
                      bg="brand.100"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mx="auto"
                    >
                      <Text fontSize="2xl">🏛️</Text>
                    </Box>
                    <VStack spacing="2">
                      <Heading size="md" color="brand.700" fontFamily="heading">
                        Architecture
                      </Heading>
                      <Text fontSize="lg" color="brand.600" fontWeight="semibold">
                        Kalinga Style
                      </Text>
                      <Text fontSize="sm" color="brand.500" textAlign="center">
                        Ancient Odishan architectural heritage
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
                
                <Box 
                  bg="white" 
                  p={{ base: "6", md: "7" }}
                  borderRadius="xl" 
                  shadow="lg" 
                  textAlign="center"
                  border="2px solid"
                  borderColor="brand.100"
                  _hover={{ 
                    shadow: "xl", 
                    borderColor: "brand.300",
                    transform: "translateY(-4px)"
                  }}
                  transition="all 0.3s ease"
                  position="relative"
                  overflow="hidden"
                >
                  {/* Background accent */}
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    h="4px"
                    bg="linear-gradient(90deg, brand.500, brand.700)"
                  />
                  
                  <VStack spacing="4">
                    <Box
                      w="16"
                      h="16"
                      bg="brand.100"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mx="auto"
                    >
                      <Text fontSize="2xl">🕉️</Text>
                    </Box>
                    <VStack spacing="2">
                      <Heading size="md" color="brand.700" fontFamily="heading">
                        Significance
                      </Heading>
                      <Text fontSize="lg" color="brand.600" fontWeight="semibold">
                        Char Dham
                      </Text>
                      <Text fontSize="sm" color="brand.500" textAlign="center">
                        One of the four sacred pilgrimage sites
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
                
                <Box 
                  bg="white" 
                  p={{ base: "6", md: "7" }}
                  borderRadius="xl" 
                  shadow="lg" 
                  textAlign="center"
                  border="2px solid"
                  borderColor="brand.100"
                  _hover={{ 
                    shadow: "xl", 
                    borderColor: "brand.300",
                    transform: "translateY(-4px)"
                  }}
                  transition="all 0.3s ease"
                  position="relative"
                  overflow="hidden"
                  gridColumn={{ base: "1", sm: "1 / -1", md: "auto" }}
                >
                  {/* Background accent */}
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    h="4px"
                    bg="linear-gradient(90deg, brand.600, brand.800)"
                  />
                  
                  <VStack spacing="4">
                    <Box
                      w="16"
                      h="16"
                      bg="brand.100"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mx="auto"
                    >
                      <Text fontSize="2xl">👥</Text>
                    </Box>
                    <VStack spacing="2">
                      <Heading size="md" color="brand.700" fontFamily="heading">
                        Annual Visitors
                      </Heading>
                      <Text fontSize="lg" color="brand.600" fontWeight="semibold">
                        1M+ Pilgrims
                      </Text>
                      <Text fontSize="sm" color="brand.500" textAlign="center">
                        Devotees from around the world
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>
        </Box>

        {/* Image Content */}
        <Box w={{ base: 'full', md: '45%' }}>
          <VStack spacing="4">
            <Box position="relative" overflow="hidden" borderRadius="2xl" shadow="2xl" w="100%" h="400px">
              <Image 
                src="/assets/temple-old.jpg" 
                alt="An ancient depiction of the Shree Jagannatha Temple" 
                objectFit="cover"
                w="100%"
                h="100%"
                transition="transform 0.3s ease"
                _hover={{ transform: 'translateY(-4px)' }}
              />
            </Box>
            
            {/* Historical Information - Moved outside the photo */}
            <Box
              bg="white"
              p="4"
              borderRadius="lg"
              shadow="md"
              border="1px solid"
              borderColor="brand.200"
              w="100%"
              textAlign="center"
            >
              <Text fontSize="sm" fontWeight="bold" color="brand.700" mb="1">
                Historical Significance
              </Text>
              <Text fontSize="xs" color="brand.600">
                Built in 12th century by King Chodaganga Deva
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
} 