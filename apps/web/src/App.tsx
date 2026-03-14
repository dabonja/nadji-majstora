import React, { useState } from 'react';
import { Box, Button, Heading, VStack, Input, SimpleGrid, Text } from '@chakra-ui/react';

type Master = {
  id: number;
  name: string;
  profession: string;
  city: string;
};

const mastersData: Master[] = [
  { id: 1, name: "Marko Marković", profession: "Vodoinstalater", city: "Beograd" },
  { id: 2, name: "Jovana Jovanović", profession: "Električar", city: "Novi Sad" },
  { id: 3, name: "Ivan Ivić", profession: "Vodoinstalater", city: "Beograd" },
];

export default function App() {
  const [profession, setProfession] = useState('');
  const [city, setCity] = useState('');

  const filteredMasters = mastersData.filter(
    (m) =>
      (profession ? m.profession.toLowerCase().includes(profession.toLowerCase()) : true) &&
      (city ? m.city.toLowerCase().includes(city.toLowerCase()) : true)
  );

  return (
    <VStack spacing={6} p={8}>
      <Heading>Nadji Majstora</Heading>

      <VStack spacing={4} w="100%">
        <Input
          placeholder="Profesija"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
        <Input
          placeholder="Grad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} w="100%">
        {filteredMasters.map(master => (
          <Box key={master.id} p={4} borderWidth="1px" borderRadius="md">
            <Text fontWeight="bold">{master.name}</Text>
            <Text>{master.profession}</Text>
            <Text>{master.city}</Text>
            <Button colorScheme="blue" mt={2} w="full">Kontaktiraj</Button>
          </Box>
        ))}
        {filteredMasters.length === 0 && <Text>Nema rezultata za zadate kriterijume</Text>}
      </SimpleGrid>
    </VStack>
  );
}