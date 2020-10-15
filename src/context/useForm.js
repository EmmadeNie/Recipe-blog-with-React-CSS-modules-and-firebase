import {useState, useEffect, useContext} from "react"

//CONTEXT
import {DisplayContext} from "./display-context"

const useForm = ()=> {
    const [post, setPost] = useState({})
    const [values, setValues] = useState({
        title: "",
        author: "",
        caption: "",
        description: "",
        prep: "",
        wait: "",
        servings: "",
        utensils: "",
        tip: "",
        ingredients: "",
        steps: "",
        tags: ""
    })

    const displayContext = useContext(DisplayContext)

   const  handleChange = (event) => { 
       const {name, value} = event.target
setValues({...values, [name]:value})
    }

    console.log("post", post)
    
    console.log("values", values)
    
        const updateArray = (newItem) => {
    displayContext.toggleTagMode();
    console.log("newItem", newItem)
    const newArray = values.tags.concat(newItem);
    console.log("newArray", newArray)
    setValues({...values, tags: newArray})
    handleUpdate()
  };

//         const onUpdateArray = (newTag) => {
//     displayContext.toggleTagMode();
//     const tags = values.tags.concat(newTag);
//     const updatedPost = { ...values, tags: tags };
//     fetch(`https://blog-5c8a0.firebaseio.com/posts/${displayContext.currentPost}.json`, {
//       method: "put",
//       body: JSON.stringify(updatedPost),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((response) => {
//         return response.json();
//       })
//   };


    const handleSubmit = event=> {
         event.preventDefault()
        displayContext.toggleIsLoading(true)

    const postInfo = {
      title: values.title,
      caption: values.caption,
      author: values.author,
      description: values.description,
      prep: values.prep,
      cook: values.cook,
      servings: values.servings,
      ingredients: [values.ingredients],
      steps: [values.steps],
      utensils: [values.utensils],
      tip: values.tip,
      tags: [values.tags],
      date: new Date(),
    };

    fetch("https://blog-5c8a0.firebaseio.com/posts.json", {
      method: "post",
      body: JSON.stringify(postInfo),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => { 
displayContext.toggleIsLoading(false)
displayContext.togglePostAdded(true);
        return response.json();
      })
      .then((res) => console.log(res)).catch(error=> displayContext.toggleIsLoading(false))

    }

    const handleUpdate = ()=> {
        console.log("lala", values)
            const updatedPost = { ...values };
    fetch(`https://blog-5c8a0.firebaseio.com/posts/${displayContext.currentPost}.json`, {
      method: "put",
      body: JSON.stringify(updatedPost),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
    }

    const getPost = ()=> {
         fetch(`https://blog-5c8a0.firebaseio.com/posts/${displayContext.currentPost}.json`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {setPost(res); setValues(res)})
      .catch((err) => {});
    }

    const deletePost = ()=> { fetch(`https://blog-5c8a0.firebaseio.com/posts/${displayContext.currentPost}.json`, {
      method: "delete",
    })
      .then((response) => {
        return response.json();
      }).then(displayContext.togglePostDeleted(true))
     }

    return {handleChange, values, handleSubmit, getPost, post, handleUpdate, deletePost, updateArray}
}

export default useForm