// src/services/mockJobs.ts
export interface JobOffer {
  id: number;
  title: string;
  description: string;
  budget: number;
  profession: string;
  deadline: string; // ISO date
  createdAt: string;
  status: 'active' | 'in_progress' | 'closed';
  applicants: number[]; // ids of masters
}

export const mockJobs: JobOffer[] = [
  {
    id: 1,
    title: 'Popravka kuhinjskih elemenata',
    description: 'Potrebno srediti kuhinjske ormariće i radnu ploču.',
    budget: 5000,
    profession: 'stolar',
    deadline: '2026-03-25',
    createdAt: '2026-03-14',
    status: 'active',
    applicants: [],
  },
  {
    id: 2,
    title: 'Električarski radovi u stanu',
    description: 'Postavljanje novih utičnica i provera elektro instalacija.',
    budget: 8000,
    profession: 'električar',
    deadline: '2026-03-22',
    createdAt: '2026-03-14',
    status: 'active',
    applicants: [],
  },
];