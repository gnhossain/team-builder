import React from 'react';
import TeamMember from './TeamMember';

const TeamMemberList = props => {

    return(
        <div>
            {props.teamMembers.map( member => 
                <TeamMember key={member.id} teamMember={member} />
            )}
        </div>
    )
}

export default TeamMemberList;