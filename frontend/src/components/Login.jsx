import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ENDPOINT } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    if (!email || !password) {
      setError("Email and password are required");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Call the login endpoint
      const configuration = {
        method: "POST",
        url: `${ENDPOINT}/api/users/login`,
        data: {
          email,
          password,
        },
      };
      axios(configuration)
        .then((result) => {
          console.log(result);
          if (result.status === 200) {
            cookies.set("ID", result.data.id, { path: "/" });
            cookies.set("TOKEN", result.data.token, { path: "/" });
            setLogin(true);
          } else {
            setError(result.data.message);
          }
        })
        .catch((error) => {
          setError(error.response.data.message);
          error = new Error();
        });
      // ...

      // Handle login success or failure
    }
  };

  useEffect(() => {
    //const token = cookies.get("token");
    if (login) {
      return navigate("/");
    }
  }, [login]);

  return (
    <div className="flex justify-center items-center h-screen md:w-1/2">
      {/* {message && (
        <div
          id="message"
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {message}
        </div>
      )} */}
      <div className="w-full max-w-sm">
        <h1 className="text-2xl text-center mb-4">Login</h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
