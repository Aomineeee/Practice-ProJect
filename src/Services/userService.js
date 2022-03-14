import axios from "axios";
import { BARE_URL, TOKEN_CYBERSOFT } from "../Utils/config";

export const userService = {
  dangKy: (values) => {
    return axios({
      url: `${BARE_URL}/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: values,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
  dangNhap: (values) => {
    return axios({
      url: `${BARE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: values,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
};
