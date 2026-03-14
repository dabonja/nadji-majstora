// src/pages/Home.tsx
import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  Select,
  Button,
  HStack,
} from '@chakra-ui/react';
import MasterCard from '../components/MasterCard';
import { masters } from '../services/mockMasters';
import type { Account } from '../services/mockAccounts';
import { useNavigate } from 'react-router-dom';

interface HomeProps {
  currentUser: Account;
} 

export default function Home({currentUser}: HomeProps) {
  const [filter, setFilter] = useState<string>('Svi');
  const navigate = useNavigate();
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

     <HStack>
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
  {currentUser.role === 'user' && (
        <Button
          colorScheme="teal"
          mb={4}
          onClick={() => navigate('/create-job')}
        >
          Kreiraj ponudu
        </Button>
      )}
     </HStack>
      {/* Lista majstora */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {filteredMasters.map((m) => (
          <MasterCard master={m} key={m.id} {...m} />
        ))}
      </SimpleGrid>
    </Box>
  );
}