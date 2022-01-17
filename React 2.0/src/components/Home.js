import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import { Link } from "react-router-dom";


// home page for dispay all list of data 
function Home() {
  // use useSelector to fetching data from the previous state 
  const blogslist = useSelector((state) => state.blog.items);
  return (
      <div>
          {/* Header */}
          <div className="homeHeader">
              <h1>List of All Blogs</h1>
          </div>

          {/* add blog button */}
          <div className="newPostButton">
         <Link to={"/addblog"}><button type="button" class="btn btn-dark">New Post</button></Link>

          </div>

          {/* List of all Blog */}

    <div className="home">
        <ul className="list-group">
        {blogslist.map((blogData) => {
                   return <List blog={blogData} key={blogData.id} />;
                 })}

        </ul>
    </div>
    </div>
  );
}

export default Home;
