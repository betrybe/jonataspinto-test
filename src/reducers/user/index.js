// Esse reducer será responsável por tratar as informações da pessoa usuária
import TYPES from '../../constants';
import authReducer from './authReducer';

const initialState = {
  email: null,
  status: TYPES.STATUS_IDLE,
  error: null,
};

const reducer = (state = initialState, action) => {
  if (!action.type) {
    return state;
  }

  const REDUCERS = {
    ...authReducer(),
  };

  return REDUCERS[action.type] ? REDUCERS[action.type](state, action) : state;
};

export default reducer;
