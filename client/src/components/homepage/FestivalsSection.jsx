import { Box, Heading, Text, SimpleGrid, Card, Image } from '@chakra-ui/react';

export default function FestivalsSection() {
  const festivals = [
    {
      name: "Rath Yatra",
      description: "The grand chariot festival, where the deities embark on a public procession.",
      image: "/assets/RathYatra.jpg"
    },
    {
      name: "Snana Yatra",
      description: "The divine bathing ceremony of the deities, a prelude to the Rath Yatra.",
      image: "/assets/snanajatra.jpeg"
    },
    {
      name: "Nabakalebara",
      description: "The unique and sacred ritual of the recreation of the wooden idols.",
      image: "/assets/nabakalebara.jpg"
    }
  ];

  return (
    <Box as="section" py="20" bg="brand.100">
      <Box maxW="container.lg" mx="auto" px="6" textAlign="center">
        <Heading as="h2" size="2xl" fontFamily="heading" color="brand.700" mb="12">
          Major Festivals
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: "8", md: "12" }} gap="6">
          {festivals.map((festival, index) => (
            <Card.Root key={index} shadow="2xl" mx="2" border="1px solid" borderColor="brand.200">
              <Image src={festival.image} alt={festival.name} h="48" objectFit="contain" />
              <Card.Body p="6">
                <Heading as="h3" size="xl" fontFamily="heading" color="brand.600" mb="2">
                  {festival.name}
                </Heading>
                <Text color="brand.900">
                  {festival.description}
                </Text>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
} 