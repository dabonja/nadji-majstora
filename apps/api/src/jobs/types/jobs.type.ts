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
  userId?: number; // ko je kreirao ponudu
  contact?: string; // broj telefona korisnika
}
