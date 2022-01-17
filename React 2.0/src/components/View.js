import React, { Component } from "react";
import reactDom from "react-dom";
import { connect } from "react-redux";
import { blogInfo } from "../actions/allAction";
import "../assets/index.css";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";



class ViewBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      content: "",
    };
  }
  componentDidMount() {
    this.props.getBlogDetails(this.props.match.params.id);
    console.log(this.props.myBlogs, this.props.match.params.id);
  }
  componentDidUpdate() {
    console.log(this.props.myBlogs);
    if (this.state.title == "") {
      const { title, category, content } = this.props.myBlogs.blog;
      this.setState({
        title: title,
        category: category,
        content: content,
      });
    }
  }
  render() {
    const { title, category, content } = this.state;
    return (
      <>
      
        <div className="viewHeader">
         
          {/* Back to Home Button  */}
           <div className="backhomeButton">{/*backhomeButton */}
            <Link to={"/home"}>
              <button type="button" class="btn btn-dark">
                Back to Home Page
              </button>
            </Link>
          </div>
          <div className="likeButton">
            <LikeButton />
          </div>
        </div>
        {/* Rendering all data  */}
        <div className="viewPage">
          {/* for title */}
          <div>
            <h3>TITLE:</h3>
            <p>{title}</p>
          </div>
          {/* for category */}
          <div>
            <h3>CATEGORY:</h3>
            <p>{category}</p>
          </div>
          {/* for content */}
          <div>
            <h3>Content:</h3>
            <p>{content}</p>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    myBlogs: state.blog,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBlogDetails: (id) => {
      dispatch(blogInfo(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewBlog);
