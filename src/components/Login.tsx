import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "../styles/signup.css";
import ErrorContainer from "./ErrorContainer";

const loginReqUrl = "https://apis.ccbp.in/login";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMsg("");
    setUsername(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMsg("");
    setPassword(e.target.value);
  };

  // user data backend submit & error handling

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const configOptions = {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    };

    try {
      const response = await fetch(loginReqUrl, configOptions);
      const data = await response.json();
      if (response.ok) {
        setUsername("");
        setPassword("");
        const token = data.jwt_token;
        Cookies.set("authToken", token, { expires: 30, path: "/" });
        navigate("/", { replace: true });
      } else {
        setUsername("");
        setPassword("");
        setErrorMsg(data.error_msg);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className="sign-up-main-container">
      {!isError && (
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
          {errorMsg !== "" && <p className="warning-info">{errorMsg}</p>}
          <button type="submit" className="sign-up-btn">
            login
          </button>
        </form>
      )}
      {isError && <ErrorContainer />}
    </div>
  );
};

export default SignUp;
