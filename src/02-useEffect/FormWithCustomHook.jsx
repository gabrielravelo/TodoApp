import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetform, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Simple Form with Custom Hook</h1>
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="User name"
        name="username" 
        value={ username }
        onChange={ onInputChange }
      />

      <input 
        type="email"
        className="form-control mt-2"
        placeholder="ravelogabriel2@gmail.com"
        name="email"
        value={ email } 
        onChange={ onInputChange }
      />
      
      <input 
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={ password } 
        onChange={ onInputChange }
      />

      <button 
        onClick={ onResetform } 
        className="btn btn-primary mt-2">
          Borrar
      </button>

    </>
  )
}
