import ACTIONS_TYPES from '../constants';
import getAllCurrencies from '../services/getCurrencies';
import addUpExpenses from '../utils/addUpExpenses';
import revomeItemOfList from '../utils/revomeItemOfList';
import selectItemOfList from '../utils/selectItemOfList';
import replaceItemOfList from '../utils/replaceItemOfList';

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

const removeExpense = (list, item) => async (dispatch) => {
  dispatch({
    type: ACTIONS_TYPES.WALLET_IS_FETCHING,
  });
  const expenses = revomeItemOfList(list, item);

  try {
    dispatch({
      type: ACTIONS_TYPES.DELETE_EXPENSE,
      payload: { expenses },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS_TYPES.WALLET_ERROR,
      payload: error,
    });
  }
};

const loadRecordToEdit = (list, item) => async (dispatch) => {
  dispatch({
    type: ACTIONS_TYPES.WALLET_IS_FETCHING,
  });

  const payload = selectItemOfList(list, item);

  try {
    dispatch({
      type: ACTIONS_TYPES.LOAD_RECORD_TO_EDIT,
      payload,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS_TYPES.WALLET_ERROR,
      payload: error,
    });
  }
};

const saveEditedRecord = (list, changedItem) => async (dispatch) => {
  dispatch({
    type: ACTIONS_TYPES.WALLET_IS_FETCHING,
  });

  const payload = replaceItemOfList(list, changedItem);

  try {
    dispatch({
      type: ACTIONS_TYPES.SAVE_EDITED_RECORD,
      payload,
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
  removeExpense,
  loadRecordToEdit,
  saveEditedRecord,
};
