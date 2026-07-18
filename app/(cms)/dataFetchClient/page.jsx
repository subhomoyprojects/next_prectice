"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const DataFetchClient = () => {
  const [data, setData] = useState(null);
  const userName = useSearchParams().get("name");
  console.log(userName);

  useEffect(() => {
    if (!userName) return;
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.genderize.io/?name=${userName}`);

        console.log("Status:", response.status);

        const apiData = await response.json();
        console.log(apiData);

        setData(apiData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userName]);

  return (
    <>
      <h1>Data Fetch Client</h1>
      <p>{data ? data.name : "Loading..."}</p>
    </>
  );
};

export default DataFetchClient;
