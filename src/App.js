import React, { useRef, useState } from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import './styles/App.css'

function App() {
  const [posts, setPost] = React.useState([
    {id: 1, title: 'JavaScript', body: 'Descrition'},
    {id: 2, title: 'JavaScript 1', body: 'Descrition'},
    {id: 3, title: 'JavaScript 2', body: 'Descrition'},
  ])

  const [title, setTitle] = useState('')
  const bodyRef = useRef()

  const addNewPosts = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(bodyRef.current.value)
  }
  
  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          type="text" 
          placeholder="Название поста"
        />
        {/* Неуправляемый/Неконтролируемый компонет */}
        <MyInput ref={bodyRef} type="text" placeholder="Описание поста"/>
        <MyButton onClick={addNewPosts}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={"JavaScript"}/>
    </div>
  )
}

export default App