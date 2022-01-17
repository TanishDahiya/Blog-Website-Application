import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../actions/allAction";
import "../assets/index.css"


function List({ blog }) {
  const dispatch = useDispatch();
  const { title, category, content, id } = blog;

  return (


    <li className="list-group-item">
      <div className="displayandall">
        <div className="title"><h4>{title}</h4></div>
        <div className="alllinks">
          <div className="linkMargin"><Link to={`/edit-blog/${id}`}><button type="button" class="btn btn-dark">Edit</button></Link></div>
          <div className="linkMargin"> <Link to={`/view-blog/${id}`}><button type="button" class="btn btn-dark">View</button></Link></div>
          <div className="linkMargin"><button type="button" class="btn btn-dark" onClick={() => dispatch(deleteBlog(id))}>Delete</button></div>
        </div>
      </div>
    </li>
  );
}

export default List;
