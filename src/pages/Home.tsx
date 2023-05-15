import React from "react";
import { Box } from "@mui/material";
import { getPostsFromLocalStorage } from "../services/api";
import { CardGrid } from "../molecules/CardGrid/CardGrid";
import {Post} from "../services/types";

type Props = {
    posts: Post[]
}

export const Home: React.FC<Props> = ({ posts }) => {
  //let posts = getPostsFromLocalStorage();



  return (
    <Box mt={3}>
        {posts.length > 0 && (
            <>
                <CardGrid gridSize={12} cards={[posts[0]]}/>
                <CardGrid gridSize={3} cards={[...posts]}/>
                <CardGrid gridSize={6} cards={posts}/>
            </>
        )}

        {!posts.length && (
            <p>There is no post created yet!</p>
        )}
    </Box>
  );
};
