import { localService } from "../../Services/localService";
import { SET_USER_INFOR } from "../constants/user";

const initialState = {
  userInfor: localService.getUserInfor(),
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFOR:
      state.userInfor = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
