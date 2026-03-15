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
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 6;

  const filteredMasters = masters.filter((m) => {
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.profession.toLowerCase().includes(search.toLowerCase());
    const matchProfession = !professionFilter || m.profession === professionFilter;
    const matchCity = !cityFilter || m.city === cityFilter;
    return matchSearch && matchProfession && matchCity;
  });

  const totalPages = Math.ceil(filteredMasters.length / itemsPerPage);

  // Ako showAll = true, prikazujemo sve
  const displayedMasters = showAll
    ? filteredMasters
    : filteredMasters.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );

  return (
    <Box bg="gray.50" minH="100vh">
      {/* HERO */}
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

      {/* MASTERS */}
      <Box maxW="1200px" mx="auto" p={6}>
        <HStack justify="space-between" mb={6}>
          <Heading size="lg" color="gray.700">
            Dostupni majstori
          </Heading>

          <HStack spacing={4}>
            <Select
              placeholder="Profesija"
              value={professionFilter}
              onChange={(e) => setProfessionFilter(e.target.value)}
            >
              <option value="električar">Električar</option>
              <option value="vodoinstalater">Vodoinstalater</option>
              <option value="stolar">Stolar</option>
              <option value="keramičar">Keramičar</option>
            </Select>

            <Select
              placeholder="Grad"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            >
              <option value="Beograd">Beograd</option>
              <option value="Novi Sad">Novi Sad</option>
              <option value="Niš">Niš</option>
              <option value="Kragujevac">Kragujevac</option>
            </Select>
          </HStack>
        </HStack>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={4}
        >
          {displayedMasters.map((m) => (
            <GridItem key={m.id}>
              <MasterCard master={m}  />
            </GridItem>
          ))}
        </Grid>

        {/* PAGINACIJA / VIDI SVE */}
        <HStack justify="center" mt={6} spacing={4}>
          {!showAll && (
            <>
              <Button
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                isDisabled={currentPage === 1}
              >
                Previous
              </Button>
              <Text>
                Stranica {currentPage} od {totalPages}
              </Text>
              <Button
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                isDisabled={currentPage === totalPages}
              >
                Next
              </Button>
              <Button size="sm" colorScheme="teal" onClick={() => setShowAll(true)}>
                Vidi sve
              </Button>
            </>
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default Home;