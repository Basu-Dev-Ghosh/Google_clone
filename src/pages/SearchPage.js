import React, { useContext } from "react";
import "./SearchPage.css";
import { NavLink } from "react-router-dom";
import Google from "../images/Google.png";
import { searchContext } from "../Contexts/searchContext";

import useGoogleSearch from "../useGoogleSearch";
import Search from "../components/Search";

const SearchPage = () => {
  const { input } = useContext(searchContext);
  const {data}=useGoogleSearch(input);

  console.log(data);
  return (
    <>
      <div className="searchPage">
        <div className="searchPage_header">
          <NavLink to="/">
            <img src={Google} className="searchPage_logo" alt="Google pic" />
          </NavLink>
          <div className="searchPage_headerBody">
            <Search hideButtons={true} />
          </div>
        </div>
        <div className="searchPage_results">
          {input&&data?.items.map((item) => (
            <div className="searchPage_result">
              <a
                href={`${item.link}`}
                target="_blank"
                className="result_link"
              >
                {item.displayLink}
              </a>
              <a
                href={`${item.link}`}
                className="result_title"
                target="_blank"
              >
                <h2 className="result_title">{item.title}</h2>
              </a>
              <p className="result_snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
