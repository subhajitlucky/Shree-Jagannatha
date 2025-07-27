import HeroSection from "../components/homepage/HeroSection";
import AboutSection from "../components/homepage/AboutSection";
import FestivalsSection from "../components/homepage/FestivalsSection";
import DeitiesSection from "../components/homepage/DeitiesSection";
import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Button, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// The new Homepage component
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      
      {/* Temple Statistics Section */}
      <Box as="section" py="16" bg="brand.700" color="white">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb="12">
            Sacred Numbers
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing="8" textAlign="center">
            <VStack>
              <Text fontSize="4xl" fontWeight="bold" color="brand.200">900+</Text>
              <Text fontSize="lg">Years of Heritage</Text>
            </VStack>
            <VStack>
              <Text fontSize="4xl" fontWeight="bold" color="brand.200">1M+</Text>
              <Text fontSize="lg">Annual Pilgrims</Text>
            </VStack>
            <VStack>
              <Text fontSize="4xl" fontWeight="bold" color="brand.200">120+</Text>
              <Text fontSize="lg">Temples & Shrines</Text>
            </VStack>
            <VStack>
              <Text fontSize="4xl" fontWeight="bold" color="brand.200">214ft</Text>
              <Text fontSize="lg">Temple Height</Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      <FestivalsSection />
      <DeitiesSection />
      
      {/* Spiritual Quote Section */}
      <Box as="section" py="16" bg="brand.600" color="white" textAlign="center">
        <Container maxW="container.md">
          <Text fontSize="2xl" fontStyle="italic" lineHeight="1.6" mb="4">
            "In Jagannatha's eyes, the world finds its reflection - 
            boundless compassion that embraces all of creation."
          </Text>
          <Text fontSize="lg" opacity="0.9">
            - Ancient Vedic Wisdom
          </Text>
        </Container>
      </Box>

      {/* Plan Your Sacred Journey - Mobile Optimized */}
      <Box as="section" py="16" bg="brand.50">
        <Container maxW="container.lg">
          <VStack spacing="10" textAlign="center">
            {/* Section Header */}
            <Box maxW="600px" mx="auto">
              <Text 
                fontSize="sm" 
                color="brand.600" 
                fontWeight="bold" 
                mb="3"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Essential Information
              </Text>
              <Heading as="h2" size="xl" color="brand.700" mb="4" fontFamily="heading">
                Plan Your Sacred Journey
              </Heading>
              <Text fontSize="md" color="brand.600" lineHeight="1.6">
                Everything you need to know for a meaningful visit to the divine abode of Lord Jagannatha
              </Text>
            </Box>

            {/* Visit Info Cards */}
            <Box maxW="900px" mx="auto" w="100%">
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: "6", md: "8" }}>
                {/* Temple Timings Card */}
                <Box 
                  bg="white" 
                  p={{ base: "6", md: "6" }}
                  borderRadius="lg" 
                  shadow="md" 
                  textAlign="center"
                  border="1px solid"
                  borderColor="brand.200"
                  _hover={{ 
                    shadow: "lg", 
                    transform: "translateY(-2px)"
                  }}
                  transition="all 0.3s ease"
                >
                  <Text fontSize="3xl" mb="4">🕐</Text>
                  <Heading size="md" color="brand.700" mb="3" fontFamily="heading">
                    Temple Timings
                  </Heading>
                  <Text fontSize="lg" color="brand.600" fontWeight="bold" mb="1">
                    5:00 AM - 10:00 PM
                  </Text>
                  <Text fontSize="sm" color="brand.500" mb="3">
                    Daily Darshan Hours
                  </Text>
                  <Box p="2" bg="brand.50" borderRadius="md">
                    <Text fontSize="xs" color="brand.600">
                      Special ceremonies throughout the day
                    </Text>
                  </Box>
                </Box>
                
                {/* Location Card */}
                <Box 
                  bg="white" 
                  p={{ base: "6", md: "6" }}
                  borderRadius="lg" 
                  shadow="md" 
                  textAlign="center"
                  border="1px solid"
                  borderColor="brand.200"
                  _hover={{ 
                    shadow: "lg", 
                    transform: "translateY(-2px)"
                  }}
                  transition="all 0.3s ease"
                >
                  <Text fontSize="3xl" mb="4">📍</Text>
                  <Heading size="md" color="brand.700" mb="3" fontFamily="heading">
                    Sacred Location
                  </Heading>
                  <Text fontSize="lg" color="brand.600" fontWeight="bold" mb="1">
                    Puri, Odisha
                  </Text>
                  <Text fontSize="sm" color="brand.500" mb="3">
                    Eastern Coast of India
                  </Text>
                  <Box p="2" bg="brand.50" borderRadius="md">
                    <Text fontSize="xs" color="brand.600">
                      Near the sacred Bay of Bengal
                    </Text>
                  </Box>
                </Box>
                
                {/* Best Time Card */}
                <Box 
                  bg="white" 
                  p={{ base: "6", md: "6" }}
                  borderRadius="lg" 
                  shadow="md" 
                  textAlign="center"
                  border="1px solid"
                  borderColor="brand.200"
                  _hover={{ 
                    shadow: "lg", 
                    transform: "translateY(-2px)"
                  }}
                  transition="all 0.3s ease"
                  gridColumn={{ base: "1", md: "auto" }}
                >
                  <Text fontSize="3xl" mb="4">🌅</Text>
                  <Heading size="md" color="brand.700" mb="3" fontFamily="heading">
                    Best Time to Visit
                  </Heading>
                  <Text fontSize="lg" color="brand.600" fontWeight="bold" mb="1">
                    October - March
                  </Text>
                  <Text fontSize="sm" color="brand.500" mb="3">
                    Pleasant Weather & Festivals
                  </Text>
                  <Box p="2" bg="brand.50" borderRadius="md">
                    <Text fontSize="xs" color="brand.600">
                      Ideal for Rath Yatra season
                    </Text>
                  </Box>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Call to Action */}
            <VStack spacing="4">
              <HStack spacing="4" wrap="wrap" justify="center">
                <Button 
                  as={RouterLink} 
                  to="/visit" 
                  colorPalette="brand" 
                  size="lg" 
                  borderRadius="full"
                  px="8"
                >
                  Complete Visitor Guide
                </Button>
                <Button 
                  as={RouterLink} 
                  to="/festivals" 
                  variant="outline" 
                  colorPalette="brand" 
                  size="lg" 
                  borderRadius="full"
                  px="8"
                >
                  View Festivals
                </Button>
              </HStack>
              
             
            </VStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
