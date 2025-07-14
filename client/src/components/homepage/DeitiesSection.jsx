import { Box, Heading, Text, SimpleGrid, Card, Image } from '@chakra-ui/react';

export default function DeitiesSection() {
  const deities = [
    {
      name: "Lord Jagannatha",
      description: "The Lord of the Universe, a form of Vishnu. His large, round eyes signify his compassion for all beings.",
      image: "/assets/temple-new.jpg" // Placeholder
    },
    {
      name: "Lord Balabhadra",
      description: "The elder brother of Jagannatha, considered to be an incarnation of Shesha.",
      image: "/assets/temple-old.jpg" // Placeholder
    },
    {
      name: "Devi Subhadra",
      description: "The sister of Jagannatha and Balabhadra, a symbol of divine energy.",
      image: "/assets/temple-new.jpg" // Placeholder
    }
  ];

  return (
    <Box as="section" py="20" bg="brand.50">
      <Box maxW="container.lg" mx="auto" px="6" textAlign="center">
        <Heading as="h2" size="2xl" fontFamily="heading" color="brand.700" mb="12">
          The Holy Trinity
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
          {deities.map((deity, index) => (
            <Card.Root key={index} shadow="lg" _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s' }}>
              <Card.Body>
                <Image src={deity.image} alt={deity.name} borderRadius="full" boxSize="32" mx="auto" mb="4" objectFit="contain" />
                <Heading as="h3" size="xl" fontFamily="heading" color="brand.600" mb="2">
                  {deity.name}
                </Heading>
                <Text color="brand.900">
                  {deity.description}
                </Text>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
} 