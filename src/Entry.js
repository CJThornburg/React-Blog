aimport React from 'react';
import { Link } from 'react-router-dom';
import './App.css';





function Entry(props) {

return(
    <tr>
<td>{props.post.title}</td>
<td>{props.post.blog}</td>
<td>{props.post.substring(0,10)}</td>
<td>
    <Link to={"/edit/"+props.post._id}>edit </Link> | <a href="#" onClick={() => {props.deletePost(props.post._id) }} > delete </a>
</td>


    </tr>
);
}
export default Entry;