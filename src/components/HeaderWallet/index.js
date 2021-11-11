import React from 'react';
import { useSelector } from 'react-redux';
import currencyFormatter from '../../utils/currencyFormatter';
import './styles.css';

const HeaderWallet = () => {
  const user = useSelector((store) => store.user);

  return (
    <header className="p-4 header-wallet-container">
      <img
        src="brand-logo-full.png"
        alt="logo trybe"
        className="header-wallet__brand-logo "
      />
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
          Despesa Total:
          {' '}
          <span data-testid="header-currency-field">
            {`${currencyFormatter()} BRL`}
          </span>
        </p>
      </div>
    </header>
  );
};

export default HeaderWallet;
