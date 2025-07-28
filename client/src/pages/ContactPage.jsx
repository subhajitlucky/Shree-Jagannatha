import { Container, Heading, Text, Box, VStack, HStack, SimpleGrid, Link, Icon } from '@chakra-ui/react';
import { FiPhone, FiMail, FiExternalLink } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <Box as="main" bg="brand.50" minH="100vh">
      {/* Hero Section */}
      <Box bg="brand.700" color="white" py="16">
        <Container maxW="container.lg">
          <VStack spacing="4" textAlign="center">
            <Heading as="h1" size="3xl" fontFamily="heading" mb="4">
              Contact Information
            </Heading>
            <Text fontSize="xl" maxW="3xl" lineHeight="1.6">
              Get in touch with the temple administration for assistance and information
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py="12">
        {/* Main Contact Information */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="12" mb="12">
          {/* Temple Administration */}
          <Box bg="white" p="8" borderRadius="lg" shadow="md" border="1px solid" borderColor="brand.200">
            <VStack align="start" spacing="6">
              <Heading as="h2" size="xl" color="brand.700">Temple Administration</Heading>
              
              <VStack align="start" spacing="4" w="100%">
                <Box>
                  <Text fontWeight="bold" color="brand.700" mb="2">📍 Address:</Text>
                  <Text lineHeight="1.6">
                    Shree Jagannatha Temple Administration<br/>
                    Bada Danda, Puri - 752001<br/>
                    Odisha, India
                  </Text>
                </Box>
                
                <Box>
                  <HStack spacing="3" mb="2">
                    <Icon as={FiPhone} color="brand.600" boxSize="5" />
                    <Text fontWeight="bold" color="brand.700">Phone:</Text>
                  </HStack>
                  <VStack align="start" spacing="1">
                    <Text>Temple Office: +91-6752-222664</Text>
                    <Text>Information Desk: +91-6752-222555</Text>
                    <Text>Emergency Contact: +91-6752-222000</Text>
                  </VStack>
                </Box>
                
                <Box>
                  <HStack spacing="3" mb="2">
                    <Icon as={FiMail} color="brand.600" boxSize="5" />
                    <Text fontWeight="bold" color="brand.700">Email:</Text>
                  </HStack>
                  <VStack align="start" spacing="1">
                    <Link href="mailto:admin@jagannathtemple.org" color="brand.600" _hover={{ textDecoration: 'underline' }}>
                      admin@jagannathtemple.org
                    </Link>
                    <Link href="mailto:info@jagannathtemple.org" color="brand.600" _hover={{ textDecoration: 'underline' }}>
                      info@jagannathtemple.org
                    </Link>
                  </VStack>
                </Box>
              </VStack>
            </VStack>
          </Box>

          {/* Visitor Services */}
          <Box bg="white" p="8" borderRadius="lg" shadow="md" border="1px solid" borderColor="brand.200">
            <VStack align="start" spacing="6">
              <Heading as="h2" size="xl" color="brand.700">Visitor Services</Heading>
              
              <VStack align="start" spacing="4" w="100%">
                <Box>
                  <Text fontWeight="bold" color="brand.700" mb="2">🕐 Office Hours:</Text>
                  <Text lineHeight="1.6">
                    Monday - Sunday: 8:00 AM - 6:00 PM<br/>
                    Temple Timings: 5:00 AM - 10:00 PM
                  </Text>
                </Box>
                
                <Box>
                  <Text fontWeight="bold" color="brand.700" mb="2">ℹ️ Information Services:</Text>
                  <VStack align="start" spacing="1">
                    <Text>• Temple darshan timings</Text>
                    <Text>• Festival calendar information</Text>
                    <Text>• Accommodation guidance</Text>
                    <Text>• Transportation assistance</Text>
                    <Text>• Special arrangements for groups</Text>
                  </VStack>
                </Box>
                
                <Box>
                  <Text fontWeight="bold" color="brand.700" mb="2">🆘 Emergency Services:</Text>
                  <VStack align="start" spacing="1">
                    <Text>Medical Emergency: 108</Text>
                    <Text>Police: 100</Text>
                    <Text>Fire: 101</Text>
                    <Text>Tourist Helpline: 1363</Text>
                  </VStack>
                </Box>
              </VStack>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Location Map */}
        <Box bg="white" p="8" borderRadius="lg" shadow="md" mb="12">
          <Heading as="h2" size="xl" mb="6" color="brand.700" textAlign="center">
            Temple Location
          </Heading>
          
          <Box borderRadius="lg" overflow="hidden" shadow="md" h="400px" bg="brand.100">
            {/* Placeholder for Google Maps embed */}
            <Box 
              h="100%" 
              display="flex" 
              alignItems="center" 
              justifyContent="center" 
              flexDirection="column"
              textAlign="center"
              p="8"
            >
              <Text fontSize="6xl" mb="4">📍</Text>
              <Text fontSize="xl" fontWeight="bold" color="brand.700" mb="2">
                Shree Jagannatha Temple, Puri
              </Text>
              <Text color="brand.600" mb="4">
                Bada Danda, Puri, Odisha 752001
              </Text>
              <Link 
                href="https://maps.google.com/?q=Jagannath+Temple+Puri" 
                isExternal 
                color="brand.600" 
                fontWeight="bold"
                _hover={{ textDecoration: 'underline' }}
              >
                Open in Google Maps <Icon as={FiExternalLink} boxSize="4" ml="1" />
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Important Numbers */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6" mb="12">
          <Box bg="white" p="6" borderRadius="lg" shadow="md" textAlign="center" border="1px solid" borderColor="brand.200">
            <Text fontSize="3xl" mb="3">🏥</Text>
            <Heading as="h3" size="md" mb="2" color="brand.700">Medical Emergency</Heading>
            <Text fontWeight="bold" fontSize="lg" color="brand.600">108</Text>
            <Text fontSize="sm" color="brand.500">24/7 Emergency Services</Text>
          </Box>
          
          <Box bg="white" p="6" borderRadius="lg" shadow="md" textAlign="center" border="1px solid" borderColor="brand.200">
            <Text fontSize="3xl" mb="3">🚔</Text>
            <Heading as="h3" size="md" mb="2" color="brand.700">Police</Heading>
            <Text fontWeight="bold" fontSize="lg" color="brand.600">100</Text>
            <Text fontSize="sm" color="brand.500">Local Police Station</Text>
          </Box>
          
          <Box bg="white" p="6" borderRadius="lg" shadow="md" textAlign="center" border="1px solid" borderColor="brand.200">
            <Text fontSize="3xl" mb="3">🧳</Text>
            <Heading as="h3" size="md" mb="2" color="brand.700">Tourist Helpline</Heading>
            <Text fontWeight="bold" fontSize="lg" color="brand.600">1363</Text>
            <Text fontSize="sm" color="brand.500">Odisha Tourism</Text>
          </Box>
        </SimpleGrid>

        {/* Social Media & Official Links */}
        <Box bg="brand.600" color="white" p="8" borderRadius="lg" textAlign="center">
          <Heading as="h3" size="lg" mb="6">Stay Connected</Heading>
          
          <VStack spacing="4">
            <Text fontSize="lg" mb="4">
              Follow official channels for latest updates on temple events and festivals
            </Text>
            
            <HStack spacing="6" justify="center" wrap="wrap">
              <Link href="#" color="white" _hover={{ color: "brand.200" }}>
                📘 Facebook
              </Link>
              <Link href="#" color="white" _hover={{ color: "brand.200" }}>
                🐦 Twitter
              </Link>
              <Link href="#" color="white" _hover={{ color: "brand.200" }}>
                📸 Instagram
              </Link>
              <Link href="#" color="white" _hover={{ color: "brand.200" }}>
                📺 YouTube
              </Link>
            </HStack>
            
            <Text fontSize="sm" opacity="0.9" mt="4">
              Please verify official accounts before following. Beware of fake social media profiles.
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
