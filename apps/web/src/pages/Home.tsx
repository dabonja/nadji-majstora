import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import MasterSlider from '../components/MasterSlider';

export default function Home() {
  return (
    <Box p={6}>
      <Heading mb={4}>Najbolji majstori u tvojoj blizini</Heading>
      <MasterSlider />
    </Box>
  );
}