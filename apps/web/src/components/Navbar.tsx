// src/components/Navbar.tsx
import { Box, Button, HStack, Text, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import type { Account } from "../types/account";

interface Props {
  currentUser: Account;
  setCurrentUser: React.Dispatch<React.SetStateAction<Account | null>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ currentUser, setCurrentUser, search, setSearch }: Props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Box p={4} borderBottom="1px solid #eee" bg="teal.500" color="white">
      <HStack justify="space-between">
        <Text
          fontWeight="bold"
          fontSize="xl"
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          Nadji Majstora
        </Text>

        <HStack spacing={4}>
          {/* Search bar */}
          <Input
            placeholder="Pretraži majstore..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            bg="white"
            color="black"
            size="sm"
          />

          {/* Dugme za ponude */}
          <HStack spacing={4}>
            {currentUser.role === "user" ? (
              <Button
                size="sm"
                colorScheme="orange"
                onClick={() => navigate("/my-jobs")}
              >
                Moje ponude
              </Button>
            ) : (
              <Button
                size="sm"
                colorScheme="orange"
                onClick={() => navigate("/my-jobs")}
              >
                Sve ponude
              </Button>
            )}

            {currentUser.role === "master" && (
              <Button
                size="sm"
                colorScheme="blue"
                onClick={() => navigate("/register-master")}
              >
                Registruj se
              </Button>
            )}
            {currentUser?.role === "master" && currentUser.masterId && (
              <Button
                size="sm"
                colorScheme="yellow"
                onClick={() => navigate(`/profile/${currentUser.masterId}`)}
              >
                Uredi profil
              </Button>
            )}
          </HStack>

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
