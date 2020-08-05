import React, { useState } from "react";
import axios from 'axios';

import './App.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function EditPost(props) {





const [postDate, setPostDate] = useState(new Date());

const [post, setPost] = useState({
  title: "",
  blog: "",
  date: postDate,
  });
  



function onChangeTitle(event) {

setPost({title:  event.target.value,
  blog : post.blog,
date: post.date})
}


function onChangeBlog(event) {

setPost({title: post.title,
  blog : event.target.value,
date: post.date})
}

function onChangeDate(date) {

setPostDate(date);


}



function onSubmit(event) {
  event.preventDefault();
  
axios.post('http://localhost:5000/posts/add', post)  
  .then(res => console.log(res.data));


window.location = '/';
}



  return (

<div >

<h3>Compose a new post :D</h3>
<form onSubmit={onSubmit}>

<div className="form-group">
<input type="text"
required
className="form-control form-control-lg"
placeholder="Title"
value={post.title}
onChange={onChangeTitle}/>
</div>
<div>

<textarea type="text"
required
className="form-control  form-control-lg"
rows="10"
placeholder="Tell a story"
value={post.blog}
onChange={onChangeBlog} ></textarea>
</div>


<div className="form-group">
<label>Date: </label>
<div>
<DatePicker

selected={postDate}

onChange={onChangeDate}/>
 </div>
</div>


<div className="form-group">
<input type="submit" value="POST" className="btn btn-primary"/>

</div>


</form>

</div>



  );
}


export default Post;
