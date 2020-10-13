import React, {useState, useContext} from "react";
import { Redirect } from "react-router";

//CONTEXT
import {InputContext} from "../context/input-context"
import {DisplayContext} from "../context/display-context"

//STYLING
import styles from "./NewPost.module.css";

//COMPONENTS
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Aux from "../hoc/Auxiliary";
import Spinner from "../components/UI/Spinner"

function NewPost () {
   const inputContext = useContext(InputContext);
      const displayContext = useContext(DisplayContext);

    let form = displayContext.postAdded ? <Redirect to="/" />  : (<form onSubmit={inputContext.postNewPost} className={styles["ContactData"]}>
        {inputContext.formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event)=> inputContext.changeInput(event,
              formElement.id
            )}
          />
        ))}
        <Button btnType="Success">Continue</Button>
      </form>)

     if (displayContext.isLoading) {
      form = <Spinner />;
    }

    return <Aux>{form}</Aux>;
  }



export default NewPost