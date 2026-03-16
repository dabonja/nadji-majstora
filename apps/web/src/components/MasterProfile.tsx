// src/pages/MasterProfile.tsx
import { useEffect, useState } from "react";
import { Box, Text, Switch, HStack, VStack, Image } from "@chakra-ui/react";
import type { Master } from "../types/master";
import type { Account } from "../types/account";
import { accountsApi } from "../services/accountApi";

interface Props {
  currentUser: Account; // logovani account
}

const MasterProfile = ({ currentUser }: Props) => {
  const [master, setMaster] = useState<Master | null>(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    // Dohvata mastera za dati account
    accountsApi
      .getMasterForAccount(currentUser)
      .then((m) => setMaster(m))
      .catch((err) => console.error("Greška prilikom učitavanja mastera:", err));
  }, [currentUser]);
  console.log('currentUser', currentUser)
console.log('master', master)
  if (!master) return <Text>Učitavanje...</Text>;

  // const toggleAvailable = async () => {
  //   if (!master) return;

  //   setUpdating(true);
  //   try {
  //     // PATCH: backend će proveriti da li logovani master može da menja status
  //     const updated = await accountsApi.api.patch<Master>(
  //       `/masters/${master.id}/update`,
  //       { data: { available: !master.available }, account: currentUser }
  //     );
  //     setMaster(updated);
  //   } catch (err) {
  //     console.error("Greška pri promeni statusa:", err);
  //   } finally {
  //     setUpdating(false);
  //   }
  // };

  return (
    <Box p={6} border="1px solid #b81212" borderRadius="md">
      <VStack align="start" spacing={4}>
        <Image
          src={master.image}
          alt={master.name}
          borderRadius="full"
          boxSize="150px"
        />
        <Text fontSize="2xl" fontWeight="bold">{master.name}</Text>
        <Text>{master.profession}</Text>

        <HStack>
          <Text>Status:</Text>
          <Switch
            isChecked={master.available}
            onChange={() => {
              //TODO
            }}
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