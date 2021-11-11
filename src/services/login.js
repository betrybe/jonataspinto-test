const login = (credentials) => new Promise((resolve) => {
  const { email } = credentials;

  resolve({ email });
});

export default login;
