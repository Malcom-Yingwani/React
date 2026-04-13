import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);
  return data;
};
export default useFetch;

/*
Purpose:
Custom React hook for fetching data from a given API URL.

Parameters:
- url: the API endpoint to fetch data from

State Structure:
- data: stores the fetched data (initialized as an empty array)

Core Functionality:
- Uses useEffect to trigger a fetch request whenever the URL changes
- Fetches data from the provided URL
- Converts the response to JSON
- Updates the data state with the fetched result

Implementation Details:
- Dependency array [url] ensures the fetch runs on initial render and whenever the URL updates
- Uses promise chaining (.then) for handling asynchronous fetch
- Assumes the response is JSON and returns an array-like structure

Output:
Returns the fetched data, allowing components to reuse this logic easily
*/
