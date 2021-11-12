import ACTIONS_TYPES from '../constants';
import getAllCurrencies from '../services/getCurrencies';

export const fetchCurrencies = () => async (dispatch) => {
  dispatch({
    type: ACTIONS_TYPES.FETCH_CURRENCIES,
  });

  try {
    const currencies = await getAllCurrencies();

    dispatch({
      type: ACTIONS_TYPES.FETCH_CURRENCIES_SUCCESS,
      payload: { currencies },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS_TYPES.FETCH_CURRENCIES_ERROR,
      payload: error,
    });
  }
};

export default {
  fetchCurrencies,
};
