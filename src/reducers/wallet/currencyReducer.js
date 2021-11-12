import TYPES from '../../constants';

const currencyReducer = () => {
  const REDUCERS = {
    [TYPES.FETCH_CURRENCIES_SUCCESS]: (state, action) => ({
      ...state,
      ...action.payload,
      isFetching: false,
      status: TYPES.STATUS_SUCCESS,
    }),
  };

  return REDUCERS;
};

export default currencyReducer;
