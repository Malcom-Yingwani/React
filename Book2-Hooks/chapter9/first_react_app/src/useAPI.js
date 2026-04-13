import { useState, useEffect } from "react";
import axios from "axios";

const useAPI = (endpoint) => {
  const [data, setData] = useState([]); // initial state empty array

  //To call data when component is mounted,
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get(endpoint);
    setData(response.data);
  };
  return data;
};

export default useAPI;

/*
Purpose:
Custom React hook for fetching data from a given API endpoint using Axios.

Parameters:
- endpoint: the URL to send the GET request to

State Structure:
- data: stores the fetched data (initialized as an empty array)

Core Functionality:
- Uses useEffect to trigger a data fetch when the component mounts
- Sends a GET request to the provided endpoint using Axios
- Updates the data state with the response from the API

Implementation Details:
- getData is an async function that handles the API call
- useEffect has an empty dependency array, so it runs only once on mount
- Assumes the API response contains data in response.data

Limitations:
- Does not refetch data if the endpoint changes
- Lacks error handling for failed requests

Output:
Returns the fetched data for use in other components
*/
