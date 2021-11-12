// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import TYPES from '../constants';

const initialState = {
  currencies: [],
  expenses: [],
  status: TYPES.STATUS_IDLE,
  error: null,
  totalExpenses: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case TYPES.WALLET_IS_FETCHING:
    return {
      ...state,
      isFetching: true,
      status: TYPES.STATUS_LOADING,
    };
  case TYPES.WALLET_ERROR:
    return {
      error: action.payload,
      isFetching: false,
      status: TYPES.STATUS_ERROR,
    };
  case TYPES.FETCH_CURRENCIES_SUCCESS:
    return {
      ...state,
      ...action.payload,
      isFetching: false,
      status: TYPES.STATUS_SUCCESS,
    };
  case TYPES.ADD_EXPENSE_SUCCESS:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
      isFetching: false,
      status: TYPES.STATUS_SUCCESS,
    };
  case TYPES.UPDATE_TOTAL_EXPENSES:
    return {
      ...state,
      totalExpenses: action.payload,
      status: TYPES.STATUS_SUCCESS,
    };

  default:
    return state;
  }
};

export default reducer;
