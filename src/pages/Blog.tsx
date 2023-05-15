import React from "react";
import {PostList} from "../organisms/PostList/PostList";
import {Post} from "../services/types";

type Props = {
    posts: Post[];
};

export const Blog: React.FC<Props> = ({posts}: Props) => {
    return (
        <>
            <PostList posts={posts} />
            {!posts.length && (<p>There is no post created yet!</p>)}
        </>
    )
}
