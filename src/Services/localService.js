let USER_INFOR = "USER_INFOR";
export const localService = {
  setUserInfor: (values) => {
    let data = JSON.stringify(values);
    localStorage.setItem(USER_INFOR, data);
  },
  getUserInfor: () => {
    if (JSON.parse(localStorage.getItem(USER_INFOR)))
      return localStorage.getItem(USER_INFOR);
  },
  removeUserInfor: () => {
    localStorage.removeItem(USER_INFOR, "");
  },
};
