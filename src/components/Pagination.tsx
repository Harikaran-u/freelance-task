import { Link } from "react-router-dom";
import "../styles/pagination.css";

// props data types

type dataSet = {
  totalPages: number;
  currentPage: number;
  pathName: string;
};

const Pagination = (props: dataSet) => {
  const { totalPages, currentPage, pathName } = props;
  const pageList = Array.from(Array(totalPages).keys(), (x) => x + 1);

  return (
    <nav className="pagination-container">
      <ul className="page-list-container">
        {pageList.map((each) => (
          <Link
            to={`/${pathName}?page=${each}`}
            className="link-style"
            key={each}
          >
            <li key={each} className="page-number-style">
              <button
                className={`page-btn ${
                  each === currentPage && "current-page-btn"
                }`}
              >
                {each}
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
