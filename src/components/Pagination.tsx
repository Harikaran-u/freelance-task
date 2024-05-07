import "../styles/pagination.css";

type dataSet = {
  totalPages: number;
  currentPage: number;
  updatePage: (n: number) => void;
};

const Pagination = (props: dataSet) => {
  const { totalPages, currentPage, updatePage } = props;
  const pageList = Array.from(Array(totalPages).keys(), (x) => x + 1);

  return (
    <nav className="pagination-container">
      <ul className="page-list-container">
        {pageList.map((each) => (
          <li key={each} className="page-number-style">
            <button
              className={`page-btn ${
                each === currentPage && "current-page-btn"
              }`}
              onClick={() => updatePage(each)}
            >
              {each}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
