import { useEffect, useState } from "react";

import { Box, Text, Switch, HStack, Button, VStack, Image } from "@chakra-ui/react";
import type { Master } from "../services/mockMasters";
import { mastersApi } from "../services/mastersApi";

interface Props {
  currentUser: { id: number; role: string; username: string };
}

const MasterProfile = ({ currentUser }: Props) => {
  const [master, setMaster] = useState<Master | null>(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    mastersApi.getMasterById(currentUser.id).then(setMaster);
  }, [currentUser.id]);

  if (!master) return <Text>Učitavanje...</Text>;

  const toggleAvailable = async () => {
    setUpdating(true);
    try {
      const updated = await mastersApi.updateMaster(master.id, {
        available: !master.available,
      });
      setMaster(updated);
    } finally {
      setUpdating(false);
    }
  };

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