import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../../actions';
import loginSchema from './schema';

const useLoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [readyToSend, setReadyToSend] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    dispatch(authenticate(credentials));
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

  const handleValidationForm = (values) => {
    loginSchema.isValid(values).then((result) => result && setReadyToSend(result));
  };

  useEffect(() => {
    handleValidationForm(credentials);
  }, [credentials]);

  return {
    credentials,
    handleSubmit,
    handleChange,
    readyToSend,
  };
};

export default useLoginPage;
