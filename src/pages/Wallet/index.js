import React from 'react';
import HeaderWallet from '../../components/HeaderWallet';
import ExpenseForm from '../../components/ExpenseForm';
import TableExpenses from '../../components/TableExpenses';

const Wallet = () => (
  <div>
    <HeaderWallet />
    <ExpenseForm />
    <TableExpenses />
  </div>
);

export default Wallet;
