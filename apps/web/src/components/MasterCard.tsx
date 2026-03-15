import {
  Box,
  Text,
  Badge,
  VStack,
  HStack,
  Avatar,
  Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import type { Master } from '../services/mockMasters';

interface Props {
  master: Master;
}

const MasterCard = ({ master }: Props) => {
  const navigate = useNavigate();

  return (
    <Box
      bg="gray.50"
      borderRadius="lg"
      p={5}
      border="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
      transition="all 0.2s"
      cursor="pointer"
     _hover={{
  transform: "translateY(-5px)",
  boxShadow: "xl"
}}

      onClick={() => navigate(`/master/${master.id}`)}
      
    >
      <VStack align="start" spacing={4}>

        {/* TOP SECTION */}
        <Flex align="center" gap={4} w="100%">
          <Avatar
            name={master.name}
            src={master.image}
            size="md"
          />

          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {master.name}
            </Text>

            <Badge colorScheme="purple">
              {master.profession}
            </Badge>
          </Box>
        </Flex>

        {/* RATING */}
        <HStack>
          <Text fontWeight="bold">
            ⭐ {master.rating}
          </Text>
          <Text fontSize="sm" color="gray.500">
            ({master.reviews} recenzija)
          </Text>
        </HStack>

        {/* EXPERIENCE */}
        <Text fontSize="sm" color="gray.600">
          Iskustvo: {master.experience} godina
        </Text>
        <Text fontSize="sm" color="gray.600">
📍 {master.city}
</Text>

        {/* AVAILABILITY */}
        <Badge
          colorScheme={master.available ? 'green' : 'red'}
        >
          {master.available ? 'Dostupan' : 'Nedostupan'}
        </Badge>

      </VStack>
    </Box>
  );
};

export default MasterCard;