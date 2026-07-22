"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
// https://official-joke-api.appspot.com/random_joke

const JokesComponent = () => {
  const [joke, setJoke] = useState({
    jokeData: null,
    showJoke: false,
  });

  const url = "https://official-joke-api.appspot.com/random_joke";
  const fetchedApiData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setJoke((prevState) => ({
        ...prevState,
        jokeData: data,
      }));
      console.log("Fetched joke:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchedApiData();
  }, []);

  const handelJokes = async () => {
    setJoke((prevState) => ({
      ...prevState,
      showJoke: false,
    }));
    await fetchedApiData();
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <Box className="flex justify-center align-middle p-2">
          <Image src="/images/tea-cup.png" alt="Tea Cup" width={100} height={100} />
        </Box>
        <CardContent className="text-center">
          <Typography gutterBottom variant="h5" component="div">
            {joke.jokeData ? joke.jokeData.setup : ""}
          </Typography>
          {joke.showJoke && (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {joke.jokeData ? joke.jokeData.punchline : ""}
            </Typography>
          )}
        </CardContent>
        <CardActions className="flex justify-center gap-2">
          {joke.showJoke ? (
            <Button variant="outlined" color="error" size="small" onClick={handelJokes}>
              Next Jokes
            </Button>
          ) : (
            <Button variant="outlined" color="success" size="small" onClick={() => setJoke((prevState) => ({ ...prevState, showJoke: true }))}>
              Show Jokes
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default JokesComponent;
