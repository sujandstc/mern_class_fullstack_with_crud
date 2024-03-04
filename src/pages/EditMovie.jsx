import axios from "axios";
import Title from "../components/title";
import { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditMovie = () => {
  const navigate = useNavigate();

  const { movie_id } = useParams();

  const movie_name_ref = useRef();
  const rating_ref = useRef();
  const info_ref = useRef();
  const image_ref = useRef();

  useEffect(() => {
    getSingleMovies(movie_id);
  }, []);

  const getSingleMovies = async (movie_id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/movie/${movie_id}`
      );
      movie_name_ref.current.value = response.data.moviesData.name ?? "";
      rating_ref.current.value = response.data.moviesData.rating ?? "";
      info_ref.current.value = response.data.moviesData.info ?? "";
      image_ref.current.value = response.data.moviesData.image ?? "";
    } catch (e) {
      alert("Err");
    }
  };

  const editMovie = async () => {
    const dataToSend = {
      movie_id: movie_id,
      name: movie_name_ref.current.value,
      rating: rating_ref.current.value,
      info: info_ref.current.value,
      image: image_ref.current.value,
    };

    try {
      await axios.patch(`http://localhost:4000/movies`, dataToSend);
      navigate(-1);
    } catch (e) {
      console.log(e);
      alert("Cannot add new movie!");
    }
  };

  return (
    <>
      <Title title="Edit Movie" />
      <form
        className="p-3"
        onSubmit={(e) => {
          e.preventDefault();
          editMovie();
        }}
      >
        Movie name:
        <br />
        <input
          type="text"
          className="bg-gray-300 p-1"
          ref={movie_name_ref}
        ></input>{" "}
        <br />
        <br />
        Info:
        <br />
        <input
          type="text"
          className="bg-gray-300 p-1"
          ref={info_ref}
        ></input>{" "}
        <br />
        <br />
        Ratings:
        <br />
        <input
          type="text"
          className="bg-gray-300 p-1"
          ref={rating_ref}
        ></input>{" "}
        <br />
        <br />
        Image:
        <br />
        <input
          type="text"
          className="bg-gray-300 p-1"
          ref={image_ref}
        ></input>{" "}
        <br />
        <br />
        <button type="submit"> Update movie</button>
      </form>
    </>
  );
};

export default EditMovie;
