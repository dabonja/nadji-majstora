
// src/components/Navbar.tsx
import React from 'react';
import { Box, Flex, HStack, Link, Input, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box bg="blue.500" px={6} py={3} color="white" boxShadow="md">
      <Flex alignItems="center" justifyContent="space-between">
        {/* Logo i tekst */}
        <HStack spacing={3}>
          <Box
            w="40px"
            h="40px"
            bg="white"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="blue.500"
            fontWeight="bold"
          >
            M
          </Box>
          <Text fontSize="xl" fontWeight="bold">
            NadjiMajstora
          </Text>
        </HStack>

        {/* Navigacione rute */}
        <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
          <Link as={RouterLink} to="/" fontWeight="semibold" _hover={{ textDecoration: 'underline' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" fontWeight="semibold" _hover={{ textDecoration: 'underline' }}>
            O nama
          </Link>
          <Link as={RouterLink} to="/offers" fontWeight="semibold" _hover={{ textDecoration: 'underline' }}>
            Ponude
          </Link>
          <Link as={RouterLink} to="/contact" fontWeight="semibold" _hover={{ textDecoration: 'underline' }}>
            Kontakt
          </Link>
        </HStack>

        {/* Search bar */}
        <Box display={{ base: 'none', md: 'block' }}>
          <Input
            placeholder="Pretraži majstore..."
            size="sm"
            bg="white"
            color="black"
            _placeholder={{ color: 'gray.500' }}
          />
        </Box>
      </Flex>
    </Box>
  );
}