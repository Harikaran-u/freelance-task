import "../styles/home.css";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="main-home-container">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
