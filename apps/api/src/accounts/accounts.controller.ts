import { Controller, Get, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import type { Account } from './types/account.type';
import { mockAccounts } from './mockAccounts';
import { mockMasters } from '../masters/mockMasters';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  getAllAccounts(): Account[] {
    return this.accountsService.findAll();
  }

  @Get(':id')
  getAccountById(@Param('id') id: string): Account | undefined {
    return this.accountsService.findOne(Number(id));
  }

  @Get(':accountId/master')
  getMasterForAccount(@Param('accountId') accountId: string) {
    const account = mockAccounts.find((a) => a.id === Number(accountId));
    if (!account || account.role !== 'master' || !account.masterId) {
      return { error: 'No master for this account' };
    }
    const master = mockMasters.find((m) => m.id === account.masterId);
    if (!master) return { error: 'Master not found' };
    return master;
  }
}
