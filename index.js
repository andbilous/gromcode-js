/* eslint-disable no-restricted-syntax */

export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = [...arr];
  return res.reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  if (balances[index] - amount < 0) {
    return -1;
  }
  return balances[index] - amount;
};

export const getAdults = (obj) => {
  if (typeof obj !== "object") {
    return null;
  }
  const res = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      res[key] = obj[key];
    }
  }
  return res;
};
