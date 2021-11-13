import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import currencyFormatter from '../../utils/currencyFormatter';
import './styles.css';

const HeaderWallet = () => {
  const { user, wallet } = useSelector((store) => store);

  const total = currencyFormatter(wallet.totalExpenses, 'en');

  return (
    <header className="p-4 header-wallet-container">
      <Link to="/">
        <img
          src="brand-logo-full.png"
          alt="logo trybe"
          className="header-wallet__brand-logo "
        />
      </Link>
      <div className="header-wallet__status">
        <p
          className="mb-0 fw-bold"
          data-testid="email-field"
        >
          {`Email: ${user.email || ''}`}
        </p>
        <p
          className="mb-0 fw-bold"
          data-testid="total-field"
        >
          {`Despesa Total: ${total} `}
          <span data-testid="header-currency-field">
            BRL
          </span>
        </p>
      </div>
    </header>
  );
};

export default HeaderWallet;
