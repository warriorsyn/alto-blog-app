import {Link} from "react-router-dom";

import { Post } from "../../types";
import HeroImage from "../../atoms/HeroImage";

import './postview.scss';

type PostViewProps = {
    post: Post;
};

export function PostView({ post }: PostViewProps) {
    return (
        <section className="postview">
            <div>
                <HeroImage
                    src={post.cdn}
                    height="25rem"
                    width="100%"
                />
            </div>
            <div className="postview__title-content">
                <div>
                    <h2>{post.title}</h2>
                    <Link to={`/posts/${post.id}/edit`}>Update post</Link>
                </div>
                <span>Created at: {post.created}</span>
            </div>

            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </section>
    );
}

