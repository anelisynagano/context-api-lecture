import { useState } from "react";
import "./App.css";
import BlogContext from "./contexts/blog-context";
import PostsList from "./components/PostsList";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      post_title: "my first post",
      post_content: "this is my first post",
    },
    {
      id: 2,
      post_title: "my second post",
      post_content: "this is my second post",
    },
    {
      id: 3,
      post_title: "my third post",
      post_content: "this is my third post",
    },
    {
      id: 4,
      post_title: "my fourth post",
      post_content: "this is my fourth post",
    },
  ]);

  return (
    <div className='App'>
      <BlogContext.Provider value={{ posts, setPosts }}>
        <PostsList />
      </BlogContext.Provider>
    </div>
  );
}

export default App;
