import { data } from "autoprefixer";
import axios from "axios";
import { BARE_URL, TOKEN_CYBERSOFT } from "../Utils/config";

export const movieService = {
  layDanhSachPhim: () => {
    return axios({
      url: `${BARE_URL}/api/QuanLyPhim/LayDanhSachPhim`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
  },
};
