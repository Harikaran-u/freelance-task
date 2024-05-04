import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isDataValid, setDataValid] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setDataValid(false);
    setIsSubmit(false);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setDataValid(false);
    setIsSubmit(false);
  };
  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDataValid(false);
    setIsSubmit(false);
    if (value !== password) {
      setIsPasswordValid(false);
      setDataValid(false);
    } else {
      setIsPasswordValid(true);
    }
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
    if (password === confirmPassword && username !== "") {
      setDataValid(true);
      setUsername("");
      setConfirmPassword("");
      setPassword("");
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="sign-up-main-container">
      <form className="sign-up-form-container" onSubmit={handleFormSubmit}>
        <h1 className="sign-up-head">Freelancer</h1>
        <div className="input-container">
          <label className="sign-up-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="sign-up-input"
            id="username"
            value={username}
            onChange={handleUsername}
            required
          />
        </div>
        <div className="input-container">
          <label className="sign-up-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="sign-up-input"
            id="password"
            value={password}
            onChange={handlePassword}
            required
          />
        </div>
        <div className="input-container">
          <label className="sign-up-label" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="sign-up-input"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            required
          />
        </div>
        <button type="submit" className="sign-up-btn">
          signup
        </button>
        {!isPasswordValid && (
          <p className="warning-info">Password is not matching...</p>
        )}
        {isSubmit && !isDataValid && (
          <p className="warning-info">
            Mismatch data. Please kindly give valid data
          </p>
        )}
        <p className="sign-up-info">
          Already a user{" "}
          <Link to="/login" className="link-style">
            <span className="sign-up-span">login?</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
