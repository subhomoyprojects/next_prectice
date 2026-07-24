"use client";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box } from "@mui/material";
import JokeServerCard from "../../../../components/jokeServerCard";
import { useEffect, useState } from "react";
// https://official-joke-api.appspot.com/random_joke

const JokesServerPage = () => {
  const [data, setData] = useState(null);
  const [flag, setFlag] = useState(false);
  const flagHandler = (flagValue) => {
    setFlag(flagValue);
  };

  const url = "https://official-joke-api.appspot.com/random_joke";
  async function fetchJoke() {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <Box className="flex justify-center align-middle p-2">
          <Image src="/images/tea-cup.png" alt="Tea Cup" width={100} height={100} />
        </Box>
        <CardContent className="text-center">
          <Typography gutterBottom variant="h5" component="div">
            {data?.setup}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {flag ? data?.punchline : "Click on Show Jokes to see the punchline!"}
          </Typography>
        </CardContent>
        <JokeServerCard flag={flag} flagHandler={flagHandler} />
      </Card>
    </>
  );
};
export default JokesServerPage;
