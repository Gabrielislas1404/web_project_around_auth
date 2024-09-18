const BASE_URL = '"https://register.nomoreparties.co";';

const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      return Promise.reject(`Error: ${data.status}`);
    })
    .catch((err) => console.error('Error:', err));
};

const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      return Promise.reject(`Error: ${data.status}`);
    })
    .catch((err) => console.error('Error', err));
};
