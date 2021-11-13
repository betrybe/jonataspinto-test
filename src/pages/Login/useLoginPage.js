import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from '../../actions';

const useLoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const minimumPassworLength = 6;

  const [readyToSend, setReadyToSend] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    dispatch(actions.authenticate(credentials));
    history.push('/carteira');
  }, [credentials, dispatch, history]);

  const handleChange = useCallback((event) => {
    const { value, name } = event.target;

    const handlers = {
      email: () => setCredentials((prevState) => ({ ...prevState, email: value })),
      password: () => setCredentials((prevState) => ({ ...prevState, password: value })),
    };

    return handlers[name]();
  }, []);

  const validateEmail = useCallback((email) => {
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    return re.test(String(email).toLowerCase());
  }, []);

  const handleValidationForm = useCallback((values) => {
    if (!validateEmail(values.email)) {
      return setReadyToSend(false);
    }
    if ([...values.password].length < minimumPassworLength) {
      return setReadyToSend(false);
    }
    setReadyToSend(true);
  }, [validateEmail]);

  useEffect(() => {
    handleValidationForm(credentials);
  }, [credentials, handleValidationForm]);

  return {
    credentials,
    handleSubmit,
    handleChange,
    readyToSend,
  };
};

export default useLoginPage;
