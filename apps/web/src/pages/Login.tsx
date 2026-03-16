// src/pages/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Input, Button, Text, VStack } from '@chakra-ui/react';
import type { Account } from '../types/account';
import { accountsApi } from '../services/accountApi';

interface Props {
  setCurrentUser: (user: Account | null) => void;
}

export default function Login({ setCurrentUser }: Props) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const accounts = await accountsApi.getAllAccounts(); // GET sa backend-a

      console.log('xxxx',accounts)
      const user = accounts.find((u) => u.username === username);
      if (!user) {
        setError('Korisnik ne postoji');
        return;
      }

      setCurrentUser(user);

      if (user.role === 'user') navigate('/my-jobs'); // vidi samo svoje ponude
      else navigate('/my-jobs'); // majstor vidi svoje poslove
    } catch (err) {
      console.error(err);
      setError('Greška prilikom logovanja');
    }
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