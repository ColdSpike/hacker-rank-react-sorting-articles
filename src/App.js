import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [sortOnField, setSortOnField] = useState(null);

  articles.sort((a, b) => {
    if (a[sortOnField || "upvotes"] > b[sortOnField || "upvotes"]) {
      return -1;
    }
    if (a[sortOnField || "upvotes"] < b[sortOnField || "upvotes"]) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => setSortOnField("upvotes")}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => setSortOnField("date")}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articles} />
    </div>
  );
}

export default App;
