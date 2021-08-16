import React from "react";

const PostItem = ({post}) => {
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>{post.id}</strong>
        <div>{post.title}</div>
        <div>
          {post.body}
        </div>
      </div>
      <div className='post__btn'>
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;
