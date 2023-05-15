import React, {useEffect, useState} from "react";
import {PostForm} from "../organisms/PostForm/PostForm";
import {Post} from "../types";
import {useParams} from "react-router-dom";
import {getPostByIdFromLocalStorage} from "../services/api";

type Props = {
    updatePost?: (id: number, title: string, content: string, cdn: string, created: string, callbackFn?: Function) => void;
};

export const UpdatePost: React.FC<Props> = ({updatePost}) => {
    const [singlePost, setSinglePost] = useState<Post>();
    const { id } = useParams()

    useEffect(() => {
        const post = getPostByIdFromLocalStorage(Number(id));
        post && setSinglePost(post);
    }, [id])

    return (
      <>
          {singlePost && (<PostForm updatePost={updatePost} post={singlePost} />)}
      </>
    )
}
