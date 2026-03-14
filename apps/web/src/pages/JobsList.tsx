// src/pages/JobsList.tsx
import { useState } from 'react';
import {
  Box,
  Button,
  VStack,
  HStack,
  Text,
  Badge,
  Heading,
  Select,
} from '@chakra-ui/react';
import { mockJobs, type JobOffer } from '../services/mockJobs';
import { masters } from '../services/mockMasters';

export default function JobsList() {
  const [jobs, setJobs] = useState(mockJobs);
  const [filter, setFilter] = useState('all');

  const handleApply = (jobId: number, masterId: number) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId && !job.applicants.includes(masterId)
          ? { ...job, applicants: [...job.applicants, masterId] }
          : job
      )
    );
  };

  const filteredJobs =
    filter === 'all'
      ? jobs
      : jobs.filter((job) => job.profession === filter);

  return (
    <Box maxW="800px" mx="auto" mt={8} p={6}>
      <Heading mb={4}>Aktivne ponude</Heading>

      <HStack mb={4}>
        <Text>Filtriraj po profesiji:</Text>
        <Select w="200px" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Sve</option>
          {[...new Set(mockJobs.map((j) => j.profession))].map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Select>
      </HStack>

      <VStack spacing={4} align="stretch">
        {filteredJobs.map((job: JobOffer) => (
          <Box key={job.id} p={4} borderWidth="1px" borderRadius="md">
            <HStack justify="space-between">
              <Text fontWeight="bold">{job.title}</Text>
              <Badge colorScheme={job.status === 'active' ? 'green' : 'gray'}>
                {job.status}
              </Badge>
            </HStack>
            <Text>Opis: {job.description}</Text>
            <Text>Budžet: {job.budget} RSD</Text>
            <Text>Tip posla: {job.profession}</Text>
            <Text>Rok: {job.deadline}</Text>
            <Text>Prijavljeni majstori: {job.applicants.length}</Text>

            {/* Primer: prijava prvog majstora */}
            <Button
              mt={2}
              colorScheme="blue"
              onClick={() => handleApply(job.id, masters[0].id)}
            >
              Prijavi se kao majstor
            </Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}