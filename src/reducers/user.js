// Esse reducer será responsável por tratar as informações da pessoa usuária
import TYPES from '../constants';

const initialState = {
  email: null,
  status: TYPES.STATUS_IDLE,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case TYPES.LOGIN_REQUEST:
    return {
      ...state,
      status: TYPES.STATUS_LOADING,
    };
  case TYPES.LOGIN_SUCCESS:
    return {
      ...state,
      user: action.payload,
      status: TYPES.STATUS_SUCCESS,
    };
  case TYPES.LOGIN_ERROR:
    return {
      error: action.payload,
      status: TYPES.STATUS_ERROR,
    };

  default:
    return state;
  }
};

export default reducer;
