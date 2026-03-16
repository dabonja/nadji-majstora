// src/accounts/accounts.service.ts
import { Injectable } from '@nestjs/common';
import type { Account } from './types/account.type';

@Injectable()
export class AccountsService {
  private accounts: Account[] = [
    { id: 98, username: 'user1', role: 'user' },
    { id: 99, username: 'master1', role: 'master', masterId: 2 },
    { id: 100, username: 'master2', role: 'master', masterId: 3 },
  ];

  findAll(): Account[] {
    return this.accounts;
  }

  findOne(id: number): Account | undefined {
    return this.accounts.find((a) => a.id === id);
  }
}
