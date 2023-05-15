import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

import {Button} from "../../atoms/Button/Button";
import { Post } from "../../types";


import './postform.scss'

type PostFormProps = {
    createPost?: (title: string, content: string, cdn: string, callbackFn?: Function) => void;
    updatePost?: (id: number, title: string, content: string, cdn: string, created: string, callbackFn?: Function) => void;
    post?: Post | null;
};

export function PostForm({ createPost, updatePost, post }: PostFormProps) {
    const [title, setTitle] = useState(post ? post.title : "");
    const [content, setContent] = useState(post ? post.content : "");
    const [cdn, setCdn] = useState(post?.cdn ?? "");

    const navigate = useNavigate()

    const callback = () => {
        if (!post) {
            navigate('/blog')
            return;
        }

        navigate(`/posts/${post.id}`)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (post) {
            updatePost && updatePost(post.id, title, content, cdn, post.created ?? "", callback);
        } else {
            createPost && createPost(title, content, cdn, callback);
        }
    };

    return (
        <form className="postform" onSubmit={handleSubmit}>
            <h2>{!post ? "Create SinglePost" : "Update Post"}</h2>


                <input
                    type="text"
                    value={title}
                    placeholder="SinglePost Title"
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    placeholder="CDN Image"
                    type="text"
                    value={cdn}
                    onChange={(event) => setCdn(event.target.value)}
                />

                <textarea
                    placeholder="Write the post content"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                ></textarea>

            <Button variant="filled" type="submit">{post ? "Update" : "Create"}</Button>
        </form>
    );
}
