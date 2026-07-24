"use client";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function JokeServerCard({ flagHandler, flag }) {
  return (
    <>
      <CardActions className="flex justify-center gap-2">
        {flag && (
          <Button variant="outlined" color="error" size="small" onClick={() => flagHandler(false)}>
            Next Jokes
          </Button>
        )}
        <Button variant="outlined" color="success" size="small" onClick={() => flagHandler(true)}>
          Show Jokes
        </Button>
      </CardActions>
    </>
  );
}
