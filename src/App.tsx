import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import AllFreelancers from "./components/AllFreelancers";
import CreateProfile from "./components/CreateProfile";
import Messenger from "./components/Messenger";
import AllJobs from "./components/AllJobs";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/all-freelancers" element={<AllFreelancers />} />
          <Route path="/edit-profile" element={<CreateProfile />} />
          <Route path="/message/:username" element={<Messenger />} />
          <Route path="/all-jobs" element={<AllJobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
