import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Select,
} from "@chakra-ui/react";
import MasterCard from "../components/MasterCard";
import type { Master } from "../services/mockMasters";
import type { Account } from "../services/mockAccounts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Props {
  masters: Master[];
  search: string;
  currentUser: Account;
}

const Home = ({ currentUser, masters, search }: Props) => {
  const navigate = useNavigate();
  const [professionFilter, setProfessionFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  // Dinamičke opcije za filtere
  const professions = Array.from(new Set(masters.map((m) => m.profession)));
  const cities = Array.from(new Set(masters.map((m) => m.city)));

  // Filtrirani majstori
  const filteredMasters = masters.filter((m) => {
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.profession.toLowerCase().includes(search.toLowerCase());

    const matchProfession = !professionFilter || m.profession === professionFilter;
    const matchCity = !cityFilter || m.city === cityFilter;

    return matchSearch && matchProfession && matchCity;
  });

  return (
    <Box bg="gray.50" minH="100vh">
      {/* HERO SECTION */}
      <Box bg="teal.500" color="white" py={16} px={6} textAlign="center">
        <VStack spacing={4}>
          <Heading size="2xl">Pronađi Majstora Za Svaki Posao</Heading>

          <Text fontSize="lg" maxW="600px">
            Brzo i jednostavno pronađi električara, vodoinstalatera, stolara i
            druge majstore u tvojoj blizini.
          </Text>

          {currentUser.role === "user" && (
            <Button
              size="lg"
              colorScheme="whiteAlpha"
              onClick={() => navigate("/create-job")}
            >
              Napravi ponudu
            </Button>
          )}
        </VStack>
      </Box>

      {/* MASTERS SECTION */}
      <Box maxW="1200px" mx="auto" p={6}>
        <HStack justify="space-between" mb={4} flexWrap="wrap">
          <Heading size="lg" color="gray.700">
            Dostupni majstori
          </Heading>

          <Text color="gray.500" mt={{ base: 2, md: 0 }}>
            {filteredMasters.length} od {masters.length} majstora prikazano
          </Text>
        </HStack>

        {/* FILTERS */}
        <HStack mb={6} spacing={4} flexWrap="wrap">
          <Select
            placeholder="Profesija"
            value={professionFilter}
            onChange={(e) => setProfessionFilter(e.target.value)}
          >
            {professions.map((p) => (
              <option key={p} value={p}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </option>
            ))}
          </Select>

          <Select
            placeholder="Grad"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          >
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </HStack>

        {/* GRID */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {filteredMasters.map((m) => (
            <GridItem
              key={m.id}
              bg="white"
              p={4}
              borderRadius="md"
              shadow="sm"
              transition="all 0.2s"
              _hover={{ shadow: "md", transform: "scale(1.03)" }}
            >
              <MasterCard master={m} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;