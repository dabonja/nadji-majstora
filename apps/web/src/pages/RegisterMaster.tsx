// src/pages/RegisterMaster.tsx
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Master } from "../services/mockMasters";

interface Props {
  masters: Master[];
  setMasters: React.Dispatch<React.SetStateAction<Master[]>>;
}

const RegisterMaster = ({ masters, setMasters }: Props) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState<number | "">("");
  const [rating, setRating] = useState<number>(5);

  const handleSubmit = () => {
    if (!name || !profession || !city || !phone || experience === "") return;

    const newMaster: Master = {
      id: masters.length + 1,
      name,
      profession,
      city,
      phone,
      experience: Number(experience),
      rating,
      available: true,
      reviews: 0,
      image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70 + 1)}`,
    };

    setMasters([...masters, newMaster]);
    navigate("/"); // vrati na home
  };

  return (
    <Box maxW="400px" mx="auto" mt={12} p={6} bg="white" borderRadius="md" shadow="md">
      <Heading mb={6} size="lg" textAlign="center">
        Registracija Majstora
      </Heading>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Ime i prezime</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Profesija</FormLabel>
          <Input value={profession} onChange={(e) => setProfession(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Grad</FormLabel>
          <Input value={city} onChange={(e) => setCity(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Broj telefona</FormLabel>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormControl>

        <FormControl>
          <FormLabel>Godine iskustva</FormLabel>
          <Input
            type="number"
            value={experience}
            onChange={(e) => setExperience(Number(e.target.value))}
          />
        </FormControl>

        <Button colorScheme="teal" w="full" onClick={handleSubmit}>
          Registruj se
        </Button>
      </VStack>
    </Box>
  );
};

export default RegisterMaster;