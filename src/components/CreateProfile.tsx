import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/createProfile.css";

const CreateProfile = () => {
  const [username, setUsername] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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
  };

  return (
    <div className="profile-main-container">
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
        <button type="submit" className="profile-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
