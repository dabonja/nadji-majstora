// src/components/MasterCard.tsx
import { Box, Text, Badge, HStack, VStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import type { Master } from '../services/mockMasters';

interface Props extends Master {}

const MasterCard = ({ id, name, profession, rating, available }: Props) => {
  const navigate = useNavigate();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      cursor="pointer"
      _hover={{ shadow: 'md', transform: 'scale(1.02)' }}
      onClick={() => navigate(`/master/${id}`)}
    >
      <VStack align="start" spacing={2}>
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Text color="gray.500">{profession}</Text>
        <HStack>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              color={i < Math.round(rating) ? 'yellow.400' : 'gray.300'}
            />
          ))}
        </HStack>
        <Badge colorScheme={available ? 'green' : 'red'}>
          {available ? 'Dostupan' : 'Nedostupan'}
        </Badge>
      </VStack>
    </Box>
  );
};

export default MasterCard;