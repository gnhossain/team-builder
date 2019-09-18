import React, { useState } from "react";
import ReactDOM from "react-dom";

import TeamMemberList from './components/TeamMemberList';
import Form from "./components/Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'Christina',
      role:'Instructor',
      email: 'email@email.com'
    }
  ]);
  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      role: teamMember.role,
      email:teamMember.email
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };
  
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addNewTeamMember={addNewTeamMember} />
      <TeamMemberList teamMembers={teamMembers} />
    </div>
  );
}

export default App;
