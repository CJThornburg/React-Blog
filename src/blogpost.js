import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';







function Blogpost(){

    const [blog, setBlog] = useState([]);


    function deletePost(id) {
    axios.delete('http://localhost:5000/posts/'+id)
    .then(res => console.log(res.data));
    
    setBlog({
        blog: blog.filter(el => el._id !== id)
    })
    
    }
    
    
    
    
    // pulling posts from db
    componentDidMount () {
        axios.get('http://localhost:5000/posts/')
        .then (response => {
            setBlog ({blog: response.data}) 
        })
        .catch((error) => {
            console.log(error);
        })
    };


blogList () {
    return blog.map(currentpost => {
        return <Entry post={currentpost} deletePost={deletePost} key={currentpost._id}/>;
    })
}




return (

    <div> 
    <h2>"TITLE"</h2>
    <p>"CONTENT OF THE POST CAN GO HERE"
    
    {blogList()}
    </p>
    
    
    
    
    </div>
    
    
    
      );
    
}
    export default Blogpost;