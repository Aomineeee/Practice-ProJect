import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SET_USER_INFOR } from "../../redux/constants/user";
import { localService } from "../../Services/localService";

export default function UserNav() {
  let { userInfor } = useSelector((state) => state.userReducer);
  let dispatch = useDispatch();
  let handleLogOut = () => {
    localService.removeUserInfor();
    dispatch({
      type: SET_USER_INFOR,
      payload: null,
    });
  };
  return (
    <div>
      {userInfor?.accessToken ? (
        <div className="flex items-center space-x-3">
          <span>{userInfor.hoTen}</span>
          <button
            className="bg-red-600 text-white rounded-lg px-4 py-2"
            onClick={handleLogOut}
          >
            Đăng Xuất
          </button>
        </div>
      ) : (
        <div>
          <NavLink to="/signin">
            <button className="bg-green-theme px-4 py-2 rounded-lg text-white">
              Đăng Nhập
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="bg-red-600 px-4 py-2 rounded-lg text-white">
              Đăng Ký
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
