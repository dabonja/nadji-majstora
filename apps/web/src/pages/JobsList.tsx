// src/pages/JobsList.tsx
import { VStack, Text } from '@chakra-ui/react';
import JobCard from '../components/JobCard';
import { mockJobs } from '../services/mockJobs';
import type { Account } from '../services/mockAccounts';

interface Props {
  currentUser: Account;
}

const JobsList = ({ currentUser }: Props) => {
  const jobs = currentUser.role === 'user'
    ? mockJobs.filter(j => j.userId === currentUser.id) // samo svoje ponude
    : mockJobs; // master vidi sve

  if (jobs.length === 0) return <Text>Nema dostupnih ponuda</Text>;

  return (
    <VStack align="start" spacing={4}>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} currentUser={currentUser} setJobs={() => {
          //TODO
        } } />
      ))}
    </VStack>
  );
};

export default JobsList;