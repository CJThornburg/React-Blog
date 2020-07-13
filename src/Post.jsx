import React, { useState } from "react";

import './App.css';


function Post (props) {
const [post, setPost] = useState({
title: "",
content: ""});


function handleChange(event) {
  const { name, value } = event.target;

  setPost (prevPost => {
    return {
      ...prevPost,
      [name]: value
    };
  });
}

// function handleClick (event) {
//
//   save to db
// }

function submitPost(event) {
  props.onAdd()
}



return (

  <div>

          <form >
          <input name="title"
          onChange={handleChange}
          value={post.title}
          placeholder="Title"
            />
          <textarea
          name="content"
          onChange={handleChange}
          value={post.content}
          placeholder="Type story here"
          rows='8'
          />
          <button onClick={submitPost}> Add </button>
        </form>

    </div>
      );
    }

export default Post;
