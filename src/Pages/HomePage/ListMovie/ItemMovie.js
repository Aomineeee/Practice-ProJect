import React from "react";
import { NavLink } from "react-router-dom";

export default function ItemMovie({ data }) {
  return (
    <div className="w-full h-84 rounded-lg shadow-xl overflow-hidden space-y-3 flex flex-col">
      <img className="w-full h-44 object-cover" src={data.hinhAnh} alt="" />
      <div className="p-3 flex flex-col justify-between flex-grow">
        <div>
          <p className="text-center uppercase space-y-3 ">
            {data.tenPhim.length > 40
              ? data.tenPhim.substring(0, 40) + "..."
              : data.tenPhim}
          </p>
          <p className="text-xs text-gray-500">
            {data.moTa.length > 80
              ? data.moTa.substring(0, 80) + "..."
              : data.moTa}
          </p>
        </div>
        <NavLink
          className="w-full flex justify-center"
          to={`/movie/${data.maPhim}`}
        >
          <button className="bg-red-600 text-white w-full cursor-pointer text-center rounded-lg py-2 hover:bg-white hover:text-red-600 transition duration-300 hover:shadow-lg hover:border-red-600 border-1 border-opacity-0 hover:border-opacity-100">
            Xem Chi Tiết
          </button>
        </NavLink>
      </div>
    </div>
  );
}
