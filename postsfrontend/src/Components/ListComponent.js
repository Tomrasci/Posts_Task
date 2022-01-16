import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import {defaultPath} from "../App";
import './List.css'

function ListComponent() {

  let navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  useEffect(()=> {
    getPosts() },  [])

  const getPosts = () => {
      Axios.get(defaultPath).then((response) => {
        setPostList(response.data);
      })
  };

  function navigateDetails(id){
    navigate({
        pathname: "posts/" + id,
        state: { detail: id }
    });
 };

 function navigateAddPost(){
  navigate({
      pathname: "addPost"
  });
};

  return (
    <div className="List">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
        {postList.map((data) => {
            return (
                <tr onClick={() => navigateDetails(data.id)}>
            <th scope="row">{data.id}</th>
            <td>{data.title}</td>
            <td>{data.body}</td>
          </tr> 
            )
        })}
        </tbody>
        <button type="button" onClick={navigateAddPost} className="btn btn-success" Style="float: right;">
              Add Post
              </button>
      </table>

    </div>
  );
}

export default ListComponent;
