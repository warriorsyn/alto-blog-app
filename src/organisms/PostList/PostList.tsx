import React from "react";
import { Link } from "react-router-dom";

import {CardGrid} from "../../molecules/CardGrid/CardGrid";
import { Post } from "../../types";

import './postlist.scss';

type Props = {
    posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
    return (
        <div className="postlist">
            <div>
                <h2>All Posts</h2>
                 <Link to="/posts/new">Add post</Link>
            </div>
              <div className="postlist__cards" >
              <CardGrid gridSize={3} cards={posts} />
              </div>
        </div>
    );
};
