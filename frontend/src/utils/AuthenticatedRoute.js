import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const Protected = ({ children }) => {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  console.log(token);
  if (token.length === 0 || token === undefined || token === null) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
