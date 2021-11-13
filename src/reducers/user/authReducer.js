import TYPES from '../../constants';

const authReducer = () => {
  const REDUCERS = {
    [TYPES.LOGIN_REQUEST]: (state) => ({
      ...state,
      status: TYPES.STATUS_LOADING,
    }),
    [TYPES.LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      ...action.payload,
      status: TYPES.STATUS_SUCCESS,
    }),
    [TYPES.LOGIN_ERROR]: (state, action) => ({
      ...state,
      error: action.payload,
      status: TYPES.STATUS_ERROR,
    }),
  };

  return REDUCERS;
};

export default authReducer;
