import React, {createContext, useReducer, useContext} from 'react';

//CONTEXT
import {DisplayContext} from "./display-context"


export const PostsContext = createContext({
    posts: [], 
getPosts: ()=> {}

});

const postsReducer = (currentPosts, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.posts;
    default:
      throw new Error("Should not get there");
  }
};

const PostsContextProvider = props => {
    const [postsData, dispatch] = useReducer(postsReducer, []);
    const displayContext = useContext(DisplayContext)

    const getPostsHandler = ()=> {
         displayContext.toggleIsLoading(true);
    fetch("https://blog-5c8a0.firebaseio.com/posts.json")
      .then((response) => {
        displayContext.toggleIsLoading(false)
        return response.json();
      })
      .then((res) => {
        const fetchedPosts = [];
        for (let key in res) {
          const fetchedTags = []; 
          for (let keyTag in res[key].tags){
             fetchedTags.push({
            ...res[key].tags[keyTag],
            id: keyTag,
          })
          };
          fetchedPosts.push({
            ...res[key],
            id: key,
            tags: fetchedTags
          }) 
        }
        dispatch({ type: "SET_POSTS", posts: fetchedPosts });
        
      })
      .catch((err) => {
        // dispatch(failedFetchingPosts());
      });
    }

  
    return (
        <PostsContext.Provider value={{
            posts: postsData, 
            getPosts: getPostsHandler

    }}>{props.children}</PostsContext.Provider>
    )
}

export default PostsContextProvider