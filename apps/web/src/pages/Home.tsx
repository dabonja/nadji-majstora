// src/pages/Home.tsx
import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  Select,
} from '@chakra-ui/react';
import MasterCard from '../components/MasterCard';
import { masters } from '../services/mockMasters';

export default function Home() {
  const [filter, setFilter] = useState<string>('Svi');

  // Dohvatimo sve jedinstvene profesije
  const professions = ['Svi', ...Array.from(new Set(masters.map((m) => m.profession)))];

  // Filtriramo majstore po profesiji i dostupnosti
  const filteredMasters = masters
    .filter((m) => filter === 'Svi' || m.profession === filter)
    .sort((a, b) => (a.available === b.available ? 0 : a.available ? -1 : 1));

  return (
    <Box p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Naši majstori
      </Text>

      {/* Filter po profesiji */}
      <Select
        w="200px"
        mb={6}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        {professions.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </Select>

      {/* Lista majstora */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {filteredMasters.map((m) => (
          <MasterCard key={m.id} {...m} />
        ))}
      </SimpleGrid>
    </Box>
  );
}