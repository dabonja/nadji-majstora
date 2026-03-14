// src/pages/JobDetail.tsx
import { useParams } from 'react-router-dom';
import {
  Box,
  VStack,
  HStack,
  Text,
  Badge,
  Button,
  Divider,
} from '@chakra-ui/react';
import { mockJobs } from '../services/mockJobs';
import { masters } from '../services/mockMasters';
import type { Account } from '../services/mockAccounts';

interface Props {
  currentUser: Account;
}

const JobDetail = ({ currentUser }: Props) => {
  const { id } = useParams();
  const jobId = Number(id);
  const job = mockJobs.find((j) => j.id === jobId);

  if (!job) return <Text>Posao nije pronađen</Text>;

  // filtriranje prijavljenih majstora
  const appliedMasters = masters.filter((m) => job.applicants.includes(m.id));

  return (
    <Box p={6} maxW="800px" mx="auto">
      <VStack align="start" spacing={4} bg="gray.50" p={6} borderRadius="md" shadow="md">
        <Text fontSize="2xl" fontWeight="bold">{job.title}</Text>
        <Badge colorScheme={job.status === 'active' ? 'green' : job.status === 'in_progress' ? 'yellow' : 'red'}>
          {job.status === 'active' ? 'Aktivan' : job.status === 'in_progress' ? 'U toku' : 'Završeno'}
        </Badge>

        <Text><strong>Opis:</strong> {job.description}</Text>
        <Text><strong>Profesija:</strong> {job.profession}</Text>
        <Text><strong>Budžet / Dogovor:</strong> {job.budget > 0 ? `${job.budget} RSD` : 'Dogovor'}</Text>
        <Text><strong>Rok za završetak:</strong> {job.deadline}</Text>
        <Text><strong>Kontakt telefon:</strong> 064/123-4567</Text>

        <Divider />

        {currentUser.role === 'master' ? (
          <Text fontWeight="bold">Prijavljeno majstora: {job.applicants.length}</Text>
        ) : (
          <>
            <Text fontWeight="bold">Majstori koji su se prijavili:</Text>
            {appliedMasters.length === 0 ? (
              <Text>Nema prijavljenih majstora</Text>
            ) : (
              <VStack align="start" spacing={3}>
                {appliedMasters.map((m) => (
                  <HStack key={m.id} justify="space-between" w="100%" p={3} bg="white" borderRadius="md" shadow="sm">
                    <Text>{m.name}</Text>
                    <Badge colorScheme={m.available ? 'green' : 'red'}>
                      {m.available ? 'Dostupan' : 'Nedostupan'}
                    </Badge>
                  </HStack>
                ))}
              </VStack>
            )}
          </>
        )}

        {currentUser.role === 'master' && !job.applicants.includes(currentUser.id) && job.status === 'active' && (
          <Button colorScheme="blue" mt={4}>
            Prijavi se na posao
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default JobDetail;