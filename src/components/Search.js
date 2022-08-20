import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { searchContext } from "../Contexts/searchContext";
const Search = ({ hideButtons }) => {
  const navigate = useNavigate();
  const { input, setInput } = useContext(searchContext);
  const search = (e) => {
    e.preventDefault();
    console.log(input);
    navigate("/search");
  };
  return (
    <>
      <form className="search">
        <div className="search_input">
          <SearchIcon className="search_inputIcon" />
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <MicIcon />
        </div>
        {hideButtons ? (
          <div className="search_buttonsHidden">
            <Button onClick={search} type="submit" variant="outlined">
              Googla Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        ) : (
          <div className="search_buttons">
            <Button onClick={search} type="submit" variant="outlined">
              Googla Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        )}
      </form>
    </>
  );
};

export default Search;
