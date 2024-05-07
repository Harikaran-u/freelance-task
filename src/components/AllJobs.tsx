import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/allJobs.css";
import { ThreeDots } from "react-loader-spinner";
import ErrorContainer from "./ErrorContainer";
import Pagination from "./Pagination";

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
  const [allJobs, setAllJobs] = useState<JobData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [pageLength, setPageLength] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPageList, setCurrentPageList] = useState<JobData[]>([]);

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const totalLength = Math.ceil(result.posts.length / 10);
      setAllJobs(result.posts);
      setPageLength(totalLength);
      setCurrentPageList(result.posts.slice(0, 10));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const shortDesc = (desc: string): string => {
    const value = desc.slice(0, 150) + "...";
    return value;
  };

  const handlePagination = (n: number) => {
    setCurrentPage(n);
    const pageNum = (n - 1) * 10;
    const copyList = [...allJobs];
    const selectedData = copyList.splice(pageNum, 10);
    setCurrentPageList(selectedData);
  };

  return (
    <div className="all-jobs-main-container">
      <Navbar />
      {isLoading && (
        <div className="loader-container">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#5bbcff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {!isLoading && (
        <ul className="all-jobs-data-container">
          {allJobs &&
            currentPageList.map((each) => (
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
      {isError && <ErrorContainer />}
      <Pagination
        totalPages={pageLength}
        currentPage={currentPage}
        updatePage={handlePagination}
      />
    </div>
  );
};

export default AllJobs;
