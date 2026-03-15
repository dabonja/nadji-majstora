// src/pages/RegisterMaster.tsx
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { mastersApi } from "../services/mastersApi";

const RegisterMaster = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [experience, setExperience] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

const handleSubmit = async () => {
  try {
    await mastersApi.createMaster({
      name,
      profession,
      city,
      phone,
      experience: Number(experience),
      image:
        image ||
        `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
    });

    navigate("/");
  } catch (error) {
    console.error("Greška pri registraciji majstora", error);
  }
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
          Registruj se kao Majstor
        </Heading>

        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Ime i prezime</FormLabel>
            <Input
              placeholder="Marko Marković"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              <option value="slikar">Slikar</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Godine iskustva</FormLabel>
            <Input
              type="number"
              placeholder="Npr. 5"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Grad</FormLabel>
            <Select
              placeholder="Izaberi grad"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="Beograd">Beograd</option>
              <option value="Novi Sad">Novi Sad</option>
              <option value="Niš">Niš</option>
              <option value="Kragujevac">Kragujevac</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Telefon</FormLabel>
            <Input
              placeholder="064/123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Slika (opciono)</FormLabel>
            <Input
              placeholder="URL slike"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </FormControl>

          <Button
            colorScheme="teal"
            size="lg"
            w="full"
            mt={4}
            onClick={handleSubmit}
          >
            Registruj se
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default RegisterMaster;