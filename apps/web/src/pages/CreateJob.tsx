import { Box, Button, FormControl, FormLabel, Input, Textarea, Select, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockJobs, type JobOffer } from '../services/mockJobs';
import type { Account } from '../services/mockAccounts';

interface Props {
  currentUser: Account;
}

const CreateJob = ({ currentUser }: Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [profession, setProfession] = useState('');
  const [contact, setContact] = useState('');

  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title || !description || !profession) {
      toast({ title: 'Popunite sve obavezne podatke', status: 'error', duration: 3000 });
      return;
    }

    const newJob: JobOffer = {
      id: mockJobs.length + 1,
      title,
      description,
      budget: budget.toLowerCase() === 'dogovor' ? 0 : Number(budget),
      profession,
      deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // +7 dana
      createdAt: new Date().toISOString().split('T')[0],
      status: 'active',
      applicants: [],
      userId: currentUser.id,
      contact,
    };

    mockJobs.push(newJob); // za mock demo
    toast({ title: 'Ponuda kreirana!', status: 'success', duration: 3000 });
    navigate('/my-jobs'); // vodi usera na listu ponuda
  };

  return (
    <Box p={6} maxW="md" mx="auto">
      <FormControl mb={3} isRequired>
        <FormLabel>Naslov ponude</FormLabel>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormControl>

      <FormControl mb={3} isRequired>
        <FormLabel>Opis</FormLabel>
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </FormControl>

      <FormControl mb={3}>
        <FormLabel>Budžet</FormLabel>
        <Input
          placeholder="Npr. 5000 ili dogovor"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </FormControl>

      <FormControl mb={3} isRequired>
  <FormLabel>Kontakt telefon</FormLabel>
  <Input
    placeholder="064/123-4567"
    value={contact}
    onChange={(e) => setContact(e.target.value)}
  />
</FormControl>

      <FormControl mb={3} isRequired>
        <FormLabel>Vrsta majstora / profesija</FormLabel>
        <Select placeholder="Izaberite profesiju" value={profession} onChange={(e) => setProfession(e.target.value)}>
          <option value="stolar">Stolar</option>
          <option value="električar">Električar</option>
          <option value="vodoinstalater">Vodoinstalater</option>
          <option value="zidar">Zidar</option>
          <option value="farbar">Farbar</option>
        </Select>
      </FormControl>

      <Button colorScheme="teal" mt={4} onClick={handleSubmit}>
        Kreiraj ponudu
      </Button>
    </Box>
  );
};

export default CreateJob;