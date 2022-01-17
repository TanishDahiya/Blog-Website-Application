import blogReducer from "./reducers/blogReducer";
import { combineReducers } from "redux";
import { mainReducer } from "./reducers/index";
import { createStore,applyMiddleware } from "redux";


const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if(serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (e) {
      // Ignore write errors;
    }
  };


const commonData={
    blog:{
        items:[
            {
                id:1,
                title:'History repeats itself as Meta accused of stealing tech for new VR gloves',
                category:'Gaming',
                content:'Not long after Meta announced its latest prototype VR haptic gloves, the company came under fire by another VR haptic glove maker, HaptX, who accused the company of utilizing patented technology without the proper permission.'
            }
        ]
    }
}

const peristedState = loadState();

const store = createStore(mainReducer,peristedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => {
    saveState(store.getState());
  });

export default store