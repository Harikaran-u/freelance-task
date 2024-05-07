import { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../styles/allFreelancer.css";
import ErrorContainer from "./ErrorContainer";
import Pagination from "./Pagination";

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
  const [isError, setIsError] = useState<boolean>(false);
  const [pageLength, setPageLength] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPageList, setCurrentPageList] = useState<FreelancerData[]>([]);
  const notify = () => toast.success("Message sent successfully");

  useEffect(() => {
    getAllFreelancersData();
  }, []);

  const getAllFreelancersData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const totalLength = Math.ceil(result.freelancers.length / 4);
      setFreelancerData(result.freelancers);
      setPageLength(totalLength);
      setCurrentPageList(result.freelancers.slice(0, 4));
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const shortDesc = (desc: string): string => {
    const value = desc.slice(0, 150) + "...";
    return value;
  };

  const handlePagination = (n: number) => {
    setCurrentPage(n);
    const pageNum = (n - 1) * 4;
    const copyList = [...freelancerData];
    const selectedData = copyList.splice(pageNum, 4);
    setCurrentPageList(selectedData);
  };

  return (
    <div className="all-freelancer-main-container">
      <Navbar />

      {!isError && (
        <h1 className="all-freelancers-head">Highly Passionate Freelancers</h1>
      )}
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
        <>
          <ul className="all-freelancers-data">
            {freelancerData !== null &&
              currentPageList.map((each) => (
                <Popup
                  trigger={
                    <li key={each.name} className="freelancer-details">
                      <div className="freelancer-details-info-container">
                        <p className="freelancer-text">
                          Name:{" "}
                          <span className="highlight-info">{each.name}</span>
                        </p>

                        <p className="freelancer-text">
                          <IoStar fill="#FFC93C" />{" "}
                          <span className="highlight-info">{each.stars}</span>
                        </p>
                      </div>
                      <p className="freelancer-text">
                        Skills:{" "}
                        <span className="highlight-info">{each.skills}</span>
                      </p>
                      <p
                        className="freelancer-text"
                        title="click here for more"
                      >
                        Bio:{" "}
                        <span className="highlight-info">
                          {shortDesc(each.bio)}
                        </span>
                      </p>
                      <p className="freelancer-text">
                        Reviews:{" "}
                        <span className="highlight-info">{each.reviews}</span>
                      </p>
                      <p className="freelancer-text">
                        Earnings:{" "}
                        <span className="highlight-info">{each.earnings}</span>
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
                      <p className="freelancer-text">
                        <span className="highlight-info hour-rating">
                          {each.hourRating}
                        </span>
                      </p>
                      <button className="message-me-btn" onClick={notify}>
                        Message
                      </button>
                      <ToastContainer autoClose={2000} theme="dark" />
                    </li>
                  }
                  modal
                  nested
                >
                  <div className="data-container">
                    <h1 className="freelancer-bio-head">{each.name}</h1>
                    <p className="freelancer-bio-desc">{each.bio}</p>
                  </div>
                </Popup>
              ))}
          </ul>
        </>
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

export default AllFreelancers;
