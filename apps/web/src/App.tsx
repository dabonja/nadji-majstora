import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MasterDetail from './pages/MasterDetail';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';

function App() {
  return (
   <ChakraProvider>
      <BrowserRouter>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/master/:id" element={<MasterDetail />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;