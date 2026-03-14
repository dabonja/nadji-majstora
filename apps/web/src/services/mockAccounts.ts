type Role = 'user' | 'master';

export interface Account {
  id: number;
  username: string;
  role: Role;
}

// src/services/mockAccounts.ts
export const mockAccounts: Account[] = [
  { id: 1, username: 'user1', role: 'user' },
  { id: 2, username: 'master1', role: 'master' },
];