import React, { useState, useEffect } from "react";
import Axios from "axios";
import {defaultPath} from "../App";
import { useParams } from "react-router-dom";

const PostDetailsComponent = props => {
  const [post, setPost] = useState("");
  
  const {id} = useParams();

  useEffect(()=> {
    getPost(id) },  [id])

  const getPost = (id) => {
      Axios.get(defaultPath + "/" + id).then((response) => {
        console.log(id);
        setPost(response.data);
      })
  };

    return (
      <div className="container">
          <h3>
            <strong>Post details</strong>
          </h3>
        <p>
          <strong>Id:</strong> {post.id}
        </p>
        <p>
          <strong>Title:</strong> {post.title}
        </p>
        <p>
          <strong>Body:</strong> {post.body}
        </p>
      </div>
    );
  };
  
  export default PostDetailsComponent;
