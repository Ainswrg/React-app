import React from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "JavaScript", body: "Descrition" },
    { id: 2, title: "JavaScript 1", body: "Descrition" },
    { id: 3, title: "JavaScript 2", body: "Descrition" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  } 

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <PostList posts={posts} title={"JavaScript"} />
    </div>
  );
}

export default App;
