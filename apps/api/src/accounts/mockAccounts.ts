import { Account } from './types/account.type';

export const mockAccounts: Account[] = [
  { id: 98, username: 'user1', role: 'user' },
  { id: 99, username: 'master1', role: 'master', masterId: 2 },
  { id: 100, username: 'master2', role: 'master', masterId: 3 },
];
