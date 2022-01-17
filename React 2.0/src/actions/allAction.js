// action for adding a new post
export const addBlog = (data) => {
  return {
    type: "ADD_BLOG",
    payload: data,
  };
};

// action for deleting the existing post
export const deleteBlog = (id) => {
  return {
    type: "DELETE_BLOG",
    payload: id,
  };
};

// action for fetching the data of a particular post
export const blogInfo = (id) => {
  return {
    type: "BLOG_INFO",
    payload: id,
  };
};

// action for updating a particular post
export const updateBlog = (data) => {
  return {
    type: "UPDATE_BLOG",
    payload: data,
  };
};
