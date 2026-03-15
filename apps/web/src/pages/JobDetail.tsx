import {
  Box,
  VStack,
  Text,
  Badge,
  Button,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import type { JobOffer } from "../services/mockJobs";
import type { Account } from "../services/mockAccounts";
import StatusMenu from "../components/StatusMenu";

interface Props {
  currentUser: Account;
  jobs: JobOffer[];
  setJobs: React.Dispatch<React.SetStateAction<JobOffer[]>>;
}

const JobDetail = ({ currentUser, jobs, setJobs }: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const jobId = Number(id);
  const job = jobs.find((j) => j.id === jobId);

  if (!job) return <Text>Posao nije pronađen</Text>;

  // --- Funkcija za promenu statusa
  const handleStatusChange = (newStatus: JobOffer["status"]) => {
    setJobs((prev) =>
      prev.map((j) => (j.id === job.id ? { ...j, status: newStatus } : j))
    );
  };

  // --- Funkcija za brisanje posla
  const handleDeleteJob = () => {
    setJobs((prev) => prev.filter((j) => j.id !== job.id));
    navigate("/my-jobs");
  };

  // --- Funkcija za prijavu majstora
  const handleApply = () => {
    if (!currentUser.id) return;
    setJobs((prev) =>
      prev.map((j) =>
        j.id === job.id && !j.applicants.includes(currentUser.id)
          ? { ...j, applicants: [...j.applicants, currentUser.id] }
          : j
      )
    );
  };

  return (
    <Box maxW="800px" mx="auto" p={6}>
      <VStack
        align="start"
        spacing={4}
        bg="white"
        p={6}
        borderRadius="lg"
        boxShadow="md"
      >
        {/* Naslov i status */}
        <Text fontSize="2xl" fontWeight="bold">
          {job.title}
        </Text>
        <Badge
          colorScheme={
            job.status === "active"
              ? "green"
              : job.status === "in_progress"
              ? "yellow"
              : "red"
          }
        >
          {job.status}
        </Badge>

        {/* Opis posla */}
        <Text>{job.description}</Text>
        <Text>Budžet: {job.budget ? `${job.budget} RSD` : "Dogovor"}</Text>
        <Text>Rok: {job.deadline}</Text>
        <Text>Kontakt: {job.contact}</Text>

        <Divider />

        {/* Prijava majstora */}
        <HStack
          justifyContent="space-between"
          w="100%"
          align="center"
          spacing={4}
          py={4}
          px={2}
        >
          <Text>Prijavljeno majstora: {job.applicants.length}</Text>

          {currentUser.role === "master" &&
            !job.applicants.includes(currentUser.id) && (
              <Button colorScheme="teal" onClick={handleApply}>
                Prijavi se na posao
              </Button>
            )}

          {currentUser.role === "master" &&
            job.applicants.includes(currentUser.id) && (
              <Text color="green.500" fontWeight="bold">
                Već ste se prijavili
              </Text>
            )}
        </HStack>

        {/* Kontrole za korisnika koji je vlasnik posla */}
        {currentUser.role === "user" && currentUser.id === job.userId && (
          <VStack align="start" spacing={3} pt={4}>
            <StatusMenu
              status={job.status}
              onChangeStatus={handleStatusChange}
            />
            <Button colorScheme="red" onClick={handleDeleteJob}>
              Obriši ponudu
            </Button>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

export default JobDetail;