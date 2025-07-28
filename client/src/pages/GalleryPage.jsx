import { Container, Heading, Text, Box, Image, SimpleGrid, VStack } from '@chakra-ui/react';

export default function GalleryPage() {
  return (
    <Box as="main" bg="brand.50" minH="100vh">
      {/* Hero Section */}
      <Box bg="brand.700" color="white" py="16">
        <Container maxW="container.lg">
          <VStack spacing="4" textAlign="center">
            <Heading as="h1" size="3xl" fontFamily="heading" mb="4">
              Sacred Gallery
            </Heading>
            <Text fontSize="xl" maxW="3xl" lineHeight="1.6">
              Immerse yourself in the divine beauty and timeless grandeur of Lord Jagannatha's abode
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py="12">
        {/* Temple Architecture */}
        <Box mb="16">
          <Heading as="h2" size="xl" mb="8" color="brand.700" textAlign="center">
            Temple Architecture
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8">
            <Box 
              bg="white" 
              borderRadius="lg" 
              overflow="hidden" 
              shadow="lg" 
              _hover={{ transform: 'scale(1.02)' }} 
              transition="all 0.3s ease"
              m="2"  // Add margin around each card
              p="2"  // Add padding inside card
            >
              <Image
                src="/assets/temple-new.jpg"
                alt="Main temple spire"
                w="100%"
                h="250px"
                objectFit="cover"
                borderRadius="md"  // Add rounded corners to image
              />
              <Box p="4" mt="2">  // Add margin-top for text separation
                <Heading as="h3" size="md" mb="2" color="brand.700">Main Temple Spire</Heading>
                <Text fontSize="sm" color="brand.600">The magnificent 214-foot tall spire reaching towards the heavens</Text>
              </Box>
            </Box>
            
            <Box 
              bg="white" 
              borderRadius="lg" 
              overflow="hidden" 
              shadow="lg" 
              _hover={{ transform: 'scale(1.02)' }} 
              transition="all 0.3s ease"
              m="2"
              p="2"
            >
              <Image
                src="/assets/temple-old.jpg"
                alt="Historical view"
                w="100%"
                h="250px"
                objectFit="cover"
              />
              <Box p="4" mt="2">
                <Heading as="h3" size="md" mb="2" color="brand.700">Historical Architecture</Heading>
                <Text fontSize="sm" color="brand.600">Ancient Kalinga architecture in its full glory</Text>
              </Box>
            </Box>
            
            <Box 
              bg="white" 
              borderRadius="lg" 
              overflow="hidden" 
              shadow="lg" 
              _hover={{ transform: 'scale(1.02)' }} 
              transition="all 0.3s ease"
              m="2"
              p="2"
            >
              <Box bg="brand.100" h="250px" display="flex" alignItems="center" justifyContent="center">
                <Text fontSize="4xl">🏛️</Text>
              </Box>
              <Box p="4" mt="2">
                <Heading as="h3" size="md" mb="2" color="brand.700">Temple Complex</Heading>
                <Text fontSize="sm" color="brand.600">Intricate carvings and sacred geometry</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Sacred Deities */}
        <Box mb="16">
          <Heading as="h2" size="xl" mb="8" color="brand.700" textAlign="center">
            The Divine Trinity
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
            <Box 
              bg="white" 
              borderRadius="lg" 
              overflow="hidden" 
              shadow="lg" 
              _hover={{ transform: 'scale(1.02)' }} 
              transition="all 0.3s ease"
              m="2"
              p="2"
            >
              <Image
                src="/assets/lordjagannatha.jpeg"
                alt="Lord Jagannatha"
                w="100%"
                h="300px"
                objectFit="cover"
              />
              <Box p="4" mt="2">
                <Heading as="h3" size="md" mb="2" color="brand.700">Lord Jagannatha</Heading>
                <Text fontSize="sm" color="brand.600">The Lord of the Universe in his divine form</Text>
              </Box>
            </Box>
            
            <Box 
              bg="white" 
              borderRadius="lg" 
              overflow="hidden" 
              shadow="lg" 
              _hover={{ transform: 'scale(1.02)' }} 
              transition="all 0.3s ease"
              m="2"
              p="2"
            >
              <Image
                src="/assets/lordbalabhadra.jpg"
                alt="Lord Balabhadra"
                w="100%"
                h="300px"
                objectFit="cover"
              />
              <Box p="4" mt="2">
                <Heading as="h3" size="md" mb="2" color="brand.700">Lord Balabhadra</Heading>
                <Text fontSize="sm" color="brand.600">The divine elder brother, protector and strength</Text>
              </Box>
            </Box>
            
            <Box 
              bg="white" 
              borderRadius="lg" 
              overflow="hidden" 
              shadow="lg" 
              _hover={{ transform: 'scale(1.02)' }} 
              transition="all 0.3s ease"
              m="2"
              p="2"
            >
              <Image
                src="/assets/lordsubhadra.jpg"
                alt="Devi Subhadra"
                w="100%"
                h="300px"
                objectFit="cover"
              />
              <Box p="4" mt="2">
                <Heading as="h3" size="md" mb="2" color="brand.700">Devi Subhadra</Heading>
                <Text fontSize="sm" color="brand.600">The divine sister, embodiment of grace and compassion</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Festivals */}
        <Box mb="16">
          <Heading as="h2" size="xl" mb="8" color="brand.700" textAlign="center">
            Sacred Festivals
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8">
            <Box 
              bg="white" 
              borderRadius="lg" 
              overflow="hidden" 
              shadow="lg" 
              _hover={{ transform: 'scale(1.02)' }} 
              transition="all 0.3s ease"
              m="2"
              p="2"
            >
              <Image
                src="/assets/RathYatra.jpg"
                alt="Rath Yatra festival"
                w="100%"
                h="250px"
                objectFit="cover"
              />
              <Box p="4" mt="2">
                <Heading as="h3" size="md" mb="2" color="brand.700">Rath Yatra</Heading>
                <Text fontSize="sm" color="brand.600">The grand chariot festival that draws millions of devotees</Text>
              </Box>
            </Box>
            
            <Box 
              bg="white" 
              borderRadius="lg" 
              overflow="hidden" 
              shadow="lg" 
              _hover={{ transform: 'scale(1.02)' }} 
              transition="all 0.3s ease"
              m="2"
              p="2"
            >
              <Image
                src="/assets/snanajatra.jpeg"
                alt="Snana Yatra ceremony"
                w="100%"
                h="250px"
                objectFit="cover"
              />
              <Box p="4" mt="2">
                <Heading as="h3" size="md" mb="2" color="brand.700">Snana Yatra</Heading>
                <Text fontSize="sm" color="brand.600">The sacred bathing ceremony of the deities</Text>
              </Box>
            </Box>
            
            <Box 
              bg="white" 
              borderRadius="lg" 
              overflow="hidden" 
              shadow="lg" 
              _hover={{ transform: 'scale(1.02)' }} 
              transition="all 0.3s ease"
              m="2"
              p="2"
            >
              <Image
                src="/assets/nabakalebara.jpg"
                alt="Nabakalebara ceremony"
                w="100%"
                h="250px"
                objectFit="cover"
              />
              <Box p="4" mt="2">
                <Heading as="h3" size="md" mb="2" color="brand.700">Nabakalebara</Heading>
                <Text fontSize="sm" color="brand.600">The sacred renewal ceremony of the wooden idols</Text>
              </Box>
            </Box>
            
            <Box 
              bg="white" 
              borderRadius="lg" 
              overflow="hidden" 
              shadow="lg" 
              _hover={{ transform: 'scale(1.02)' }} 
              transition="all 0.3s ease"
              m="2"
              p="2"
            >
              <Box bg="brand.100" h="250px" display="flex" alignItems="center" justifyContent="center">
                <Text fontSize="4xl">🎭</Text>
              </Box>
              <Box p="4" mt="2">
                <Heading as="h3" size="md" mb="2" color="brand.700">Festival Celebrations</Heading>
                <Text fontSize="sm" color="brand.600">Various religious ceremonies throughout the year</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Call to Action */}
        <Box bg="brand.600" color="white" p="8" borderRadius="lg" textAlign="center">
          <Heading as="h3" size="lg" mb="4">Experience the Divine Presence</Heading>
          <Text fontSize="lg" mb="6">
            These images offer just a glimpse of the spiritual magnificence that awaits you. 
            Come and witness the divine beauty with your own eyes.
          </Text>
          <Text fontSize="md" opacity="0.9">
            📸 Photography is allowed in outer areas of the temple complex
          </Text>
        </Box>
      </Container>
    </Box>
  );
} 