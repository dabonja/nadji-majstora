// src/services/accountApi.ts
import { ApiClient } from './apiClient';
import type { Account } from '../types/account';
import type { Master } from '../types/master';

class AccountsApi {
  private api = new ApiClient('http://localhost:3000');

  getAllAccounts(): Promise<Account[]> {
    return this.api.get('/accounts');
  }

  getAccountById(id: number): Promise<Account> {
    return this.api.get(`/accounts/${id}`);
  }

    async getMasterForAccount(account: Account): Promise<Master | null> {
    if (account.role !== 'master' || !account.masterId) return null;

    try {
      const res = await this.api.get<Master | { error: string }>(`/accounts/${account.id}/master`);
      if ('error' in res) return null;
      return res;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

export const accountsApi = new AccountsApi();