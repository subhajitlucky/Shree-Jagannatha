import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function HeroSection() {
  return (
    <Box
      position="relative"
      bgImage="url('/assets/temple-new.jpg')"
      bgSize="cover"
      bgPosition="center"
      h="85vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Box position="absolute" inset="0" bg="black" opacity="0.5" />
      <Box position="relative" zIndex="10" p="4">
        <Heading as="h1" size={{ base: '3xl', md: '4xl' }} fontFamily="heading" color="white" mb="4">
          Experience the Divine
        </Heading>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="white" mb="8">
          Discover the ancient traditions and spiritual serenity of the Shree Jagannatha Temple.
        </Text>
        <Button colorPalette="brand" size="lg" rounded="full">
          Explore the History
        </Button>
      </Box>
    </Box>
  );
} 