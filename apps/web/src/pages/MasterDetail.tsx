// src/pages/MasterDetail.tsx
import { useParams } from 'react-router-dom';
import { Box, Text, VStack, HStack, Badge, Image, Avatar, IconButton } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon, StarIcon } from '@chakra-ui/icons';
import { masters } from '../services/mockMasters';
import { mockComments } from '../services/mockComments';

const MasterDetail = () => {
  const { id } = useParams();
  const master = masters.find((m) => m.id === Number(id));

  if (!master) return <Text>Majstor nije pronađen</Text>;

  return (
    <Box p={6}>
      <VStack align="start" spacing={4}>
        <Image
          src={`https://i.pravatar.cc/150?u=${master.id}`} // placeholder slika
          alt={master.name}
          borderRadius="full"
          boxSize="150px"
        />
        <Text fontSize="2xl" fontWeight="bold">{master.name}</Text>
        <Text fontSize="lg">{master.profession}</Text>
        <HStack>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              color={i < Math.round(master.rating) ? 'yellow.400' : 'gray.300'}
            />
          ))}
          <Text>({master.rating})</Text>
        </HStack>
        <Badge colorScheme={master.available ? 'green' : 'red'}>
          {master.available ? 'Dostupan' : 'Nedostupan'}
        </Badge>
        <Text>Telefon: 064/123-4567</Text>
        <Text>Firma: {master.profession} d.o.o.</Text>
        <Text>Iskustvo: {2 + master.id} godine</Text>
        <Text>Opis: Vrlo pouzdan i stručan majstor.</Text>

         <Text fontSize="xl" fontWeight="bold" mt={8}>
    Komentari
  </Text>
  {mockComments
    .filter((c) => c.masterId === master.id)
    .map((c) => (
      <Box
        key={c.id}
        p={3}
        borderWidth="1px"
        borderRadius="md"
        w="100%"
      >
        <HStack spacing={3} mb={2}>
          <Avatar size="sm" name={c.user} />
          <Text fontWeight="bold">{c.user}</Text>
          <Text color="gray.500" fontSize="sm">
            {c.date}
          </Text>
        </HStack>
        <Text mb={2}>{c.text}</Text>
        <HStack spacing={2}>
          <IconButton
            aria-label="Like"
            icon={<ArrowUpIcon />}
            size="sm"
          />
          <Text>{c.likes}</Text>
          <IconButton
            aria-label="Dislike"
            icon={<ArrowDownIcon />}
            size="sm"
          />
          <Text>{c.dislikes}</Text>
        </HStack>
      </Box>
    ))}
      </VStack>
    </Box>
  );
};

export default MasterDetail;