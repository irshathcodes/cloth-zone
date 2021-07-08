import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h5>
        Sorry, Page not found 😢
        <Link to="/">Back Home</Link>
      </h5>
    </div>
  );
};

export default Error;
