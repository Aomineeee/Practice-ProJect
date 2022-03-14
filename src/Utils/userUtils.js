import { localService } from "../Services/localService";

export const getToken = () => {
  let userInfor = localService.getUserInfor();
  return userInfor.accessToken;
};
