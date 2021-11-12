import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import useTableExpenses from './useTableExpenses';
import './styles.css';

const TableExpenses = () => {
  const { headers, rows, handleDelete } = useTableExpenses();

  return (
    <table className="table table-borderless">
      <thead className="bg-dark bg-opacity-75 text-light">
        <tr>
          {
            headers.map((value) => (
              <th key={ value } scope="col">{value}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={ row.id }>
            <td>{row.description}</td>
            <td>{row.tag}</td>
            <td>{row.method}</td>
            <td>
              <span className={ `p-1 before-code_${row.usedExchange.code}` } />
              {row.value}
            </td>
            <td>
              {
                row.usedExchange.name.includes('/')
                  ? row.usedExchange.name.split('/')[0]
                  : row.usedExchange.name
              }
            </td>
            <td>
              <span className="p-1 before-currency_BRL" />
              {`${Number(row.usedExchange.ask).toFixed(2)}`}
            </td>
            <td>
              <span className="p-1 before-currency_BRL" />
              {Number(row.convertedValue).toFixed(2)}
            </td>
            <td>{row.conversionCurrency}</td>
            <td className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-warning me-2"
              >
                <FaPen />
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-testid="delete-btn"
                onClick={ () => handleDelete(row) }
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableExpenses;
