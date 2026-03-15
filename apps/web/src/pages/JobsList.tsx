// src/pages/JobsList.tsx
import { VStack, Text } from '@chakra-ui/react';
import JobCard from '../components/JobCard';
import { type JobOffer } from '../services/mockJobs';
import type { Account } from '../services/mockAccounts';

interface Props {
  currentUser: Account;
  jobs: JobOffer[];
  setJobs: React.Dispatch<React.SetStateAction<JobOffer[]>>;
  updateJobStatus: (jobId: number, newStatus: JobOffer["status"]) => void;
}

const JobsList = ({ currentUser, jobs, setJobs }: Props) => {
  return (
    <VStack spacing={4} align="stretch">
      {jobs
        .filter(job => 
          currentUser.role === "user" ? job.userId === currentUser.id : true
        )
        .map(job => (
          <JobCard
            key={job.id}
            job={job}
            currentUser={currentUser}
            setJobs={setJobs}
          />
        ))}
    </VStack>
  );
};

export default JobsList;