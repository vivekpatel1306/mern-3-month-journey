import {Link} from "react-router-dom"
export const Home = () => {
  return (
    <>
    <h1>hi</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/notes">All todo</Link>
    </>
  );
};
