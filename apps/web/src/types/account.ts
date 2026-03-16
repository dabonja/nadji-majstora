// src/services/types/account.type.ts
export type Role = 'user' | 'master';

export interface Account {
  id: number;
  username: string;
  role: Role;
  masterId?: number; // opciono, povezuje account sa majstorom
}