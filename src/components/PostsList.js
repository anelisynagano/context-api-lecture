import { useContext } from "react";
import BlogContext from "../contexts/blog-context";

const PostsList = () => {
  const { posts, setPosts } = useContext(BlogContext);

  const handleDelete = (postId) => {
    const filteredPosts = posts.filter((post) => post.id !== postId);
    setPosts(filteredPosts);
  };

  return (
    <p>
      {posts.map((post) => (
        <div className='post-card'>
          <p>{post.post_title}</p>
          <p>{post.post_content}</p>
          <button onClick={() => handleDelete(post.id)}>Delete Post</button>
        </div>
      ))}
    </p>
  );
};

export default PostsList;
