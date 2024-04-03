export const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getItem = (key) => {
  const data = localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error parsing JSON for key:', key, 'Error:', error);
    return null; // Or handle the error as needed
  }
};




export const removeItem = (key) => localStorage.removeItem(key);

export const setItemSession = (key, value) =>
  sessionStorage.setItem(key, JSON.stringify(value));

export const getItemSession = (key) => JSON.parse(sessionStorage.getItem(key));

export const removeItemSession = (key) => sessionStorage.removeItem(key);
