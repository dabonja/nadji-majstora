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
    <Box p={4} borderBottom="1px solid #eee">
      <HStack justify="space-between">

        {/* LEFT SIDE */}
        <HStack spacing={6}>
          <Text fontWeight="bold" cursor="pointer" onClick={() => navigate('/')}>
            Nadji Majstora
          </Text>

          {/* USER NAVIGATION */}
          {currentUser.role === 'user' && (
            <>
              <Text cursor="pointer" onClick={() => navigate('/create-job')}>
                Nova ponuda
              </Text>

              <Text cursor="pointer" onClick={() => navigate('/my-jobs')}>
                Moje ponude
              </Text>
            </>
          )}

          {/* MASTER NAVIGATION */}
          {currentUser.role === 'master' && (
            <Text cursor="pointer" onClick={() => navigate('/jobs')}>
              Ponude
            </Text>
          )}
        </HStack>

        {/* RIGHT SIDE */}
        <HStack spacing={4}>
          <Text>{currentUser.username}</Text>

          <Button size="sm" colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </HStack>

      </HStack>
    </Box>
  );
};

export default Navbar;