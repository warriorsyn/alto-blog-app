import {Post} from "./types";

export function savePostsToLocalStorage(posts: Post[]) {
    localStorage.setItem("posts", JSON.stringify(posts));
}

export function getPostsFromLocalStorage(): Post[] {
    return JSON.parse(localStorage.getItem("posts") || "[]");
}

export function getPostByIdFromLocalStorage(id: number): Post | undefined {
    const posts = JSON.parse(localStorage.getItem("posts") || "[]") as Post[];

    return posts.find(item => item.id === id);
}
