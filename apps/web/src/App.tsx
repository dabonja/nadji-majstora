import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { useState, type SetStateAction } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import MasterDetail from './pages/MasterDetail';
import JobsList from './pages/JobsList';
import CreateJob from './pages/CreateJob';
import Login from './pages/Login';
import JobDetail from './pages/JobDetail';

import type { Account } from './services/mockAccounts';
import { mockJobs, type JobOffer } from './services/mockJobs';

function App() {
  const [currentUser, setCurrentUser] = useState<Account | null>(null);
const [jobs, setJobs] = useState<JobOffer[]>(mockJobs);

  return (
    <ChakraProvider>
      <BrowserRouter>

        {/* LOGIN */}
        {!currentUser ? (
          <Login setCurrentUser={setCurrentUser} />
        ) : (
          <>
            {/* NAVBAR mora biti unutar BrowserRouter */}
            <Navbar
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />

            <Box p={4}>
              <Routes>
                <Route path="/" element={<Home currentUser={currentUser} />} />

                <Route path="/master/:id" element={<MasterDetail />} />

                {currentUser.role === 'user' && (
                  <>
                    <Route
                      path="/create-job"
                      element={<CreateJob currentUser={currentUser} />}
                    />

                    <Route
                      path="/my-jobs"
                      element={<JobsList currentUser={currentUser} />}
                    />
                  </>
                )}

                {currentUser.role === 'master' && (
                  <Route
                    path="/jobs"
                    element={<JobsList currentUser={currentUser} />}
                  />
                )}

               <Route
  path="/job/:id"
  element={
    <JobDetail
      currentUser={currentUser}
      jobs={jobs}
      setJobs={setJobs}
    />
  }
/>

                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Box>
          </>
        )}

      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;