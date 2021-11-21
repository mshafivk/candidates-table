const serviceUrl = `http://personio-fe-test.herokuapp.com/api/v1/candidates`;

// eslint-disable-next-line no-unused-vars
const testUrl = 'http://localhost:3000/data/response.json';

export const fetchCandidates = async () => {
  const resp = await fetch(serviceUrl);
  const result = await resp.json();
  return result;
};
