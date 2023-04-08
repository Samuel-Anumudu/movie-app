import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mx-auto container px-4 p-20 text-3xl">
      <h1>The Page you're searching for doesn't exit.😞</h1>
      <Link to={"/"} className="text-red underline">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
