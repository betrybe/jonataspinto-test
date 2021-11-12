import ACTIONS_TYPES from '../constants';
import getAllCurrencies from '../services/getCurrencies';

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

export default {
  fetchCurrencies,
  addExpense,
};
