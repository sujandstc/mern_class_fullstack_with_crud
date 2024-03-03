import axios from "axios";
import Title from "../components/title";
import { useRef } from "react";

const EditMovie = () => {
  const movie_name_ref = useRef();
  const rating_ref = useRef();
  const info_ref = useRef();
  const image_ref = useRef();

  const editMovie = async () => {
    const dataToSend = {
      name: movie_name_ref.current.value,
      rating: rating_ref.current.value,
      info: info_ref.current.value,
      image: image_ref.current.value,
    };

    try {
      await axios.patch(`http://localhost:4000/movies`, dataToSend);
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
          EditMovie();
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