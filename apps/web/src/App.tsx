import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";
import { useState, type SetStateAction } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MasterDetail from "./pages/MasterDetail";
import JobsList from "./pages/JobsList";
import CreateJob from "./pages/CreateJob";
import Login from "./pages/Login";
import JobDetail from "./pages/JobDetail";

import type { Account } from "./services/mockAccounts";
import { mockJobs, type JobOffer } from "./services/mockJobs";
import { mockMasters, type Master } from "./services/mockMasters";
import RegisterMaster from "./pages/RegisterMaster";
import MasterProfile from "./components/MasterProfile";

function App() {
  const [currentUser, setCurrentUser] = useState<Account | null>(null);
  const [jobs, setJobs] = useState<JobOffer[]>(mockJobs);
  const [masters, setMasters] = useState<Master[]>(mockMasters);
  const [search, setSearch] = useState("");

  const updateJobStatus = (jobId: number, newStatus: JobOffer["status"]) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job,
      ),
    );
  };

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
              search={search}
              setSearch={setSearch}
            />

            <Box p={4}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      masters={masters}
                      search={search}
                      currentUser={currentUser}
                    />
                  }
                />

                <Route
                  path="/master/:id"
                  element={<MasterDetail currentUser={currentUser} />}
                />

                {currentUser.role === "user" && (
                  <>
                    <Route
                      path="/create-job"
                      element={<CreateJob currentUser={currentUser} />}
                    />

                    <Route
                      path="/my-jobs"
                      element={
                        <JobsList
                          currentUser={currentUser}
                          setJobs={setJobs}
                          jobs={jobs}
                          updateJobStatus={updateJobStatus}
                        />
                      }
                    />
                  </>
                )}

                {currentUser.role === "master" && (
                  <Route
                    path="/my-jobs"
                    element={
                      <JobsList
                        currentUser={currentUser}
                        setJobs={setJobs}
                        jobs={jobs}
                        updateJobStatus={updateJobStatus}
                      />
                    }
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
                <Route path="/register-master" element={<RegisterMaster />} />

                {currentUser?.role === "master" && (
                  <Route
                    path="/profile"
                    element={<MasterProfile currentUser={currentUser} />}
                  />
                )}

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
