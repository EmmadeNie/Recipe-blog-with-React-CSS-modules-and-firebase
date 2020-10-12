import React, {createContext, useState} from 'react';

export const DisplayContext = createContext({
    isLoading: false, 
    toggleIsLoading: ()=> {}, 
    currentPost: null, 
    updateCurrentPost: ()=> {},
editMode: false,
toggleEditMode: ()=> {},
postDeleted: false,
togglePostDeleted: ()=> {}

});

const DisplayContextProvider = props => {
    const [onIsLoading, setIsLoading]= useState(false);
      const [onCurrentPost, setCurrentPost] = useState("");
      const [onEditMode, setEditMode] = useState(false);
      const [onPostDeleted, setPostDeleted] = useState(false)

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


    return (
        <DisplayContext.Provider value={{
            toggleIsLoading: onToggleIsLoadingHandler, 
            isLoading: onIsLoading,
        currentPost: onCurrentPost, 
        updateCurrentPost: onUpdateCurrentPostHandler,
        editMode: onEditMode,
        toggleEditMode:onToggleEditModeHandler,
        postDeleted: onPostDeleted,
        togglePostDeleted: onTogglePostDeletedHandler
    }}>{props.children}</DisplayContext.Provider>
    )
}

export default DisplayContextProvider