// src/components/Navbar.tsx
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import type { Account } from '../services/mockAccounts';

interface Props {
  currentUser: Account;
  setCurrentUser: React.Dispatch<React.SetStateAction<Account | null>>;
}

const Navbar = ({ currentUser, setCurrentUser }: Props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Box
      bg="teal.500"
      color="white"
      px={6}
      py={4}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <HStack justify="space-between" align="center">
        <Text
          fontWeight="extrabold"
          fontSize="2xl"
          cursor="pointer"
          onClick={() => navigate('/')}
          _hover={{ color: 'teal.200' }}
        >
          Nadji Majstora
        </Text>

        <HStack spacing={4}>
          {currentUser.role === 'user' && (
            <Button colorScheme="teal" variant="ghost" onClick={() => navigate('/my-jobs')}>
              Moje Ponude
            </Button>
          )}
          {currentUser.role === 'master' && (
            <Button colorScheme="teal" variant="ghost" onClick={() => navigate('/jobs')}>
              Sve Ponude
            </Button>
          )}
          <Text fontWeight="bold">{currentUser.username}</Text>
          <Button size="sm" colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;