import { Container, Heading, Text } from '@chakra-ui/react';

export default function GalleryPage() {
  return (
    <Container.Root maxW="container.lg" py="10">
      <Heading as="h1" size="2xl" mb="6">Gallery</Heading>
      <Text>View stunning images of the temple and festivals. [Add gallery here]</Text>
    </Container.Root>
  );
} 