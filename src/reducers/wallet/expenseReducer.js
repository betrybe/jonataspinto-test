import TYPES from '../../constants';

const expenseReducer = () => {
  const REDUCERS = {
    [TYPES.ADD_EXPENSE_SUCCESS]: (state, action) => ({
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
      isFetching: false,
      status: TYPES.STATUS_SUCCESS,
    }),
    [TYPES.UPDATE_TOTAL_EXPENSES]: (state, action) => ({
      ...state,
      totalExpenses: action.payload,
      status: TYPES.STATUS_SUCCESS,
    }),
    [TYPES.DELETE_EXPENSE]: (state, action) => ({
      ...state,
      ...action.payload,
      status: TYPES.STATUS_SUCCESS,
    }),
  };

  return REDUCERS;
};

export default expenseReducer;