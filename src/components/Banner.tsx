import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container">
      <h1 className="banner-head">Right you're here...</h1>
      <h1 className="banner-qn">Choose who you are?</h1>
      <div className="home-action-container">
        <Link to="/all-freelancers" className="link-style">
          <button className="banner-btn">I'm client</button>
        </Link>
        <Link to="/all-jobs" className="link-style">
          <button className="banner-btn">I'm freelancer</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
