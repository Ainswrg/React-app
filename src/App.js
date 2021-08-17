import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Descrition" },
    { id: 2, title: "JavaScript 1", body: "Descrition" },
    { id: 3, title: "JavaScript 2", body: "Descrition" },
  ]);
  
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {
    console.log('Отработала функция getSortedPosts')
    if(selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }

  const sortedPosts = getSortedPosts()

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  } 

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }



  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <hr style={{margin: '1rem'}}/>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
        />
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={'Сортировка'}
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={sortedPosts} title={"JavaScript"} />
        : <h1 style={{textAlign:'center', marginTop: '2rem'}}>Посты не найдены</h1>
      }
      
    </div>
  );
}

export default App;
