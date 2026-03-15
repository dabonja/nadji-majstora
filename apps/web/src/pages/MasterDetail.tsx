import { useParams } from 'react-router-dom';
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
} from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon, StarIcon } from '@chakra-ui/icons';
import { mockMasters, type Master } from '../services/mockMasters';
import { mockComments, type MasterComment} from '../services/mockComments';
import { useState } from 'react';
import type { Account } from '../services/mockAccounts';

interface Props {
  currentUser: Account;
}

const MasterDetail = ({ currentUser }: Props) => {
  const { id } = useParams();
  const master = mockMasters.find((m) => m.id === Number(id));

 
  const [comments, setComments] = useState<MasterComment[]>(mockComments);
  const [newComment, setNewComment] = useState('');

  if (!master) return <Text>Majstor nije pronađen</Text>;

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: MasterComment = {
      id: Date.now(),
      masterId: master.id,
      user: currentUser.username,
      text: newComment,
      date: new Date().toLocaleDateString(),
      likes: 0,
      dislikes: 0,
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <Box p={6}>
      <VStack align="start" spacing={4}>
        <Image
          src={master.image || `https://i.pravatar.cc/150?u=${master.id}`}
          alt={master.name}
          borderRadius="full"
          boxSize="150px"
        />
        <Text fontSize="2xl" fontWeight="bold">{master.name}</Text>
        <Text fontSize="lg">{master.profession}</Text>
        <HStack>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              color={i < Math.round(master.rating) ? 'yellow.400' : 'gray.300'}
            />
          ))}
          <Text>({master.rating})</Text>
        </HStack>
        <Badge colorScheme={master.available ? 'green' : 'red'}>
          {master.available ? 'Dostupan' : 'Nedostupan'}
        </Badge>
        <Text>Telefon: {master.phone}</Text>
        <Text>Grad: {master.city}</Text>
        <Text>Iskustvo: {master.experience} godine</Text>
        <Text>Opis: Vrlo pouzdan i stručan majstor.</Text>

        {/* KOMENTARI */}
        <Text fontSize="xl" fontWeight="bold" mt={8}>
          Komentari
        </Text>

        {currentUser.role === 'user' && (
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

        {comments.map((c) => (
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
              <IconButton aria-label="Like" icon={<ArrowUpIcon />} size="sm" />
              <Text>{c.likes}</Text>
              <IconButton aria-label="Dislike" icon={<ArrowDownIcon />} size="sm" />
              <Text>{c.dislikes}</Text>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default MasterDetail;