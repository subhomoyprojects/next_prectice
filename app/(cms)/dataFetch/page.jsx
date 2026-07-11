"use client";

import { useState, useEffect } from "react";

export default function DataFetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/comments";
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
