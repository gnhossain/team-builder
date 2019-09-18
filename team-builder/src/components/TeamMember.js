import React from 'react';

const TeamMember = props => {
    
    console.log(props);

    return(
        <div>
            <h3>{props.teamMember.name}</h3>
            <h4>{props.teamMember.role}</h4>
            <h4>{props.teamMember.email}</h4>
        </div>
    )
}

export default TeamMember;