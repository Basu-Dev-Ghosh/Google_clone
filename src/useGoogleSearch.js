import React, { useState, useEffect } from "react";
import API_KEY from "./keys";
const CONTEXT_KEY = "a0b28f7ada0a94681";

function useGoogleSearch(input) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${input}`
      )
        .then((response) => response.json())
        .then((result) => setData(result));
    };
    fetchdata();
  }, [input]);
  return { data };
}

export default useGoogleSearch;
