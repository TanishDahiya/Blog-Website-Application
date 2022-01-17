import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBlog } from "../actions/allAction";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../assets/index.css";
import shortid from "shortid";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// add a new post function(functional class used)
const AddBlog = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isError, setIsError] = useState(false);
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    content: "",
  });
  //  function for handling the input values
  const inputHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
     
    });
    if (e.target.value.length< 2) {
      setIsError(true);
    }
  };
  // function for submitting and form validation
  const submitButton = async () => {
    if (!inputData.title || !inputData.content || !inputData.category) {
      return toast.warning("Please fill all the fields!!");
    }

    Object.assign(inputData, { id: shortid.generate() });
    dispatch(addBlog(inputData));
    history.push("/home");
  };

  return (
    <>
      {/* toast container for shows an error in a dialog box  */}
      <ToastContainer />

      {/* new post header  */}
      <div className="addblogHeader">
        <h1>Add a new blog</h1>
      </div>

      <div className="addblogForm">
        {/* form for Adding a new Blog */}
        <Form>
          {/* Title Field */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title here"
              name="title"
              error={isError}
              value={inputData.title}
              onChange={inputHandler}
            />
          </Form.Group>
          {/* Categories Field */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Categories:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category here"
              name="category"
              value={inputData.category}
              onChange={inputHandler}
            />
          </Form.Group>
          {/* Content Field */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              value={inputData.content}
              onChange={inputHandler}
            />
          </Form.Group>
          {/* add blog button */}
          <Button variant="dark" onClick={submitButton}>
            Add Blog
          </Button>{" "}
        </Form>
      </div>
    </>
  );
};

export default AddBlog;
