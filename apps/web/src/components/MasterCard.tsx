import React from 'react';
import { Box, Button, Text, Badge, HStack, VStack } from '@chakra-ui/react';

type MasterProps = {
  name: string;
  profession: string;
  city: string;
  rating: number;       // 1-5
  available: boolean;
  busyUntil?: string;   // ako nije dostupan
};

export default function MasterCard({ name, profession, city, rating, available, busyUntil }: MasterProps) {
  return (
    <Box
      p={6}
      borderWidth="1px"
      borderRadius="md"
      shadow="sm"
      _hover={{ shadow: 'md', transform: 'translateY(-4px)', transition: 'all 0.2s' }}
    >
      <VStack align="start" spacing={2}>
        <Text fontWeight="bold" fontSize="lg">{name}</Text>
        <Text color="gray.600">{profession} - {city}</Text>

        {/* Status dostupnosti */}
        <Badge mt={1} colorScheme={available ? 'green' : 'red'}>
          {available ? 'Dostupan' : `Zauzet do ${busyUntil}`}
        </Badge>

        {/* Rejting zvezdice iznad dugmeta */}
        <HStack spacing={1} mt={3}>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Box key={i} color={i < rating ? 'yellow.400' : 'gray.300'} />
            ))}
        </HStack>

        {/* Dugme za kontakt */}
        <Button mt={2} colorScheme="blue" w="full">
          Kontaktiraj
        </Button>
      </VStack>
    </Box>
  );
}