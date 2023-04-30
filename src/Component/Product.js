import React from 'react'
import axios from 'axios';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Pro = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  

  const navigate = useNavigate();
  const ass = () => {
    navigate("./Productdetail");
  };
  return (
    <>
    
   

    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h5>{post.title}</h5>
       {/* <Link to="/Productdetail"> More info ... </Link> */}
       <button onClick={ass}>More info </button>
          
          {/* <p>{post.body}</p> */}
        </div>
      ))}
    </div>


    </>

  
  )
}

export default Pro