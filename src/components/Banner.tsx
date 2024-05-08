import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container">
      <img
        src="https://res.cloudinary.com/diuvnny8c/image/upload/v1714802472/7965336_3699669_kcj43w.jpg"
        className="banner-img"
        alt="banner-image"
      />

      <div className="banner-info-container">
        <h1 className="banner-head">Right you're here...</h1>
        <h1 className="banner-qn">Choose who you are?</h1>
        <div className="home-action-container">
          <Link to="/all-freelancers?page=1" className="link-style">
            <button className="banner-btn">I'm client</button>
          </Link>
          <Link to="/all-jobs?page=1" className="link-style">
            <button className="banner-btn">I'm freelancer</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
