const login = (credentials) => {
  const { email } = credentials;

  return ({ email });
};

export default login;
