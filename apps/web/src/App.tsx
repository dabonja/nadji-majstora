import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MasterDetail from './pages/MasterDetail';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import CreateJob from './pages/CreateJob';
import JobsList from './pages/JobsList';

function App() {
  return (
   <ChakraProvider>
      <BrowserRouter>
        <Box>
          <Navbar />
          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/master/:id" element={<MasterDetail />} />
  <Route path="/create-job" element={<CreateJob />} />
  <Route path="/offers" element={<JobsList />} /> 
</Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;