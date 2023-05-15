import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { PostList } from "./PostList";
import { Post } from "../../types";

describe("PostList", () => {
    const posts: Post[] = [
        {
            id: 1,
            title: "Post 1",
            content: "Content 1",
            cdn: "",
            created: "2022-01-01",
        },
        {
            id: 2,
            title: "Post 2",
            content: "Content 2",
            cdn: "",
            created: "2022-01-02",
        },
    ];

    it("should render a list of posts", () => {
        render(
            <MemoryRouter>
                <PostList posts={posts} />
            </MemoryRouter>
        );

        const postListTitle = screen.getByText("All Posts");
        const addPostLink = screen.getByRole("link", { name: "Add post" });
        const postCards = screen.getAllByTestId("card");

        expect(postListTitle).toBeInTheDocument();
        expect(addPostLink).toBeInTheDocument();
        expect(postCards.length).toEqual(posts.length);
    });
});
