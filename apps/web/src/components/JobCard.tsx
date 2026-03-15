import {
  Box,
  Text,
  Badge,
  VStack,
  HStack,
  Button,
  Divider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import type { JobOffer } from '../services/mockJobs';
import type { Account } from '../services/mockAccounts';

interface Props {
  job: JobOffer;
  currentUser: Account;
  setJobs: React.Dispatch<React.SetStateAction<JobOffer[]>>;
}

const JobCard = ({ job, currentUser, setJobs }: Props) => {
  const navigate = useNavigate();

  const alreadyApplied = job.applicants.includes(currentUser.id);

  const apply = () => {
    setJobs((prev) =>
      prev.map((j) =>
        j.id === job.id
          ? { ...j, applicants: [...j.applicants, currentUser.id] }
          : j
      )
    );
  };

  return (
    <Box
      bg="gray.50"
      borderRadius="lg"
      p={5}
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.200"
      transition="all 0.2s"
      _hover={{
        boxShadow: 'lg',
        transform: 'translateY(-2px)',
        bg: 'white',
      }}
      cursor="pointer"
      onClick={() => navigate(`/job/${job.id}`)}
    >
      <VStack align="start" spacing={3}>

        {/* TITLE */}
        <Text fontSize="lg" fontWeight="bold">
          {job.title}
        </Text>

        {/* DESCRIPTION */}
        <Text fontSize="sm" color="gray.600">
          {job.description}
        </Text>

        <Divider />

        {/* JOB INFO */}
        <HStack justify="space-between" w="100%">
          <Badge colorScheme="purple">
            {job.profession}
          </Badge>

          <Badge colorScheme="blue">
            {job.applicants.length} majstora
          </Badge>
        </HStack>

        <HStack justify="space-between" w="100%">
          <Text fontSize="sm">
            Budžet:{" "}
            <Text as="span" fontWeight="bold">
              {job.budget ? `${job.budget} RSD` : 'Dogovor'}
            </Text>
          </Text>

          <Text fontSize="sm" color="gray.500">
            Rok: {job.deadline}
          </Text>
        </HStack>

        {/* APPLY BUTTON */}
        {currentUser.role === 'master' && (
          <Button
            size="sm"
            colorScheme="green"
            isDisabled={alreadyApplied}
            onClick={(e) => {
              e.stopPropagation();
              apply();
            }}
          >
            {alreadyApplied ? 'Prijavljen' : 'Prijavi se'}
          </Button>
        )}
        <Badge
  colorScheme={
    job.status === 'active'
      ? 'green'
      : job.status === 'in_progress'
      ? 'yellow'
      : 'red'
  }
>
  {job.status}
</Badge>
      </VStack>
    </Box>
  );
};

export default JobCard;


