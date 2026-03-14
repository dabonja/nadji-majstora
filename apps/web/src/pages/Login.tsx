// src/pages/Login.tsx
import { useState } from 'react';
import { mockAccounts } from '../services/mockAccounts';
import { useNavigate } from 'react-router-dom';
import { Box, Input, Button, Text, VStack } from '@chakra-ui/react';

interface Props {
  setCurrentUser: (user: typeof mockAccounts[0] | null) => void;
}

export default function Login({ setCurrentUser }: Props) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = mockAccounts.find((u) => u.username === username);
    if (!user) {
      setError('Korisnik ne postoji');
      return;
    }
    setCurrentUser(user);
    if (user.role === 'user') navigate('/my-jobs'); // vidi samo svoje ponude
    else navigate('/jobs'); // majstor vidi sve ponude
  };

  return (
    <Box maxW="sm" mx="auto" mt={20}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Login</Text>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <Text color="red.500">{error}</Text>}
        <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
      </VStack>
    </Box>
  );
}