import { ChangeEvent, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../styles/createProfile.css";
import Navbar from "./Navbar";

const defaultValues = {
  name: "Rahul",
  skills:
    "HTML, CSS, JavaScript, React.js, Tailwind CSS, Node.js, Python, Front-end Development, Back-end Development, Full-stack Development, Client Communication, Project Planning, Problem-solving, Time Management, Adaptability",
  description:
    "As a freelance full-stack developer for a year, I've built and fixed websites and apps. I've handled both the visible parts users interact with (front end) and the hidden parts that make everything work (back end). For the front end, I've used languages like HTML, CSS, and JavaScript, along with frameworks like React.js for dynamic interfaces and Tailwind CSS for streamlined styling. On the back end, I've utilized tools like Node.js or Python. I've connected these parts together to ensure smooth communication. Freelancing has honed my abilities to understand client needs, plan projects, write code, test thoroughly, and manage time effectively.",
};

const CreateProfile = () => {
  const [username, setUsername] = useState<string>(defaultValues.name);
  const [skills, setSkills] = useState<string>(defaultValues.skills);
  const [description, setDescription] = useState<string>(
    defaultValues.description
  );

  const notify = () =>
    toast.success("Profile updated successfully", {
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSkills = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSkills(e.target.value);
  };

  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleProfileSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername("");
    setDescription("");
    setSkills("");
  };

  return (
    <div className="profile-main-container">
      <Navbar />
      <div className="profile-update-container">
        <form className="profile-form-container" onSubmit={handleProfileSubmit}>
          <h1 className="profile-head">Freelancer</h1>
          <div className="profile-user-input-container">
            <label htmlFor="username" className="profile-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="profile-input"
              placeholder="username..."
              value={username}
              onChange={handleUsername}
              required
            />
          </div>
          <div className="profile-user-input-container">
            <label className="profile-label" htmlFor="skills">
              Skills
            </label>
            <textarea
              rows={5}
              cols={30}
              id="skills"
              className="profile-text-area-input"
              placeholder="skills..."
              value={skills}
              onChange={handleSkills}
              required
            />
          </div>
          <div className="profile-user-input-container">
            <label className="profile-label" htmlFor="description">
              Description
            </label>
            <textarea
              rows={8}
              cols={30}
              id="description"
              className="profile-text-area-input"
              placeholder="description..."
              value={description}
              onChange={handleDescription}
              required
            />
          </div>
          <button type="submit" className="profile-submit-btn" onClick={notify}>
            Submit
          </button>
          <Toaster position="top-right" />
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
