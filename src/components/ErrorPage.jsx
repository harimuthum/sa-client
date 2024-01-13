/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ErrorPage = ({ error }) => {
  return (
    <div className="flex items-center justify-center flex-col h-[100vh] w-full p-7">
      <h2 style={{ marginBottom: "30px" }}>{error}</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
