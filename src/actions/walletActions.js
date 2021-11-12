import ACTIONS_TYPES from '../constants';
import getAllCurrencies from '../services/getCurrencies';
import addUpExpenses from '../utils/addUpExpenses';

const fetchCurrencies = () => async (dispatch) => {
  dispatch({
    type: ACTIONS_TYPES.WALLET_IS_FETCHING,
  });

  try {
    const response = await getAllCurrencies();

    const currencies = Object.keys(response).filter((code) => code !== 'USDT');

    dispatch({
      type: ACTIONS_TYPES.FETCH_CURRENCIES_SUCCESS,
      payload: { currencies },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS_TYPES.WALLET_ERROR,
      payload: error,
    });
  }
};

const addExpense = (data, id) => async (dispatch) => {
  dispatch({
    type: ACTIONS_TYPES.WALLET_IS_FETCHING,
  });

  try {
    const exchangeRates = await getAllCurrencies();

    dispatch({
      type: ACTIONS_TYPES.ADD_EXPENSE_SUCCESS,
      payload: {
        ...data,
        id,
        exchangeRates,
      },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS_TYPES.WALLET_ERROR,
      payload: error,
    });
  }
};

const updateTotalExpense = (expenses) => async (dispatch) => {
  dispatch({
    type: ACTIONS_TYPES.WALLET_IS_FETCHING,
  });

  try {
    const totalExpenses = addUpExpenses(expenses);

    dispatch({
      type: ACTIONS_TYPES.UPDATE_TOTAL_EXPENSES,
      payload: totalExpenses,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS_TYPES.WALLET_ERROR,
      payload: error,
    });
  }
};

export default {
  fetchCurrencies,
  addExpense,
  updateTotalExpense,
};
