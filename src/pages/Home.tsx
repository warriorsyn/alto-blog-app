import React from "react";
import { Box } from "@mui/material";
import { getPostsFromLocalStorage } from "../services/api";
import { CardGrid } from "../molecules/CardGrid/CardGrid";

export const Home: React.FC = () => {
  let posts = getPostsFromLocalStorage();
  console.log(posts);

  return (
    <Box mt={3}>
      <CardGrid gridSize={12} cards={[posts[1]]}/>
      <CardGrid gridSize={3} cards={[...posts, ...posts]}/>
      <CardGrid gridSize={6} cards={posts}/>
    </Box>
  );
};
