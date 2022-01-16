import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {defaultPath} from "../App";

function AddPostComponent() {

let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  

  const addPost = () => {
      Axios.post(defaultPath, {
          title : title,
          body : body,
      }).then(() => {
        console.log("Success");
        navigate({
            pathname: "/"
        });
      })
  };

  return (
    <div className="submit-form">
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              maxLength={20}
              onChange={(event) => setTitle(event.target.value)}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <input
              type="text"
              className="form-control"
              id="body"
              required
              onChange={(event) => setBody(event.target.value)}
              name="body"
            />
          </div>
          <button onClick={addPost} className="btn btn-success">
            Submit
          </button>
        </div>
    </div>
  );
}

export default AddPostComponent;
