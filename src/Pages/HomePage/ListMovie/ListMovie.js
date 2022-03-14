import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LIST_FILM } from "../../../redux/constants/film";
import { movieService } from "../../../Services/movieService";
import ItemMovie from "./ItemMovie";

export default function ListMovie() {
  let { listFilm } = useSelector((state) => {
    return state.movieReducer;
  });
  let dispatch = useDispatch();
  useEffect(() => {
    movieService
      .layDanhSachPhim()
      .then((res) => {
        dispatch({
          type: SET_LIST_FILM,
          payload: res.data.content,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderListMovie = () => {
    return listFilm.map((item, index) => {
      if (index < 9) {
        return <ItemMovie data={item} key={index} />;
      }
    });
  };

  return (
    <div className="container py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {renderListMovie()}
    </div>
  );
}
