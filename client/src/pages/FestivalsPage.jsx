import { Container, Heading, Text, Box, Image, SimpleGrid, VStack, HStack, Badge } from '@chakra-ui/react';

export default function FestivalsPage() {
  return (
    <Box as="main" bg="brand.50" minH="100vh">
      {/* Hero Section */}
      <Box bg="brand.700" color="white" py="16">
        <Container maxW="container.lg">
          <VStack spacing="4" textAlign="center">
            <Heading as="h1" size="3xl" fontFamily="heading" mb="4">
              Sacred Festivals
            </Heading>
            <Text fontSize="xl" maxW="3xl" lineHeight="1.6">
              Experience the divine celebrations that have enchanted devotees for centuries
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py="12">
        {/* Rath Yatra - Main Festival */}
        <Box bg="white" p="8" borderRadius="lg" shadow="lg" mb="12" border="2px solid" borderColor="brand.300">
          <HStack spacing="8" align="start">
            <VStack flex="1" align="start">
              <Badge colorPalette="brand" size="lg" mb="2">GRAND FESTIVAL</Badge>
              <Heading as="h2" size="2xl" color="brand.700" mb="4">
                Rath Yatra - The Festival of Chariots
              </Heading>
              <Text fontSize="lg" lineHeight="1.8" mb="4">
                The most spectacular festival where Lord Jagannatha, Balabhadra, and Subhadra travel 
                in magnificent wooden chariots to Gundicha Temple. Millions of devotees gather to 
                pull the sacred chariots and seek divine blessings.
              </Text>
              <Text fontSize="lg" lineHeight="1.8" mb="4">
                <strong>When:</strong> June-July (Ashadha Shukla Dwitiya)<br/>
                <strong>Duration:</strong> 9 days<br/>
                <strong>Special Feature:</strong> Anyone can pull the chariot ropes regardless of caste or creed
              </Text>
            </VStack>
            <Box flex="1">
              <Image
                src="/assets/RathYatra.jpg"
                alt="Rath Yatra festival"
                borderRadius="lg"
                shadow="lg"
                w="100%"
                h="300px"
                objectFit="cover"
              />
            </Box>
          </HStack>
        </Box>

        {/* Other Major Festivals */}
        <Heading as="h2" size="xl" mb="8" color="brand.700" textAlign="center">
          Other Sacred Celebrations
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8" mb="12">
          {/* Snana Yatra */}
          <Box bg="white" p="6" borderRadius="lg" shadow="md" border="1px solid" borderColor="brand.200">
            <Image
              src="/assets/snanajatra.jpeg"
              alt="Snana Yatra ceremony"
              w="100%"
              h="200px"
              objectFit="cover"
              borderRadius="lg"
              mb="4"
            />
            <Heading as="h3" size="lg" color="brand.700" mb="3">Snana Yatra</Heading>
            <Text fontSize="md" lineHeight="1.6" mb="3">
              The sacred bathing ceremony where the deities are bathed with 108 pitchers of water. 
              After this ritual, they retreat for 15 days due to fever (Anasara).
            </Text>
            <Text fontSize="sm" color="brand.600">
              <strong>When:</strong> May-June (Jyeshtha Purnima)
            </Text>
          </Box>

          {/* Chandan Yatra */}
          <Box bg="white" p="6" borderRadius="lg" shadow="md" border="1px solid" borderColor="brand.200">
            <Box bg="brand.100" h="200px" borderRadius="lg" mb="4" display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="4xl">🌊</Text>
            </Box>
            <Heading as="h3" size="lg" color="brand.700" mb="3">Chandan Yatra</Heading>
            <Text fontSize="md" lineHeight="1.6" mb="3">
              A beautiful water festival where representative deities are taken on decorated boats 
              in Narendra Tank, accompanied by devotional music and dance.
            </Text>
            <Text fontSize="sm" color="brand.600">
              <strong>When:</strong> April-May (21 days)
            </Text>
          </Box>

          {/* Dola Yatra */}
          <Box bg="white" p="6" borderRadius="lg" shadow="md" border="1px solid" borderColor="brand.200">
            <Box bg="brand.100" h="200px" borderRadius="lg" mb="4" display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="4xl">🎭</Text>
            </Box>
            <Heading as="h3" size="lg" color="brand.700" mb="3">Dola Yatra</Heading>
            <Text fontSize="md" lineHeight="1.6" mb="3">
              The festival of colors where small idols of the deities are carried in palanquins 
              through the streets while devotees play with colors and dance.
            </Text>
            <Text fontSize="sm" color="brand.600">
              <strong>When:</strong> March (Holi festival time)
            </Text>
          </Box>

          {/* Niladri Bije */}
          <Box bg="white" p="6" borderRadius="lg" shadow="md" border="1px solid" borderColor="brand.200">
            <Box bg="brand.100" h="200px" borderRadius="lg" mb="4" display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="4xl">🏰</Text>
            </Box>
            <Heading as="h3" size="lg" color="brand.700" mb="3">Niladri Bije</Heading>
            <Text fontSize="md" lineHeight="1.6" mb="3">
              The return journey of deities from Gundicha Temple to the main temple, 
              concluding the Rath Yatra festival with great pomp and celebration.
            </Text>
            <Text fontSize="sm" color="brand.600">
              <strong>When:</strong> June-July (9th day after Rath Yatra)
            </Text>
          </Box>
        </SimpleGrid>

        {/* Festival Calendar Overview */}
        <Box bg="brand.600" color="white" p="8" borderRadius="lg" textAlign="center">
          <Heading as="h3" size="lg" mb="6">Festival Calendar</Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing="6">
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb="2">Spring</Text>
              <Text fontSize="sm">Dola Yatra, Chandan Yatra</Text>
            </Box>
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb="2">Summer</Text>
              <Text fontSize="sm">Snana Yatra, Rath Yatra</Text>
            </Box>
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb="2">Monsoon</Text>
              <Text fontSize="sm">Jhulana Yatra, Parsva Parivartana</Text>
            </Box>
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb="2">Winter</Text>
              <Text fontSize="sm">Kartik Purnima, Pushyabhishek</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
} 