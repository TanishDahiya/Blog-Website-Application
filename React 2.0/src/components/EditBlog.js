import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { blogInfo, updateBlog } from "../actions/allAction";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// class based function used for editing a existing post
class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      content: "",
      redirect: false,
    };
  }
  // matching the data with the same id
  componentDidMount() {
    this.props.getBlogDetails(this.props.match.params.id);
  }
  // update reflects in this function
  componentDidUpdate() {
    if (this.state.title == "") {
      const { title, category, content } = this.props.myBlogs.blog;
      this.setState({
        title: title,
        category: category,
        content: content,
      });
    }
  }
  // function for updating the inputs values
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // submit functinion and updating the data
  submitButton = async () => {
    let newData = Object.assign(this.props.myBlogs.blog, this.state);
    this.props.updateBlogInfo(newData);
    this.setState({ redirect: true });
  };

  // return the input form
  render() {
    const { title, category, content } = this.state;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <>
        {/* header of edit a post  */}
        <div className="addblogHeader">
          <h1>Update Blog</h1>
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
                value={title}
                onChange={this.inputHandler}
              />
            </Form.Group>
            {/* Categories Field */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Categories:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category here"
                name="category"
                value={category}
                onChange={this.inputHandler}
              />
            </Form.Group>
            {/* Content Field */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="content"
                value={content}
                onChange={this.inputHandler}
              />
            </Form.Group>
            {/* add blog button */}
            <Link to="/home">
              <Button variant="dark" onClick={this.submitButton}>
                Update Blog
              </Button>{" "}
            </Link>
          </Form>
        </div>
      </>
    );
  }
}
// for saving the existing data or state
const mapStateToProps = (state) => {
  return {
    myBlogs: state.blog,
  };
};
// fetcing the data from the store and for update the final state
const mapDispatchToProps = (dispatch) => {
  return {
    getBlogDetails: (id) => {
      dispatch(blogInfo(id));
    },
    updateBlogInfo: (data) => {
      dispatch(updateBlog(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditBlog);
