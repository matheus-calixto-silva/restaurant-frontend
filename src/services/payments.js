import axios from 'axios';
const baseUrl = 'http://localhost:7000/api/menu/payments';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(({ data }) => data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then(({ data }) => data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(({ data }) => data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(({ data }) => data)
}

const paymentsService = {
  getAll,
  create,
  update,
  remove
};

export default paymentsService;