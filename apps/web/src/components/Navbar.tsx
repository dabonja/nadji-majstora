import { Box, Button, HStack, Text, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import type { Account } from "../services/mockAccounts";

interface Props {
  currentUser: Account;
  setCurrentUser: React.Dispatch<React.SetStateAction<Account | null>>;
  search: string;
  setSearch: (v: string) => void;
}

const Navbar = ({ currentUser, setCurrentUser, search, setSearch }: Props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Box p={4} borderBottom="1px solid #eee" bg="gray.50">
      <HStack justify="space-between">
        <Text
          fontWeight="bold"
          fontSize="lg"
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          Nadji Majstora
        </Text>

        <Input
          placeholder="Pretraži majstora ili profesiju..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          width="300px"
          bg="white"
        />

        <HStack>
          {currentUser.role === "master" && (
            <Button
              size="sm"
              colorScheme="teal"
              onClick={() => navigate("/register-master")}
            >
              Registruj se kao majstor
            </Button>
          )}
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
