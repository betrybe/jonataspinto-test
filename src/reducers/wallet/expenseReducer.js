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
    [TYPES.LOAD_RECORD_TO_EDIT]: (state, action) => ({
      ...state,
      recordToEdit: action.payload,
      status: TYPES.STATUS_SUCCESS,
    }),
    [TYPES.SAVE_EDITED_RECORD]: (state, action) => ({
      ...state,
      expenses: action.payload,
      recordToEdit: null,
      status: TYPES.STATUS_SUCCESS,
    }),
  };

  return REDUCERS;
};

export default expenseReducer;
