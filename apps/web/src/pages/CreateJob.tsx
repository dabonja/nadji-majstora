// src/pages/CreateJob.tsx
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Account } from "../services/mockAccounts";
import type { JobOffer } from "../services/mockJobs";

interface Props {
  currentUser: Account;
}

const CreateJob = ({ currentUser }: Props) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [profession, setProfession] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = () => {
    const newJob: JobOffer = {
      id: Date.now(),
      title,
      description,
      budget: budget.toLowerCase() === "dogovor" ? 0 : Number(budget),
      profession,
      deadline: new Date().toISOString().split("T")[0],
      createdAt: new Date().toISOString().split("T")[0],
      status: "active",
      applicants: [],
      userId: currentUser.id,
      contact,
    };

    console.log("Nova ponuda:", newJob);
    // ovde dodati setJobs ako želiš da sačuvaš u App state
    navigate("/my-jobs");
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-b, teal.100, teal.50)"
      py={10}
      px={4}
      display="flex"
      justifyContent="center"
      alignItems="start"
    >
      <Box
        bg="white"
        p={8}
        rounded="xl"
        shadow="lg"
        w={{ base: "100%", md: "500px" }}
      >
        <Heading mb={6} textAlign="center" color="teal.600">
          Napravi Ponudu
        </Heading>

        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Naslov posla</FormLabel>
            <Input
              placeholder="Npr. Popravka kuhinje"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Opis posla</FormLabel>
            <Textarea
              placeholder="Detaljno opiši posao"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Budžet</FormLabel>
            <Input
              placeholder="Npr. 5000 ili dogovor"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Profesija</FormLabel>
            <Select
              placeholder="Izaberi profesiju"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            >
              <option value="električar">Električar</option>
              <option value="vodoinstalater">Vodoinstalater</option>
              <option value="stolar">Stolar</option>
              <option value="keramičar">Keramičar</option>
              <option value="zidar">Zidar</option>
              <option value="tesar">Tesar</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Kontakt telefon</FormLabel>
            <Input
              placeholder="064/123-4567"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </FormControl>

          <Button
            colorScheme="teal"
            size="lg"
            w="full"
            mt={4}
            onClick={handleSubmit}
          >
            Kreiraj Ponudu
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default CreateJob;