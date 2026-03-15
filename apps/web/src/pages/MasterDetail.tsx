import { useParams } from "react-router-dom";
import {
  Box,
  Text,
  VStack,
  HStack,
  Badge,
  Image,
  Avatar,
  IconButton,
  Input,
  Button,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon, StarIcon } from "@chakra-ui/icons";
import {
  type Master,
  mockMasterWorks,
  type MasterWork,
} from "../services/mockMasters";
import { mockComments, type MasterComment } from "../services/mockComments";
import { useEffect, useState } from "react";
import type { Account } from "../services/mockAccounts";
import { mastersApi } from "../services/mastersApi";
import { commentsApi } from "../services/commentsApi";

interface Props {
  currentUser: Account;
}

const MasterDetail = ({ currentUser }: Props) => {
  const { id } = useParams();

  const [comments, setComments] = useState<MasterComment[]>(mockComments);
  const [newComment, setNewComment] = useState("");
  const [works, setWorks] = useState<MasterWork[]>(mockMasterWorks);
  const [master, setMaster] = useState<Master | null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!id) return;

    mastersApi.getMasterById(Number(id)).then((data) => {
      setMaster(data);
    });
  }, [id]);

  useEffect(() => {
    if(!master) return;
  commentsApi.getComments(master.id).then(setComments);
}, [master?.id]);

  if (!master) return <Text>Majstor nije pronađen</Text>;

const handleAddComment = async () => {

  const comment = await commentsApi.createComment({
    masterId: master.id,
    user: currentUser.username,
    text: newComment
  });
console.log("Created Comment:", comment);
  setComments([comment, ...comments]);
  setNewComment("");
};

  const handleAddWork = () => {
    const imageUrl = prompt("Unesi URL slike rada:");
    const title = prompt("Unesi naslov rada:");
    if (!imageUrl || !title) return;

    const newWork: MasterWork = {
      id: Date.now(),
      masterId: master.id,
      image: imageUrl,
      title,
    };

    setWorks([newWork, ...works]);
  };

  const masterWorks = works.filter((w) => w.masterId === master.id);
  console.log("Master Works:", master);
  return (
    <Box p={6}>
      <VStack align="start" spacing={4}>
        {/* INFO O MAJSTORU */}
        <Image
          src={master.image || `https://i.pravatar.cc/150?u=${master.id}`}
          alt={master.name}
          borderRadius="full"
          boxSize="150px"
        />
        <Text fontSize="2xl" fontWeight="bold">
          {master.name}
        </Text>
        <Text fontSize="lg">{master.profession}</Text>
        <HStack>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              color={i < Math.round(master.rating) ? "yellow.400" : "gray.300"}
            />
          ))}
          <Text>({master.rating})</Text>
        </HStack>
        <Badge colorScheme={master.available ? "green" : "red"}>
          {master.available ? "Dostupan" : "Nedostupan"}
        </Badge>
        <Text>Telefon: {master.phone}</Text>
        <Text>Grad: {master.city}</Text>
        <Text>Iskustvo: {master.experience} godine</Text>
        <Text>Opis: Vrlo pouzdan i stručan majstor.</Text>

        {/* DUGMAD ZA RADOVE */}
        <HStack spacing={4} mt={4}>
          <Button colorScheme="teal" onClick={onOpen}>
            Vidi radove ({masterWorks.length})
          </Button>

          {currentUser.role === "master" && currentUser.id === master.id && (
            <Button colorScheme="blue" onClick={handleAddWork}>
              Dodaj radove
            </Button>
          )}
        </HStack>

        {/* MODAL GALERIJE */}
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Radovi majstora</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                {masterWorks.map((work) => (
                  <GridItem key={work.id}>
                    <Image
                      src={work.image}
                      alt={work.title}
                      borderRadius="md"
                    />
                    <Text mt={1}>{work.title}</Text>
                  </GridItem>
                ))}
              </Grid>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* KOMENTARI */}
        <Text fontSize="xl" fontWeight="bold" mt={8}>
          Komentari
        </Text>

        {currentUser.role === "user" && (
          <HStack w="100%" mb={4}>
            <Input
              placeholder="Ostavite komentar"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button colorScheme="teal" onClick={handleAddComment}>
              Pošalji
            </Button>
          </HStack>
        )}

        {comments
          .filter((c) => c.masterId === master.id)
          .map((c) => (
            <Box key={c.id} p={3} borderWidth="1px" borderRadius="md" w="100%">
              <HStack spacing={3} mb={2}>
                <Avatar size="sm" name={c.user} />
                <Text fontWeight="bold">{c.user}</Text>
                <Text color="gray.500" fontSize="sm">
                  {c.date}
                </Text>
              </HStack>
              <Text mb={2}>{c.text}</Text>
              <HStack spacing={2}>
                <IconButton
                  aria-label="Like"
                  icon={<ArrowUpIcon />}
                  size="sm"
                />
                <Text>{c.likes}</Text>
                <IconButton
                  aria-label="Dislike"
                  icon={<ArrowDownIcon />}
                  size="sm"
                />
                <Text>{c.dislikes}</Text>
              </HStack>
            </Box>
          ))}
      </VStack>
    </Box>
  );
};

export default MasterDetail;
