// src/accounts/accounts.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import type { Account } from './types/account.type';

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
}
