import { Container, Box, Heading, Text, Image, SimpleGrid, VStack, HStack } from '@chakra-ui/react';

export default function HistoryPage() {
  return (
    <Box as="main" bg="brand.50" minH="100vh">
      {/* Hero Section */}
      <Box bg="brand.700" color="white" py="16">
        <Container maxW="container.lg">
          <VStack spacing="4" textAlign="center">
            <Heading as="h1" size="3xl" fontFamily="heading" mb="4">
              History of Shree Jagannatha Temple
            </Heading>
            <Text fontSize="xl" maxW="3xl" lineHeight="1.6">
              Journey through millennia of devotion, legend, and divine grace that shaped one of India's most sacred temples
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.lg" py="12">
        {/* Timeline Overview */}
        <Box mb="16">
          <Heading as="h2" size="xl" textAlign="center" color="brand.700" mb="8">
            Timeline of Sacred History
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
            <Box bg="brand.100" border="2px solid" borderColor="brand.300" p="6" textAlign="center" borderRadius="lg">
              <Box bg="brand.600" color="white" px="3" py="1" borderRadius="md" display="inline-block" mb="3" fontSize="sm" fontWeight="bold">
                Ancient Era
              </Box>
              <Heading size="md" color="brand.700" mb="2">Pre-12th Century</Heading>
              <Text fontSize="sm">Tribal worship and early legends</Text>
            </Box>
            <Box bg="brand.100" border="2px solid" borderColor="brand.300" p="6" textAlign="center" borderRadius="lg">
              <Box bg="brand.600" color="white" px="3" py="1" borderRadius="md" display="inline-block" mb="3" fontSize="sm" fontWeight="bold">
                Golden Age
              </Box>
              <Heading size="md" color="brand.700" mb="2">12th-16th Century</Heading>
              <Text fontSize="sm">Temple construction and flourishing</Text>
            </Box>
            <Box bg="brand.100" border="2px solid" borderColor="brand.300" p="6" textAlign="center" borderRadius="lg">
              <Box bg="brand.600" color="white" px="3" py="1" borderRadius="md" display="inline-block" mb="3" fontSize="sm" fontWeight="bold">
                Modern Era
              </Box>
              <Heading size="md" color="brand.700" mb="2">17th Century-Present</Heading>
              <Text fontSize="sm">Revival and contemporary significance</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Origins Section */}
        <Box as="section" mb="12" bg="white" p="8" borderRadius="lg" shadow="md">
          <Heading as="h2" size="xl" mb="6" color="brand.700">
            Origins and Tribal Worship
          </Heading>
          <HStack spacing="8" align="start">
            <VStack flex="1" align="start">
              <Text mb="4" fontSize="lg" lineHeight="1.7">
                Long before the grand temple rose on the eastern coast, local tribal communities revered the cosmic form
                of the divine through simple log carvings and forest shrines. The Sabara tribe, indigenous to the region,
                worshipped Neela Madhaba, a blue-hued deity, in the dense forests of what is now Puri.
              </Text>
              <Text mb="4" fontSize="lg" lineHeight="1.7">
                These folk traditions celebrated the unity of nature and spirit, laying the foundation for the later Jagannatha devotional tradition. The tribal worship emphasized the formless divine taking crude wooden forms, a concept that would become central to Jagannatha worship.
              </Text>
            </VStack>
            <Box flex="1">
              <Image
                src="/assets/temple-old.jpg"
                alt="Old view of Shree Jagannatha Temple"
                borderRadius="lg"
                shadow="lg"
                w="100%"
              />
            </Box>
          </HStack>
        </Box>

        {/* King Indradyumna Legend */}
        <Box as="section" mb="12" bg="white" p="8" borderRadius="lg" shadow="md">
          <Heading as="h2" size="xl" mb="6" color="brand.700">
            The Legend of King Indradyumna
          </Heading>
          <VStack spacing="4" align="start">
            <Text fontSize="lg" lineHeight="1.7">
              The origin of the temple is steeped in legend, most famously involving King Indradyumna of Malwa. 
              According to the Skanda Purana and other sacred texts, the king was a great devotee of Vishnu and 
              was divinely inspired through a dream to find a living form of the Lord on Earth.
            </Text>
            <Text fontSize="lg" lineHeight="1.7">
              He sent emissaries in all directions, and one of them, a Brahmin priest named Vidyapati, returned 
              with news of a secret deity named Neela Madhaba, worshipped by a tribal chief named Viswavasu in 
              a remote forest near the sea. Vidyapati, through great effort and by marrying Viswavasu's daughter 
              Lalita, managed to see the deity after being blindfolded and led through the forest.
            </Text>
            <Text fontSize="lg" lineHeight="1.7">
              However, when King Indradyumna marched to the location with a great army, Neela Madhaba had vanished 
              into the sand. Devastated, the king performed severe penance. A divine voice (Akashvani) instructed 
              him to build a grand temple and that Vishnu would reveal himself in a wooden form (Daru Brahma). 
              The king performed a grand Ashwamedha yajna, and miraculously, a divine fragrant log washed ashore.
            </Text>
            <Text fontSize="lg" lineHeight="1.7">
              From this sacred log, the celestial carpenter Vishwakarma (disguised as an old artisan) agreed to 
              carve the forms of Jagannatha, Balabhadra, and Subhadra, under the strict condition that he not be 
              disturbed for 21 days. When the impatient king, worried by the silence, opened the door on the 15th day, 
              Vishwakarma vanished, leaving the idols unfinished with no hands or feet, just as they are worshipped today.
            </Text>
          </VStack>
        </Box>

        {/* Construction and Dynasties */}
        <Box as="section" mb="12" bg="white" p="8" borderRadius="lg" shadow="md">
          <Heading as="h2" size="xl" mb="6" color="brand.700">
            Construction and Dynasties
          </Heading>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            The present-day temple complex was commissioned in the 12th century (around 1135 CE) by King Anantavarman 
            Chodaganga Deva of the Eastern Ganga dynasty, who united Kalinga and established Puri as a major pilgrimage 
            center. The construction was completed by his descendant Anangabhima Deva III.
          </Text>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            Built in the distinctive Rekha Deul style of Kalinga architecture, the temple features a towering spire, 
            elaborate stone carvings depicting scenes from Hindu epics, and four subsidiary temples dedicated to 
            Balabhadra, Subhadra, and Sudarshana Chakra. The Ganga dynasty's patronage established many of the 
            temple's enduring traditions and rituals.
          </Text>
        </Box>

        {/* Architectural Marvel */}
        <Box as="section" mb="12" bg="white" p="8" borderRadius="lg" shadow="md">
          <Heading as="h2" size="xl" mb="6" color="brand.700">
            Architectural Marvel and Sacred Geometry
          </Heading>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            The temple is a magnificent example of Kalinga architecture, representing the cosmic Mount Meru. 
            The main temple (Vimana) stands majestically on a raised platform and soars over 214 feet high, 
            making it one of the tallest temples in India. The entire complex spans over 400,000 square feet.
          </Text>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            It is surrounded by two concentric walls: the inner Kurma Bedha (Tortoise Enclosure) representing 
            the cosmic turtle that supports the earth, and the outer Meghanada Prachira (Cloud-Sound Wall) 
            that echoes the cosmic sound of creation. The complex houses at least 120 temples and shrines, 
            each with its own significance and purpose.
          </Text>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            The main temple is crowned with the sacred Nila Chakra (Blue Wheel), made of an eight-metal alloy 
            (Asta Dhatu), weighing nearly a ton. A unique divine phenomenon is that the flag atop the temple 
            always flutters in the opposite direction of the wind, and the temple casts no shadow at any time 
            of the day, mystifying visitors and scientists alike.
          </Text>
        </Box>

        {/* Invasions and Protection */}
        <Box as="section" mb="12" bg="white" p="8" borderRadius="lg" shadow="md">
          <Heading as="h2" size="xl" mb="6" color="brand.700">
            Invasions and Divine Protection
          </Heading>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            The temple has withstood numerous invasions and desecrations, primarily from Muslim rulers, between 
            the 12th and 18th centuries. The most devastating was by the Afghan general Kalapahad in 1568, 
            who destroyed many temples across Odisha. However, the main shrine of Jagannatha survived due to 
            the quick thinking of devoted priests and kings.
          </Text>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            During these turbulent times, the sacred idols were often secretly moved and hidden in remote 
            locations by the temple priests and Gajapati kings, demonstrating incredible courage and devotion. 
            The famous hiding places included the jungles of Chilika, caves near Bhubaneswar, and even underwater 
            chambers, protected by loyal tribal communities.
          </Text>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            The temple was rebuilt and reconsecrated multiple times, each resurrection strengthening the faith 
            of millions. These trials transformed the temple into not just a place of worship, but a symbol 
            of cultural resistance and spiritual resilience.
          </Text>
        </Box>

        {/* Rath Yatra */}
        <Box as="section" mb="12" bg="white" p="8" borderRadius="lg" shadow="md">
          <Heading as="h2" size="xl" mb="6" color="brand.700">
            The Grand Rath Yatra: Festival of the Universe
          </Heading>
          <HStack spacing="8" align="start">
            <VStack flex="1" align="start">
              <Text mb="4" fontSize="lg" lineHeight="1.7">
                Since ancient times, the annual Ratha Yatra (Chariot Festival) has drawn millions to Puri, 
                making it one of the world's largest religious gatherings. The festival typically occurs in 
                June-July (Ashadha month) and involves three magnificent wooden chariots carrying the deities 
                from the main temple to the Gundicha Temple, 3 kilometers away.
              </Text>
              <Text mb="4" fontSize="lg" lineHeight="1.7">
                The three chariots - Nandighosa (for Jagannatha), Taladhwaja (for Balabhadra), and Darpadalana 
                (for Subhadra) - are rebuilt every year using specific types of wood and traditional techniques. 
                The construction involves hundreds of craftsmen and takes several weeks to complete.
              </Text>
              <Text mb="4" fontSize="lg" lineHeight="1.7">
                This vibrant procession symbolizes Lord Jagannatha's annual visit to his aunt's home (Gundicha Temple), 
                representing the divine reaching out to devotees. The festival embodies the principle that God belongs 
                to everyone, as people from all castes and communities can touch the chariots and offer prayers.
              </Text>
            </VStack>
            <Box flex="1">
              <Image
                src="/assets/RathYatra.jpg"
                alt="Rath Yatra Festival"
                borderRadius="lg"
                shadow="lg"
                w="100%"
              />
            </Box>
          </HStack>
        </Box>

        {/* Mahaprasad */}
        <Box as="section" mb="12" bg="white" p="8" borderRadius="lg" shadow="md">
          <Heading as="h2" size="xl" mb="6" color="brand.700">
            The Culture of Mahaprasad
          </Heading>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            The temple kitchen (Rosaghara) is one of the largest in the world, feeding thousands of devotees daily. 
            The food, known as Mahaprasad, is cooked in earthen pots on wood fires, following strict ancient protocols 
            that have remained unchanged for centuries. Over 1000 cooks and helpers work in this sacred kitchen.
          </Text>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            The preparation involves 56 different varieties of offerings (Chappan Bhog) including rice, dal, vegetables, 
            sweets, and savories. The cooking process itself is considered a sacred ritual, with specific mantras chanted 
            during preparation. The miraculous aspect is that the food never falls short, no matter how many devotees arrive.
          </Text>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            Mahaprasad is first offered to Lord Jagannatha and then becomes available to all, regardless of caste, 
            creed, or social status, symbolizing divine equality and grace. Even kings and emperors have sat together 
            with commoners to partake in this sacred meal, reinforcing the temple's message of universal brotherhood.
          </Text>
        </Box>

        {/* Nabakalebara */}
        <Box as="section" mb="12" bg="white" p="8" borderRadius="lg" shadow="md">
          <Heading as="h2" size="xl" mb="6" color="brand.700">
            Nabakalebara: The Sacred Rebirth
          </Heading>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            Nabakalebara is one of the most mysterious and sacred rituals in Hinduism, involving the replacement of 
            the old wooden idols with new ones. This extraordinary ceremony occurs every 12 to 19 years, specifically 
            when a year has two months of Ashadha (Adhika Masa), a rare lunar calendar anomaly.
          </Text>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            The process begins with a secret search for the sacred 'Daru' (neem wood trees with specific divine marks) 
            undertaken by a special team of priests called Daita servitors. These trees must exhibit particular 
            characteristics: they should be near a crematorium, have a Brahmin settlement nearby, be infested with 
            specific insects, and bear divine symbols.
          </Text>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            Once found, the logs are brought to the temple in a grand procession, and new idols are carved in complete 
            secrecy within the temple premises. The most mystical part is the transfer of the 'Brahma Padartha' 
            (soul-substance) from the old idols to the new ones - a ritual so sacred that it occurs in complete darkness 
            with only the chief priest present, his eyes covered.
          </Text>
        </Box>

        {/* Cultural Impact */}
        <Box as="section" mb="12" bg="white" p="8" borderRadius="lg" shadow="md">
          <Heading as="h2" size="xl" mb="6" color="brand.700">
            Cultural Impact and Literary Heritage
          </Heading>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            The temple has inspired countless poets, philosophers, and saints throughout history. The great Vaishnava 
            saint Chaitanya Mahaprabhu spent the last 18 years of his life in Puri, establishing it as a major center 
            of Bhakti movement. His ecstatic devotion to Jagannatha transformed the temple's spiritual landscape.
          </Text>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            Medieval Odia literature flourished under the temple's patronage, with poets like Jayadeva (author of 
            Gita Govinda), Sarala Dasa, and others creating immortal works dedicated to Jagannatha. The temple also 
            influenced classical music and dance, with the Odissi dance form having deep connections to Jagannatha worship.
          </Text>
        </Box>

        {/* Modern Era */}
        <Box as="section" mb="12" bg="white" p="8" borderRadius="lg" shadow="md">
          <Heading as="h2" size="xl" mb="6" color="brand.700">
            Modern Era and Global Recognition
          </Heading>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            Today, the Shree Jagannatha Temple stands as both a living center of daily worship and a symbol of Odisha's 
            rich cultural heritage. Managed by the Puri Shree Jagannatha Temple Administration (a government body), 
            it continues to maintain ancient traditions while adapting to modern pilgrimage needs.
          </Text>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            The temple attracts over a million pilgrims annually and has gained international recognition. It remains 
            a candidate for UNESCO World Heritage status, representing not just architectural excellence but also 
            living religious traditions that have continued unbroken for nearly a millennium.
          </Text>
          <Text mb="4" fontSize="lg" lineHeight="1.7">
            The temple's influence extends globally through the International Society for Krishna Consciousness (ISKCON), 
            which has established Jagannatha temples worldwide. The annual Rath Yatra is now celebrated in major cities 
            across the globe, spreading the message of Lord Jagannatha's universal love and compassion.
          </Text>
        </Box>

        <Box height="1px" bg="brand.300" my="8" />
        
        <Box textAlign="center" py="8">
          <Text fontSize="lg" fontStyle="italic" color="brand.700">
            "The history of Shree Jagannatha Temple is not just a chronicle of stones and rituals, 
            but a living testament to the eternal human quest for the divine."
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
