export const setLocalStorage = (responseData: any) => {
  localStorage.setItem("tdlatoken", responseData.token);
  localStorage.setItem("tdlauser", JSON.stringify(responseData.data.data));
};

export const removeLocalStorage = (responseData: any) => {
  localStorage.removeItem("tdlatoken");
  localStorage.removeItem("tdlauser");
};
