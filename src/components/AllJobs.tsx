import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/allJobs.css";
import { Circles } from "react-loader-spinner";

const url = "https://freelancer-api.p.rapidapi.com/api/find-job";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7b475e1213mshdad1befbdd76219p103e01jsn11f018ef47d7",
    "X-RapidAPI-Host": "freelancer-api.p.rapidapi.com",
  },
};

type JobData = {
  "ends in": string;
  "freelancers-bids": string;
  payment: string;
  "project-description": string;
  "project-link": string;
  "project-price": string;
  "project-tags": string;
  "project-title": string;
};

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState<JobData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setAllJobs(result.posts);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const shortDesc = (desc: string): string => {
    const value = desc.slice(0, 150) + "...";
    return value;
  };

  return (
    <div className="all-jobs-main-container">
      <Navbar />
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
        <ul className="all-jobs-data-container">
          {allJobs &&
            allJobs.map((each) => (
              <li key={each["project-title"]} className="jobs-info-container">
                <div className="job-title-due-info-container">
                  <p className="job-title-text">
                    Title:{" "}
                    <span className="job-title-highlight short-title">
                      {each["project-title"]}
                    </span>
                  </p>
                </div>
                <p className="job-title-text">
                  Description:{" "}
                  <span className="job-title-highlight">
                    {shortDesc(each["project-description"])}
                  </span>
                </p>
                <p className="job-title-text">
                  Tags:{" "}
                  <span className="job-title-highlight">
                    {each["project-tags"]}
                  </span>
                </p>
                <div className="job-title-due-info-container">
                  <p className="job-title-text">
                    Bids:{" "}
                    <span className="job-title-highlight">
                      {each["freelancers-bids"]}
                    </span>
                  </p>
                  <p className="job-title-text">
                    Due:{" "}
                    <span className="job-title-highlight due-date">
                      {each["ends in"]}
                    </span>
                  </p>
                  <p className="job-title-text">
                    Pay:{" "}
                    <span className="job-price">{each["project-price"]}</span>
                  </p>
                </div>
                <div className="link-container">
                  <p className="job-title-text">Project Link: </p>
                  <a
                    className="job-title-highlight project-link "
                    href={each["project-link"]}
                  >
                    {each["project-link"]}
                  </a>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default AllJobs;
