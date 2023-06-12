import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const Free = ({ children }) => {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");
  console.log(token);
  if (token !== undefined) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Free;
