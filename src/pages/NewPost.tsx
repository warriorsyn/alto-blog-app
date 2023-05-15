import React from "react";
import {PostForm} from "../organisms/PostForm/PostForm";

type Props = {
    createPost?: (title: string, content: string, cdn: string, callbackFn?: Function) => void;
};

export const NewPost: React.FC<Props> = ({createPost}: Props) => {
    return (
        <PostForm createPost={createPost} />
    )
}

