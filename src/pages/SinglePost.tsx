import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PostView from "../organisms/PostView";
import {getPostByIdFromLocalStorage} from "../services/api";
import {Post} from "../types";

export const SinglePost: React.FC = () => {
    const [singlePost, setSinglePost] = useState<Post>();
    const { id } = useParams()

    useEffect(() => {
        const post = getPostByIdFromLocalStorage(Number(id));
        post && setSinglePost(post);
    }, [id])
    return (
        <>
            {singlePost && (<PostView post={singlePost} />)}
        </>
    )
}

