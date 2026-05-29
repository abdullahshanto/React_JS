import { useState } from "react";

function SimpleForm(){
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');

  function handleSubmit(e){
    e.preventDefault();
    console.log("Name" , name);
    console.log("Email ",email)
    
  }

  return(

    <>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input 
        type="text"
        value={name}
        placeholder="enter ur name "
        onChange={(e)=>{setName(e.target.value)}}
        />
        <br /> <br />
        <label htmlFor="">Emaail</label>
        <input type="email"
        value={email}
        placeholder="enter ur email"
        onChange={(e)=>{setEmail(e.target.value)}}

         />

         <button type="submit">Submit</button>

      </form>
    </>

  )

}

export default SimpleForm;