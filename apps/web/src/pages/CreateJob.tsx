// src/pages/CreateJob.tsx
import { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Select,
  VStack,
  Heading,
  useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { mockJobs, type JobOffer } from '../services/mockJobs';

const professions = [
  'vodoinstalater',
  'električar',
  'stolar',
  'molerski radovi',
  'krojač',
  'programer',
  'automehaničar',
];

export default function CreateJob() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState(0);
  const [profession, setProfession] = useState(professions[0]);
  const [deadline, setDeadline] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title || !description || !budget || !deadline) {
      toast({
        title: 'Greška',
        description: 'Popunite sva polja',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newJob: JobOffer = {
      id: mockJobs.length + 1,
      title,
      description,
      budget,
      profession,
      deadline,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'active',
      applicants: [],
    };

    mockJobs.push(newJob);

    toast({
      title: 'Uspešno kreirano',
      description: 'Vaša ponuda je dodata.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    navigate('/jobs'); // može da vodi na listu ponuda
  };

  return (
    <Box maxW="600px" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
      <Heading mb={6}>Kreiraj novu ponudu</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Naslov</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Opis</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Budžet</FormLabel>
          <NumberInput value={budget} onChange={(valueString) => setBudget(Number(valueString))}>
            <NumberInputField />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Tip posla</FormLabel>
          <Select value={profession} onChange={(e) => setProfession(e.target.value)}>
            {professions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Rok završetka</FormLabel>
          <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </FormControl>

        <Button colorScheme="blue" onClick={handleSubmit}>
          Kreiraj ponudu
        </Button>
      </VStack>
    </Box>
  );
}