const getAllCurrencies = async () => {
  const storageCurrencies = localStorage.getItem('currencies');

  if (!storageCurrencies) {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');

    const responseParsedToJoson = await response.json();

    localStorage.setItem('currencies', JSON.stringify(responseParsedToJoson));

    return responseParsedToJoson;
  }

  return JSON.parse(storageCurrencies);
};

export default getAllCurrencies;
