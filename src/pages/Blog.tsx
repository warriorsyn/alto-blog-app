import React from "react";
import {PostList} from "../organisms/PostList/PostList";
import {Post} from "../services/types";

type Props = {
    posts: Post[];
    filteredPosts: Post[];
    setFilteredPosts?: React.Dispatch<React.SetStateAction<Post[]>>;
};

export const Blog: React.FC<Props> = ({posts, filteredPosts}: Props) => {
    return (
        <PostList posts={posts} />
    )
}
