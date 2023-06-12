import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Protected from "./utils/AuthenticatedRoute";
import Free from "./utils/FreeRoute";
import BlogPage from "./components/SingleBlog";
import CreateBlog from "./components/CreateBlog";
import EditBlog from "./components/EditBlog";
import Feed from "./components/Feed";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route
          path="/createblog"
          element={
            <Protected>
              <CreateBlog />
            </Protected>
          }
        />
        <Route
          path="/edit/:blogId"
          element={
            <Protected>
              <EditBlog />
            </Protected>
          }
        />
        <Route path="/blogs/:blogId" element={<BlogPage />} />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <Free>
              <Login />
            </Free>
          }
        />
      </Routes>
    </Router>
  );
}
