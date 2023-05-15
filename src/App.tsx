import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Post } from "./types";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { NewPost } from "./pages/NewPost";
import { MainMenu } from "./molecules/MainMenu/MainMenu";
import "./App.css";
import { Contact } from "./pages/Contact";
import { SinglePost } from "./pages/SinglePost";
import {
  getPostsFromLocalStorage,
  savePostsToLocalStorage,
} from "./services/api";
import { UpdatePost } from "./pages/UpdatePost";
import { About } from "./pages/About";
import { Option } from "./atoms/Autocomplete/Autocomplete";
import "./styles/global.scss";
import Container from "@mui/material/Container/Container";

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [autocompleteOptions, setAutocompleteOptions] = useState<Option[]>([]);

  useEffect(() => {
    const storedPosts = getPostsFromLocalStorage();

    const autocompleteOptions = convertPostsToAutocompleteOptions(storedPosts);

    setAutocompleteOptions(autocompleteOptions);
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    if (posts.length) {
      savePostsToLocalStorage(posts);
    }
  }, [posts]);

  const createPost = (
    title: string,
    content: string,
    cdn: string,
    callbackFn?: Function
  ) => {
    const newPost: Post = {
      id: posts.length + 1,
      title,
      content,
      cdn,
      created: new Date().toLocaleDateString(),
    };
    setPosts([...posts, newPost]);

    callbackFn && callbackFn();
  };

  const updatePost = (
    id: number,
    title: string,
    content: string,
    cdn: string,
    created: string,
    callbackFn?: Function
  ) => {
    const updatedPost: Post = {
      id,
      title,
      content,
      cdn,
      created,
      modified: new Date().toLocaleDateString(),
    };
    const updatedPosts = posts.map((post) =>
      post.id === id ? updatedPost : post
    );
    setPosts(updatedPosts);

    callbackFn && callbackFn();
  };

  const convertPostsToAutocompleteOptions = (posts: Post[]): Option[] => {
    const opts = posts.map((item) => {
      return {
        label: item.title,
        value: item.id.toString(),
      };
    });

    return opts;
  };

  return (
    <Router>
      <MainMenu autocompleteOptions={autocompleteOptions} />
      <section>
        <Container>
          <Routes>
            <Route path="/posts/:id" element={<SinglePost />} />
            <Route
              path="/posts/:id/edit"
              element={<UpdatePost updatePost={updatePost} />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/blog"
              element={
                <Blog
                  setFilteredPosts={setFilteredPosts}
                  filteredPosts={filteredPosts}
                  posts={posts}
                />
              }
            />
            <Route
              path="/posts/new"
              element={<NewPost createPost={createPost} />}
            />

            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </section>
    </Router>
  );
};

export default App;
