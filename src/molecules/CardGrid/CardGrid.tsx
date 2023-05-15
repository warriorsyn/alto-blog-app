import React from "react";
import {Grid, Box} from "@mui/material";
import {Link} from "react-router-dom";

import { Card } from "../Card/Card";
import { Post } from "../../types";

import "./CardGrid.scss";

type Props = {
  gridSize: number;
  cards: Post[];
};

export const CardGrid: React.FC<Props> = ({ cards, gridSize }) => {
  return (
    <Box mb={4} sx={{borderBottom: '1px solid var(--secondary-color)'}} className="card-grid">
      <Grid container spacing={gridSize > 4 ? gridSize/2 : 2}>
        {cards.map((card) => (

              <Grid mb={4} item md={gridSize} data-testid="card" key={card.id}>
                  <Link to={`/posts/${card.id}`}>
                  <Card gridSize={gridSize} card={card}/>
                  </Link>
              </Grid>
        ))}
      </Grid>
    </Box>
  );
};
