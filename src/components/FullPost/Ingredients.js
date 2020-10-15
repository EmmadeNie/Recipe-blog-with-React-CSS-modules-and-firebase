import React from 'react'


function Ingredients() {

     const onSubmitIngredient = () => {
    displayContext.toggleTagMode();
    const tags = post.tags.concat(tagsInput.config.value);
    const updatedPost = { ...post, tags: tags };
    fetch(`https://blog-5c8a0.firebaseio.com/posts/${props.currentId}.json`, {
      method: "put",
      body: JSON.stringify(updatedPost),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => dispatch({ type: "SET_FULLPOST", fullPost: res }));
  };


    return (
        <div>
            
        </div>
    )
}

export default Ingredients
