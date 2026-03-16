// src/pages/JobsList.tsx
import { VStack, Text } from '@chakra-ui/react';
import JobCard from '../components/JobCard';
import { type JobOffer } from '../services/mockJobs';
import type { Account } from '../types/account';
import { useEffect } from 'react';
import { jobsApi } from '../services/jobsService';

interface Props {
  currentUser: Account;
  jobs: JobOffer[];
  setJobs: React.Dispatch<React.SetStateAction<JobOffer[]>>;
  updateJobStatus: (jobId: number, newStatus: JobOffer["status"]) => void;
}

const JobsList = ({ currentUser, jobs, setJobs }: Props) => {
const handleGetJobs = async () => {
    try {
      const jobs = await jobsApi.getAllJobs();  
      setJobs(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };


  useEffect(() => {
    handleGetJobs()
}, [currentUser]);


  return (
    <VStack spacing={4} align="stretch">
      {jobs
        .filter(job =>  currentUser.role === "user" ? job.userId === currentUser.id : true
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