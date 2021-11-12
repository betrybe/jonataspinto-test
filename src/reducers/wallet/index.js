// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import TYPES from '../../constants';
import currencyReducer from './currencyReducer';
import expenseReducer from './expenseReducer';

const initialState = {
  currencies: [],
  expenses: [],
  status: TYPES.STATUS_IDLE,
  error: null,
  totalExpenses: 0,
  recordToEdit: null,
};

const reducer = (state = initialState, action) => {
  if (!action.type) {
    return state;
  }

  const REDUCERS = {
    [TYPES.WALLET_IS_FETCHING]: (_state) => ({
      ..._state,
      isFetching: true,
      status: TYPES.STATUS_LOADING,
    }),
    [TYPES.WALLET_ERROR]: (_state, _action) => ({
      ..._state,
      error: _action.payload,
      isFetching: false,
      status: TYPES.STATUS_ERROR,
    }),
    ...currencyReducer(),
    ...expenseReducer(),
  };

  return REDUCERS[action.type] ? REDUCERS[action.type](state, action) : state;
};

export default reducer;
