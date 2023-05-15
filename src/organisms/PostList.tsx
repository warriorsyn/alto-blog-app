import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../types";
import {PostCard} from "../molecules/PostCard/PostCard";

import './postlist.scss';
import {Card} from "../molecules/Card/Card";
import {CardGrid} from "../molecules/CardGrid/CardGrid";

type Props = {
    posts: Post[];
};

const PostList: React.FC<Props> = ({ posts }) => {
    return (
        <div className="postlist">
            <div>
                <h2>All Posts</h2>
                 <Link to="/posts/new">Add post</Link>
            </div>
              <div className="postlist__cards">


              <CardGrid gridSize={3} cards={posts}/>


              </div>
        </div>
    );
};

export default PostList;
