import { Container, Heading, Text, Box, Image, SimpleGrid, VStack, HStack } from '@chakra-ui/react';

export default function DeitiesPage() {
  return (
    <Box as="main" bg="brand.50" minH="100vh">
      {/* Hero Section */}
      <Box bg="brand.700" color="white" py="16">
        <Container maxW="container.lg">
          <VStack spacing="4" textAlign="center">
            <Heading as="h1" size="3xl" fontFamily="heading" mb="4">
              The Sacred Trinity
            </Heading>
            <Text fontSize="xl" maxW="3xl" lineHeight="1.6">
              Meet the divine siblings worshipped by millions - Lord Jagannatha, Lord Balabhadra, and Devi Subhadra
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py="12">
        {/* Main Deities Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="10" mb="16">
          {/* Lord Jagannatha */}
          <Box bg="white" p="8" borderRadius="lg" shadow="lg" textAlign="center" border="1px solid" borderColor="brand.200">
            <Image
              src="/assets/lordjagannatha.jpeg"
              alt="Lord Jagannatha"
              w="100%"
              h="300px"
              objectFit="cover"
              mb="6"
              borderRadius="lg"
              shadow="md"
            />
            <Heading as="h2" size="xl" mb="4" color="brand.700">Lord Jagannatha</Heading>
            <Text fontSize="lg" color="brand.600" lineHeight="1.8" mb="4">
              The Lord of the Universe, depicted in dark blue-black color representing the infinite cosmos. 
              His large round eyes symbolize all-seeing compassion that embraces every soul.
            </Text>
            <Box bg="brand.50" p="4" borderRadius="md">
              <Text fontSize="sm" fontWeight="bold" color="brand.700" mb="2">Significance:</Text>
              <Text fontSize="sm" color="brand.600">
                The incomplete form represents the formless divine taking shape for devotees. 
                His smile radiates eternal bliss and unconditional love.
              </Text>
            </Box>
          </Box>

          {/* Lord Balabhadra */}
          <Box bg="white" p="8" borderRadius="lg" shadow="lg" textAlign="center" border="1px solid" borderColor="brand.200">
            <Image
              src="/assets/lordbalabhadra.jpg"
              alt="Lord Balabhadra"
              w="100%"
              h="300px"
              objectFit="cover"
              mb="6"
              borderRadius="lg"
              shadow="md"
            />
            <Heading as="h2" size="xl" mb="4" color="brand.700">Lord Balabhadra</Heading>
            <Text fontSize="lg" color="brand.600" lineHeight="1.8" mb="4">
              The elder brother, depicted in pure white, symbolizing righteousness, strength, and divine protection. 
              He represents the cosmic serpent Adishesha who supports the universe.
            </Text>
            <Box bg="brand.50" p="4" borderRadius="md">
              <Text fontSize="sm" fontWeight="bold" color="brand.700" mb="2">Significance:</Text>
              <Text fontSize="sm" color="brand.600">
                Guardian and protector of dharma. His presence brings stability, courage, 
                and moral strength to devotees.
              </Text>
            </Box>
          </Box>

          {/* Devi Subhadra */}
          <Box bg="white" p="8" borderRadius="lg" shadow="lg" textAlign="center" border="1px solid" borderColor="brand.200">
            <Image
              src="/assets/lordsubhadra.jpg"
              alt="Devi Subhadra"
              w="100%"
              h="300px"
              objectFit="cover"
              mb="6"
              borderRadius="lg"
              shadow="md"
            />
            <Heading as="h2" size="xl" mb="4" color="brand.700">Devi Subhadra</Heading>
            <Text fontSize="lg" color="brand.600" lineHeight="1.8" mb="4">
              The divine sister depicted in golden-yellow, embodying compassion, grace, and maternal love. 
              She represents the divine feminine principle that nurtures all creation.
            </Text>
            <Box bg="brand.50" p="4" borderRadius="md">
              <Text fontSize="sm" fontWeight="bold" color="brand.700" mb="2">Significance:</Text>
              <Text fontSize="sm" color="brand.600">
                The embodiment of divine shakti and compassion. Her blessings bring peace, 
                prosperity, and spiritual fulfillment.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>

        {/* Nabakalebara Section */}
        <Box bg="white" p="8" borderRadius="lg" shadow="md" mb="12">
          <Heading as="h2" size="xl" mb="6" color="brand.700" textAlign="center">
            Nabakalebara: The Sacred Renewal
          </Heading>
          <HStack spacing={{ base: "0", md: "8" }} align="stretch" flexDirection={{ base: "column", md: "row" }}>
            <Box order={{ base: "1", md: "2" }} mb={{ base: "6", md: "0" }} flex={{ base: "none", md: "1" }}>
              <Image
                src="/assets/nabakalebara.jpg"
                alt="Nabakalebara ceremony"
                borderRadius="lg"
                shadow="lg"
                w="100%"
                h={{ base: "250px", md: "100%" }}
                minH={{ md: "300px" }}
                objectFit="cover"
              />
            </Box>
            <VStack flex="1" align="start" order={{ base: "2", md: "1" }} spacing="4">
              <Text fontSize="lg" lineHeight="1.8" mb="4">
                Every 12-19 years, the wooden idols undergo Nabakalebara - a mystical renewal ceremony where 
                new idols are carved from sacred neem trees. This ancient ritual symbolizes the eternal cycle 
                of life, death, and rebirth.
              </Text>
              <Text fontSize="lg" lineHeight="1.8" mb="4">
                The ceremony involves finding specific neem trees with prescribed characteristics, guided by 
                divine signs and dreams. The carving is done in complete secrecy, and the life-essence 
                (Brahmapadartha) is transferred from the old idols to the new ones.
              </Text>
              <Text fontSize="lg" lineHeight="1.8">
                This unique tradition, found nowhere else in the world, reinforces the belief that the divine 
                transcends physical form while choosing to manifest for the devotees' sake.
              </Text>
            </VStack>
          </HStack>
        </Box>

        {/* Worship Timings */}
        <Box bg="brand.600" color="white" p="8" borderRadius="lg" textAlign="center">
          <Heading as="h3" size="lg" mb="6">Daily Worship Schedule</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
            <Box>
              <Text fontSize="2xl" fontWeight="bold" mb="2">5:00 AM</Text>
              <Text>Mangala Arati (Morning Worship)</Text>
            </Box>
            <Box>
              <Text fontSize="2xl" fontWeight="bold" mb="2">12:00 PM</Text>
              <Text>Madhyanha Dhupa (Afternoon Offering)</Text>
            </Box>
            <Box>
              <Text fontSize="2xl" fontWeight="bold" mb="2">7:00 PM</Text>
              <Text>Sandhya Arati (Evening Worship)</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}