const getAllCurrencies = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');

  const responseParsedToJoson = await response.json();

  localStorage.setItem('currencies', JSON.stringify(responseParsedToJoson));

  return responseParsedToJoson;
};

export default getAllCurrencies;
