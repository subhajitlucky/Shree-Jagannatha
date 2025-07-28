import { Container, Heading, Text, Box, VStack, HStack } from '@chakra-ui/react';

export default function FAQsPage() {
  const faqs = [
    {
      question: "Can I bring my mobile phone or camera inside the temple?",
      answer: "Mobile phones and cameras are not allowed inside the main sanctum. However, photography is permitted in the outer areas of the temple complex. There are secure cloak rooms available to store your devices."
    },
    {
      question: "What should I wear when visiting the temple?",
      answer: "Modest clothing is required - shoulders and knees must be covered. Traditional Indian attire like dhoti, kurta, saree, or salwar kameez is recommended. Avoid shorts, sleeveless tops, or revealing clothing."
    },
    {
      question: "Are shoes allowed inside the temple?",
      answer: "No footwear of any kind is allowed inside the temple premises. Free shoe storage counters are available outside the temple where you can safely keep your shoes."
    },
    {
      question: "What leather items are prohibited?",
      answer: "All leather items including belts, bags, wallets, and purses are strictly prohibited inside the temple. Use the cloak room facilities to store these items safely."
    },
    {
      question: "Where can I buy prasada (sacred food)?",
      answer: "Authentic prasada is available from authorized vendors near the temple. Look for the official prasada counters. Avoid buying from unauthorized sellers to ensure authenticity."
    },
    {
      question: "Is there a dress rental service near the temple?",
      answer: "Yes, there are several shops near the temple that rent traditional Indian clothing. You can rent dhoti-kurta for men and sarees for women at reasonable rates."
    },
    {
      question: "Are there facilities for elderly and disabled visitors?",
      answer: "Yes, the temple provides wheelchair access and assistance for elderly and disabled visitors. There are ramps and dedicated pathways, and volunteers are available to help."
    },
    {
      question: "What are the best times to visit for darshan?",
      answer: "Early morning (6-8 AM) and evening (7-9 PM) are the best times for peaceful darshan. Avoid 11 AM to 1 PM when it's most crowded. During festivals, arrive very early."
    },
    {
      question: "Are there medical facilities near the temple?",
      answer: "Yes, there are medical facilities and first aid centers near the temple complex. For serious medical emergencies, the district hospital is located about 2 km away."
    },
    {
      question: "Can foreigners visit the temple?",
      answer: "No, only Hindus are allowed inside the main sanctum. Foreign visitors may explore the outer temple complex but are not permitted inside the inner sanctum. All visitors must follow the prescribed dress code and temple regulations."
    },
    {
      question: "Is there a separate queue for senior citizens?",
      answer: "Yes, there are special arrangements and shorter queues for senior citizens, pregnant women, and disabled visitors. Look for the designated counters."
    },
    {
      question: "What is the significance of touching the chariot during Rath Yatra?",
      answer: "During Rath Yatra, it's believed that touching the chariot ropes or wheels and helping pull the chariot brings divine blessings and fulfills wishes. This is open to all devotees regardless of caste or creed."
    },
    {
      question: "Are there restroom facilities available?",
      answer: "Yes, clean and well-maintained restroom facilities are available near the temple complex for the convenience of pilgrims and visitors."
    },
    {
      question: "Can I bring food items inside the temple?",
      answer: "Outside food items are generally not allowed inside the temple premises. However, you can purchase prasada and approved offerings from authorized vendors."
    },
    {
      question: "What languages do the temple guides speak?",
      answer: "Temple guides typically speak Hindi, English, and Odia. Some guides may also know other regional languages. Official guide services are available at the information counter."
    }
  ];

  return (
    <Box as="main" bg="brand.50" minH="100vh">
      {/* Hero Section */}
      <Box bg="brand.700" color="white" py="16">
        <Container maxW="container.lg">
          <VStack spacing="4" textAlign="center">
            <Heading as="h1" size="3xl" fontFamily="heading" mb="4">
              Frequently Asked Questions
            </Heading>
            <Text fontSize="xl" maxW="3xl" lineHeight="1.6">
              Find answers to common questions about visiting the Shree Jagannatha Temple
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py="12">
        {/* Quick Tips */}
        <Box bg="brand.100" p="6" borderRadius="lg" mb="12" border="1px solid" borderColor="brand.200">
          <Heading as="h2" size="lg" mb="4" color="brand.700">Quick Visitor Tips</Heading>
          <VStack align="start" spacing="2">
            <HStack>
              <Text fontSize="lg">💡</Text>
              <Text>Arrive early morning for peaceful darshan</Text>
            </HStack>
            <HStack>
              <Text fontSize="lg">👕</Text>
              <Text>Wear traditional modest clothing</Text>
            </HStack>
            <HStack>
              <Text fontSize="lg">👟</Text>
              <Text>Use free shoe storage counters</Text>
            </HStack>
            <HStack>
              <Text fontSize="lg">📱</Text>
              <Text>Store phones and leather items in cloak room</Text>
            </HStack>
          </VStack>
        </Box>

        {/* FAQ List */}
        <Box bg="white" borderRadius="lg" shadow="md" p="6">
          <Heading as="h2" size="xl" mb="6" color="brand.700" textAlign="center">
            Common Questions & Answers
          </Heading>
          <VStack align="stretch" spacing="4">
            {faqs.map((faq, idx) => (
              <Box key={idx} borderBottom="1px solid" borderColor="brand.200" pb="4">
                <details>
                  <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                    {faq.question}
                  </summary>
                  <Text mt="2" fontSize="md" lineHeight="1.6" color="brand.600">
                    {faq.answer}
                  </Text>
                </details>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Still Have Questions */}
        <Box bg="brand.600" color="white" p="8" borderRadius="lg" textAlign="center" mt="12">
          <Heading as="h3" size="lg" mb="4">Still Have Questions?</Heading>
          <Text fontSize="lg" mb="4">
            Our temple information desk is always ready to help you with any additional queries.
          </Text>
          <Text fontSize="md" opacity="0.9">
            Visit the Help Desk near the temple entrance or contact us through our official channels.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
