import React, { useState } from "react";

const Form = props => {
  console.log(props);
  const [teamMember, setTeamMember] = useState({
    name:'',
    role:'',
    email:''
  });
  const handleChanges = event => {
    
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    console.log(teamMember);
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewTeamMember(teamMember);
    setTeamMember({ name: "", role: "" , email: "" ,});
    console.log(event.target.value);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="Name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={teamMember.name}
      />
      <label htmlFor="Role">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={teamMember.role}
      />
      <label htmlFor="Email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        value={teamMember.email}
      />

      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default Form;
