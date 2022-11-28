const setStore = (key:string ,payload: string) => {
  localStorage.setItem(key, payload);
};

const getStore = (key:string) => {
  return localStorage.getItem(key);
};

export default {
  getStore,
  setStore
}