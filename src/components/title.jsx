import { useNavigate } from "react-router-dom";

const Title = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-teal-900 text-white p-2 font-bold ">
        <div className="flex justify-between">
          <div
            onClick={() => {
              navigate(-1);
            }}
          >
            {" "}
            {props.title != "Movies" && <>{"<"}</>}
          </div>
          <div>{props.title}</div>
          <div
            onClick={() => {
              navigate("/add");
            }}
          >
            {props.title === "Movies" && <> +</>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
