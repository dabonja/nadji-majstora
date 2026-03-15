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
  updateJobStatus: (
    jobId: number,
    newStatus: "active" | "in_progress" | "closed",
  ) => void;
}

const JobDetail = ({ currentUser, jobs, setJobs, updateJobStatus }: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const jobId = Number(id);
  console.log("JobDetail", { jobId, jobs });
  const job = jobs.find((j) => j.id === jobId);

  if (!job) return <Text>Posao nije pronađen</Text>;

  const changeStatus = (status: JobOffer["status"]) => {
    setJobs((prev) =>
      prev.map((j) => (j.id === job.id ? { ...j, status } : j)),
    );
  };

  const deleteJob = () => {
    setJobs((prev) => prev.filter((j) => j.id !== job.id));
    navigate("/my-jobs");
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

        <Text>{job.description}</Text>

        <Text>Budžet: {job.budget ? `${job.budget} RSD` : "Dogovor"}</Text>

        <Text>Rok: {job.deadline}</Text>

        <Text>Kontakt: {job.contact}</Text>

        <Divider />

        <Text>Prijavljeno majstora: {job.applicants.length}</Text>

        {/* USER CONTROLS */}
        {currentUser.role === "user" && currentUser.id === job.userId && (
          <VStack align="start" spacing={3} pt={4}>
            <StatusMenu
              status={job.status}
              onChangeStatus={(newStatus) => updateJobStatus(job.id, newStatus)}
            />
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

export default JobDetail;
