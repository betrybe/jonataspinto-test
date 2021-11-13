import ACTIONS_TYPES from '../constants';
import services from '../services';

export const authenticate = (credentials) => (dispatch) => {
  try {
    const user = services.login(credentials);

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
