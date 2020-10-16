import React from 'react'
import useForm from "../context/useForm"

//COMPONENTS
import Button from "../components/UI/Button"

function NewPost() {
    const {handleChange, values, handleSubmit} = useForm()
  
    return (
        <div className="container">
        <div className="form-container">
        <form onSubmit={handleSubmit}>
           <input
           type="text"
           name="title"
           placeholder="title"
          className="input"
          value={values.title}
          onChange={handleChange}
        /> <input
           type="text"
           name="author"
           placeholder="author"
          className="input"
          value={values.author}
          onChange={handleChange}
        /> <input
           type="text"
           name="caption"
           placeholder="caption"
          className="input"
          value={values.caption}
          onChange={handleChange}
        /> <textarea
           type="text"
           name="description"
           placeholder="description"
          className="input"
          value={values.description}
          onChange={handleChange}
        /> <input
           type="text"
           name="prep"
           placeholder="prep"
          className="input"
          value={values.prep}
          onChange={handleChange}
        /> <input
           type="text"
           name="wait"
           placeholder="wait"
          className="input"
          value={values.wait}
          onChange={handleChange}
        /> <input
           type="text"
           name="servings"
           placeholder="servings"
          className="input"
          value={values.servings}
          onChange={handleChange}
        /> <input
           type="text"
           name="utensils"
           placeholder="utensils"
          className="input"
          value={values.utensils}
          onChange={handleChange}
        /> <input
           type="text"
           name="tip"
           placeholder="tip"
          className="input"
          value={values.tip}
          onChange={handleChange}
        /> <input
           type="text"
           name="ingredients"
           placeholder="ingredients"
          className="input"
          value={values.ingredients}
          onChange={handleChange}
        /> <input
           type="text"
           name="steps"
           placeholder="steps"
          className="input"
          value={values.steps}
          onChange={handleChange}
        /> <input
           type="text"
           name="tags"
           placeholder="tags"
          className="input"
          value={values.tags}
          onChange={handleChange}
        /><Button btnType="Success">Continue</Button></form></div>
        </div>
    )
}

export default NewPost
