import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { PostView } from "./PostView";

const mockPost = {
    id: 1,
    title: "Test Post",
    content: "<p>Test content</p>",
    cdn: "https://example.com/image.jpg",
    created: "2022-01-01",
};

describe("PostView", () => {
    it("should render post title", () => {
        render(
            <BrowserRouter>
                <PostView post={mockPost} />
            </BrowserRouter>
        );

        const postTitle = screen.getByText(/Test Post/i);
        expect(postTitle).toBeInTheDocument();
    });

    it("should render post content", () => {
        render(
            <BrowserRouter>
                <PostView post={mockPost} />
            </BrowserRouter>
        );

        const postContent = screen.getByText(/Test content/i);
        expect(postContent).toBeInTheDocument();
    });

    it("should render post creation date", () => {
        render(
            <BrowserRouter>
                <PostView post={mockPost} />
            </BrowserRouter>
        );

        const postDate = screen.getByText(/Created at:/i);
        expect(postDate).toHaveTextContent("2022-01-01");
    });

    it("should render update post link", () => {
        render(
            <BrowserRouter>
                <PostView post={mockPost} />
            </BrowserRouter>
        );

        const updateLink = screen.getByRole("link", { name: /Update post/i });
        expect(updateLink).toHaveAttribute("href", "/posts/1/edit");
    });

    it("should render hero image", () => {
        render(
            <BrowserRouter>
                <PostView post={mockPost} />
            </BrowserRouter>
        );

        const heroImage = screen.getByRole("img", { name: /hero image/i });
        expect(heroImage).toHaveAttribute("src", "https://example.com/image.jpg");
    });
});
