// const initialData = {
//     list: [],
//   };
// const initialData =null
const blogReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    
      case "DELETE_BLOG":
          return{
              ...state,
              items:state.items.filter((blog)=>blog.id!=action.payload)
          }

    case "BLOG_INFO":
        let blogDetails=state.items.filter((blog)=>blog.id==action.payload)
        return{
            ...state,
            blog:(blogDetails.length>0)? blogDetails[0]:{}
        }

        case "UPDATE_BLOG":
         
            return{
                ...state,
                items:state.items.filter((blog)=>blog.id==action.payload.id?action.payload:blog)
            }


    default:
      return state;
  }
};

export default blogReducer;
