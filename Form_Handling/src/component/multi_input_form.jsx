import { useState } from "react";

export function Multi_input_form() {

  const [formdata, setData] = useState({
    name: "",
    email: "",
    gender: "",
    department: ""
  });

  function Submit(e) {
    e.preventDefault();

    console.log(formdata);
  }

  function Change(e) {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <>
      <form onSubmit={Submit}>

        <label>Name :</label>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={Change}
        />

        <br /><br />

        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={Change}
        />

        <br /><br />

        <label>Gender :</label>
        <input
          type="text"
          name="gender"
          value={formdata.gender}
          onChange={Change}
        />

        <br /><br />

        <label>Department :</label>
        <input
          type="text"
          name="department"
          value={formdata.department}
          onChange={Change}
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>
    </>
  );
}