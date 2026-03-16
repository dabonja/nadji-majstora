// src/services/accountApi.ts
import { ApiClient } from './apiClient';
import type { Account } from '../types/account';

class AccountsApi {
  private api = new ApiClient('http://localhost:3000');

  getAllAccounts(): Promise<Account[]> {
    return this.api.get('/accounts');
  }

  getAccountById(id: number): Promise<Account> {
    return this.api.get(`/accounts/${id}`);
  }
}

export const accountsApi = new AccountsApi();