import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Title from "../components/title";

const AddMovie = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await axios.post(`http://localhost:4000/movies`, values);
      navigate(-1);
    } catch (e) {
      console.log(e);
      alert("Cannot add new movie!");
    }
  };

  return (
    <>
      <Title title="Add Movie" />

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Movie name"
          name="name"
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

export default AddMovie;
