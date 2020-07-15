import React, { useState } from "react";

import './App.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Post(props) {




  const [post, setPost] = useState({
  title: "",
  blog: "",
  date: new Date(),
});


function onChangeTitle(event) {
console.log(event.target.value)
setPost(event.target.value)
}


function onChangeBlog(event) {
console.log(event.target.value)
setPost(event.target.value)
}

function onChangeDate(date) {
console.log("hi")

}

//
//   setPost({
//    title:  event.target.value
//   });
// }
//
//
// function onChangeBlog(event) {
//   setPost({
//   blog:  p.target.value
//   });
// }
//
//
//
// function onChangeDate(date) {
//   setPost({
//    date:  date
//   });
// }


function onSubmit(event) {
  event.preventDefault();

}

// const post = {
//   title: this.title,
//   blog: this.blog,
//   date: this.date
//
// }
// // wants to pass whats in the other fields when onEvent click is hit
//   console.log(post);
//
//   window.location = '/';
//
// }


  return (

<div>
<h3>Compose a new post :D</h3>
<form onSubmit={onSubmit}>
<div className="form-group">

<input type="text"
required
className="form-control"
placeholder="Title"
value={post.title}
onChange={onChangeTitle}/>
</div>
<div>

<textarea type="text"
required
className="form-control"
placeholder="Tell a story"
value={post.blog}
onChange={onChangeBlog} ></textarea>
</div>

<div>
<label>Date: </label>
<div>
<DatePicker
selected={post.date}
onChange={onChangeDate}/>
 </div>
</div>

</form>
</div>



  )
}


export default Post;
