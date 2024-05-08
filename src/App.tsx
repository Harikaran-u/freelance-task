import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import AllFreelancers from "./components/AllFreelancers";
import CreateProfile from "./components/CreateProfile";
import AllJobs from "./components/AllJobs";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/all-freelancers" element={<AllFreelancers />} />
          <Route path="/edit-profile" element={<CreateProfile />} />
          <Route path="/all-jobs" element={<AllJobs />} />
        </Route>
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
