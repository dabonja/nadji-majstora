import { useEffect, useState } from "react";
import { Box, Text, Switch, HStack, VStack, Image } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { mastersApi } from "../services/mastersApi";
import type { Master } from "../types/master";

const MasterProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [master, setMaster] = useState<Master | null>(null);
  const [updating, setUpdating] = useState(false);
console.log("MasterProfile mount, id:", id);
  useEffect(() => {
    if (!id) {
      navigate("/");
      return;
    }

    // Poziv backend-a po ID iz URL-a
    mastersApi.getMasterById(Number(id))
      .then(setMaster)
      .catch(() => navigate("/")); // ako ID ne postoji
  }, [id]);

  if (!master) return <Text>Učitavanje...</Text>;

  const toggleAvailable = async () => {
    setUpdating(true);
    try {
      // PATCH mora backend da proveri da li logovani master može da menja
      const updated = await mastersApi.updateMaster(master.id, {
        available: !master.available,
      });
      setMaster(updated);
    } finally {
      setUpdating(false);
    }
  };
console.log("Master profile render", master);
  return (
    <Box p={6}>
      <VStack align="start" spacing={4}>
        <Image src={master.image} alt={master.name} borderRadius="full" boxSize="150px" />
        <Text fontSize="2xl" fontWeight="bold">{master.name}</Text>
        <Text>{master.profession}</Text>
        <HStack>
          <Text>Status:</Text>
          <Switch
            isChecked={master.available}
            onChange={toggleAvailable}
            isDisabled={updating}
            colorScheme="green"
          />
          <Text>{master.available ? "Dostupan" : "Nedostupan"}</Text>
        </HStack>
        <Text>Grad: {master.city}</Text>
        <Text>Telefon: {master.phone}</Text>
        <Text>Iskustvo: {master.experience} godine</Text>
      </VStack>
    </Box>
  );
};

export default MasterProfile;