import React from "react";

import { Post } from "../../types";

import "./Card.scss";

type Props = {
  gridSize: number;
  card: Post;
};

export const Card: React.FC<Props> = ({ card, gridSize }) => {
  const stringLimiter = (str: string) => {
    let limit: number = 50;

    switch (gridSize) {
        case 12:
        limit = 400;
        break;
      case 6:
        limit = 190;
        break;
      case 4:
        limit = 140;
        break;
      case 3:
        limit = 90;
        break;
    }

    if (str.length > limit) {
      return str.substring(0, limit) + "...";
    } else {
      return str;
    }
  };

  const titleLimiter = (title: string) => {
    let limit: number = 50;
    switch (gridSize) {
      case 6:
        limit = 38;
        break;
      case 4:
        limit = 20;
        break;
      case 3:
        limit = 15;
        break;
    }
    if (title.length > limit && gridSize !== 12) {
      return title.substring(0, limit) + "...";
    } else {
      return title;
    }
  };

  return (
    <div className="card">
      <img className="card-img" src={card.cdn} style={
        {
            height: gridSize/2 * 100
        }
      } />
      <div>
        <span className="card-title">{titleLimiter(card.title)}</span>
      </div>
      <span className="card-release-date">{card.created}</span>
      <br />
      <span>{stringLimiter(card.content)}</span>
    </div>
  );
};
