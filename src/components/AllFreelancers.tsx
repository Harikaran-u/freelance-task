import { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import Navbar from "./Navbar";
import { Circles } from "react-loader-spinner";
import "../styles/allFreelancer.css";
import { Link } from "react-router-dom";

const url = "https://freelancer-api.p.rapidapi.com/api/find-freelancers";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7b475e1213mshdad1befbdd76219p103e01jsn11f018ef47d7",
    "X-RapidAPI-Host": "freelancer-api.p.rapidapi.com",
  },
};

type FreelancerData = {
  name: string;
  hourRating: string;
  reviews: string;
  earnings: string;
  stars: string;
  skills: string;
  bio: string;
  freelancerProfile: string;
};

const AllFreelancers = () => {
  const [freelancerData, setFreelancerData] = useState<FreelancerData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getAllFreelancersData();
  }, []);

  const getAllFreelancersData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setFreelancerData(result.freelancers);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="all-freelancer-main-container">
      <Navbar />
      <h1 className="all-freelancers-head">Highly Passionate Freelancers</h1>
      {isLoading && (
        <div className="loader-container">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      {!isLoading && (
        <ul className="all-freelancers-data">
          {freelancerData !== null &&
            freelancerData.map((each) => (
              <li key={each.name} className="freelancer-details">
                <div className="freelancer-details-info-container">
                  <p className="freelancer-text">
                    Name: <span className="highlight-info">{each.name}</span>
                  </p>

                  <p className="freelancer-text">
                    <IoStar fill="#FFC93C" />{" "}
                    <span className="highlight-info">{each.stars}</span>
                  </p>
                </div>
                <p className="freelancer-text">
                  Skills: <span className="highlight-info">{each.skills}</span>
                </p>
                <p className="freelancer-text">
                  Bio: <span className="highlight-info">{each.bio}</span>
                </p>
                <p className="freelancer-text">
                  Reviews:{" "}
                  <span className="highlight-info">{each.reviews}</span>
                </p>
                <p className="freelancer-text">
                  Earnings:{" "}
                  <span className="highlight-info">{each.earnings}</span>
                </p>
                <div className="freelancer-details-info-container">
                  <p className="freelancer-text">
                    <span className="highlight-info hour-rating">
                      {each.hourRating}
                    </span>
                  </p>
                  <p className="freelancer-text">
                    Reach me:{" "}
                    <a
                      className="highlight-info profile-url"
                      href={each.freelancerProfile}
                    >
                      {each.freelancerProfile}
                    </a>
                  </p>
                </div>
                <Link to={`/message/${each.name}`} className="link-style">
                  <button className="message-me-btn">Message</button>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default AllFreelancers;
