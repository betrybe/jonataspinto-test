const mockTimeout = 2000;

const login = (credentials) => new Promise((resolve) => {
  setTimeout(() => (
    resolve({ email: credentials.email })
  ), mockTimeout);
});

export default login;
