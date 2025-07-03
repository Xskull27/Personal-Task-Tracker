export const getUser = () => {
  return localStorage.getItem("username");
};

export const saveUser = (username) => {
  localStorage.setItem("username", username);
};
