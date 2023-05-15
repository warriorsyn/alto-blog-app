import React from "react";
import PostView from "../organisms/PostView";
import PostList from "../organisms/PostList";
import {Post} from "../types";

type Props = {
    posts: Post[];
    filteredPosts: Post[];
    setFilteredPosts?: React.Dispatch<React.SetStateAction<Post[]>>;
};

export const Blog: React.FC<Props> = ({posts, filteredPosts}: Props) => {
    return (
        <>

          {filteredPosts.length > 0 ? (
              <PostView post={filteredPosts[0]}/>
          ) : (
              <PostList posts={posts} />
         )}
        </>
    )
}
