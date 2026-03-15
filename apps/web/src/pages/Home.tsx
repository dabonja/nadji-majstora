import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import MasterCard from '../components/MasterCard';
import { mockMasters } from '../services/mockMasters';
import type { Account } from '../services/mockAccounts';
import { useNavigate } from 'react-router-dom';

interface Props {
  currentUser: Account;
}

const Home = ({ currentUser }: Props) => {
  const navigate = useNavigate();

  return (
    <Box bg="gray.50" minH="100vh">

      {/* HERO SECTION */}
      <Box
        bg="teal.500"
        color="white"
        py={16}
        px={6}
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading size="2xl">
            Pronađi Majstora Za Svaki Posao
          </Heading>

          <Text fontSize="lg" maxW="600px">
            Brzo i jednostavno pronađi električara, vodoinstalatera,
            stolara i druge majstore u tvojoj blizini.
          </Text>

          {currentUser.role === 'user' && (
            <Button
              size="lg"
              colorScheme="whiteAlpha"
              onClick={() => navigate('/create-job')}
            >
              Napravi ponudu
            </Button>
          )}
        </VStack>
      </Box>

      {/* MASTERS SECTION */}
      <Box maxW="1200px" mx="auto" p={6}>

        <HStack justify="space-between" mb={6}>
          <Heading size="lg" color="gray.700">
            Dostupni majstori
          </Heading>

          <Text color="gray.500">
            {mockMasters.length} majstora dostupno
          </Text>
        </HStack>

        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={6}
        >
          {mockMasters.map((m) => (
            <GridItem key={m.id}>
              <MasterCard master={m} />
            </GridItem>
          ))}
        </Grid>
      </Box>

    </Box>
  );
};

export default Home;