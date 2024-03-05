import axios from "axios";
import Title from "../components/title";
import { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Input, Form, Spin } from "antd";

const EditMovie = () => {
  const [singleMovieData, setSingleMovieData] = useState({});
  const navigate = useNavigate();

  const { movie_id } = useParams();

  useEffect(() => {
    getSingleMovies(movie_id);
  }, []);

  const getSingleMovies = async (movie_id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/movie/${movie_id}`
      );
      setSingleMovieData(response.data.moviesData);
    } catch (e) {
      alert("Err");
    }
  };

  const onFinish = async (values) => {
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
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Movie name"
          name="name"
          initialValue={singleMovieData.name}
          rules={[{ required: true, message: "Movie name is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Info"
          name="info"
          rules={[{ required: true, message: "Info is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Image is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Rating"
          name="rating"
          rules={[
            {
              required: true,
              message: "Rating is required",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="default" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditMovie;
