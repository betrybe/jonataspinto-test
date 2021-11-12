import ACTIONS_TYPES from '../constants';
import services from '../services';

export const authenticate = (credentials) => async (dispatch) => {
  dispatch({
    type: ACTIONS_TYPES.LOGIN_REQUEST,
  });

  try {
    const user = await services.login(credentials);

    dispatch({
      type: ACTIONS_TYPES.LOGIN_SUCCESS,
      payload: { ...user },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS_TYPES.LOGIN_ERROR,
      payload: error,
    });
  }
};

export default {
  authenticate,
};
