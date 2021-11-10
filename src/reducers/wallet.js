// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import TYPES from '../constants';

const initialState = {
  currencies: [],
  expenses: [],
  status: TYPES.STATUS_IDLE,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case TYPES.LOAD_WALLET:
    return {
      ...state,
      status: TYPES.STATUS_LOADING,
    };
  case TYPES.LOAD_WALLET_SUCCESS:
    return {
      ...state,
      ...action.payload,
      status: TYPES.STATUS_SUCCESS,
    };
  case TYPES.LOAD_WALLET_ERROR:
    return {
      error: action.payload,
      status: TYPES.STATUS_ERROR,
    };

  default:
    return state;
  }
};

export default reducer;
