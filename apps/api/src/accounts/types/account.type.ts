export type Role = 'user' | 'master';

export interface Account {
  id: number;
  username: string;
  role: Role;
  masterId?: number; // opcionalno, povezuje account sa majstorom
}
