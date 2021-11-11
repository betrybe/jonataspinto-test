const mockTimeout = 2000;

const login = (credentials) => new Promise((resolve) => {
  const { email } = credentials;

  setTimeout(() => (
    resolve({ email })
  ), mockTimeout);
});

export default login;
