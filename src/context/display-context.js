import React, {createContext, useState} from 'react';

export const DisplayContext = createContext({
    isLoading: false, 
    toggleIsLoading: ()=> {}, 
    currentPost: null, 
    updateCurrentPost: ()=> {},
editMode: false,
toggleEditMode: ()=> {},
postDeleted: false,
togglePostDeleted: ()=> {},
tagMode: false,
toggleTagMode: ()=> {},
postAdded: false,
togglePostAdded: ()=> {}

});

const DisplayContextProvider = props => {
    const [onIsLoading, setIsLoading]= useState(false);
      const [onCurrentPost, setCurrentPost] = useState("");
      const [onEditMode, setEditMode] = useState(false);
      const [onPostDeleted, setPostDeleted] = useState(false);
      const [onPostAdded, setPostAdded]= useState(false);
       const [onTagMode, setTagMode] = useState(false);

    const onToggleIsLoadingHandler = (state)=> {
        setIsLoading(state)
    }

      const onUpdateCurrentPostHandler = (postId)=> {
        setCurrentPost(postId)
    }

     const onToggleEditModeHandler = (state)=> {
      setEditMode(state)
    }

     const onTogglePostDeletedHandler = (state)=> {
      setPostDeleted(state)
    }

       const onToggleTagModeHandler = (state)=> {
      setTagMode(state)
    }

      const onTogglePostAddedHandler = (state)=> {
      setPostAdded(state)
    }

    return (
        <DisplayContext.Provider value={{
            toggleIsLoading: onToggleIsLoadingHandler, 
            isLoading: onIsLoading,
        currentPost: onCurrentPost, 
        updateCurrentPost: onUpdateCurrentPostHandler,
        editMode: onEditMode,
        toggleEditMode:onToggleEditModeHandler,
        postDeleted: onPostDeleted,
        togglePostDeleted: onTogglePostDeletedHandler,
        toggleTagMode: onToggleTagModeHandler,
        tagMode: onTagMode,
        postAdded: onPostAdded,
        togglePostAdded: onTogglePostAddedHandler

    }}>{props.children}</DisplayContext.Provider>
    )
}

export default DisplayContextProvider