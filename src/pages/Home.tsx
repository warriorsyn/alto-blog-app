import React from "react";
import { Box } from "@mui/material";
import { getPostsFromLocalStorage } from "../services/api";
import { CardGrid } from "../molecules/CardGrid/CardGrid";

export const Home: React.FC = () => {
  let posts = getPostsFromLocalStorage();

  return (
    <Box mt={3}>
      <CardGrid gridSize={12} cards={[posts[0]]}/>
      <CardGrid gridSize={3} cards={[...posts]}/>
      <CardGrid gridSize={6} cards={posts}/>
    </Box>
  );
};
