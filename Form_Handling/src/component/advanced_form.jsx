import { useState } from "react";

function Advanced_form(){

  const [formData, setData] = useState({
                                          gender:"",
                                          agree:false,
                                          country:"Bangladesh"
                                      })

  function Submit(e){
    e.preventDefault();
    console.log(formData);
  }

  function handleChange(e){
        const {name,type,value,checked} = e.target
        setData((prev)=>({
        ...prev,
      [name]: type === "checkbox" ? checked : value
        }))
  }

    return(
<>
      <form onSubmit={Submit}>
       <label>
        <input 
          type="radio" 
          name="gender" 
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange} 
        />
        Male
      </label>

      <label>
        <input 
          type="radio" 
          name="gender" 
          value="Female" 
          checked={formData.gender === "Female"}
          onChange={handleChange} 
        />
        Female
      </label>
      <br />

      <label>
        Country:
        <select 
          name="country" 
          value={formData.country} 
          onChange={handleChange}
        >
          <option value="Bangladesh">Bangladesh</option>
          
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </label>
      <br />

      <label>
        <input 
          type="checkbox" 
          name="agree" 
          checked={formData.agree}
          onChange={handleChange}
        />
        I agree to terms and conditions
      </label>
      <br />
      
      <button type="submit">Submit</button>
    </form>
    </> 
  );

     

  
 
 
}
export default Advanced_form