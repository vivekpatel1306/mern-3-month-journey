import { useLocation } from "react-router-dom";

export const Parent=()=> {
  const location = useLocation();

  console.log(location);

  return <h1>Current Path: {location.pathname}</h1>;
}