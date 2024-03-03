import axios from "axios";
import Title from "../components/title";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get("http://localhost:4000/movies");
      setMovies(response.data.data);
    } catch (e) {
      alert("Err");
    }
  };

  const deleteMovie = async (movie_id) => {
    try {
      await axios.delete(`http://localhost:4000/movies/${movie_id}`);
      getMovies();
    } catch (e) {
      alert("Cannot delete!");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Title title="Movies" />
      {movies.length < 1 && (
        <>
          <div className="p-10 text-center">No movies here!</div>
        </>
      )}

      {movies.map((movie) => (
        <>
          <div className=" p-3 bg-gray-200 m-2 mt-2 rounded-xl">
            <div className="flex justify-between ">
              <div>
                <b>{movie.name}</b>
                <br />
                Rating: {movie.rating}
              </div>

              <div className="flex">
                <button
                  className="bg-red-600 text-white p-2 rounded-[50%] h-10 w-10"
                  onClick={() => {
                    navigate(`/edit/${movie._id}`);
                  }}
                >
                  edit
                </button>

                <button
                  className="bg-red-600 text-white p-2 rounded-[50%] h-10 w-10"
                  onClick={() => {
                    deleteMovie(movie._id);
                  }}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default App;
