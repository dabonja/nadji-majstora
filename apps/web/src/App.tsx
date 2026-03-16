import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MasterDetail from "./pages/MasterDetail";
import JobsList from "./pages/JobsList";
import CreateJob from "./pages/CreateJob";
import Login from "./pages/Login";
import JobDetail from "./pages/JobDetail";

import { mockJobs, type JobOffer } from "./services/mockJobs";

import RegisterMaster from "./pages/RegisterMaster";
import MasterProfile from "./components/MasterProfile";
import type { Account } from "./types/account";
import type { Master } from "./types/master";
import { mastersApi } from "./services/mastersApi";



function App() {
  const [currentUser, setCurrentUser] = useState<Account | null>(null);
  const [jobs, setJobs] = useState<JobOffer[]>(mockJobs);
  const [masters, setMasters] = useState<Master[]>([]);
  const [search, setSearch] = useState("");

useEffect(() => {
  mastersApi.getMasters()
    .then(setMasters)
    .catch((err) => console.error("Error fetching masters:", err));
}, []);
  const updateJobStatus = (jobId: number, newStatus: JobOffer["status"]) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job,
      ),
    );
  };
console.log('currentUser', currentUser  )
  return (
    <ChakraProvider>
      <BrowserRouter>
        {!currentUser ? (
          <Login setCurrentUser={setCurrentUser} />
        ) : (
          <>
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

                {/* Rute samo za user role */}
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

                {/* Rute samo za master role */}
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

                {/* Job detail */}
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

                {/* Registracija majstora */}
                <Route
                  path="/register-master"
                  element={
                    <RegisterMaster
                    />
                  }
                />

                {/* Profil za logovanog majstora */}
                {currentUser.role === "master" && (
                  <Route
                    path="/profile/:id"
                    element={
                      <MasterProfile
                      />
                    }
                  />
                )}

                {/* Fallback */}
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