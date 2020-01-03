import React from 'react';
import '../style/team.css';

import User1 from '../images/user.png';
import User2 from '../images/user_1.png';
import User3 from '../images/user_2.png';


class Team extends React.Component{
  render(){

    const member = [
      {id: 1, name: 'Jan Kowalski', image: User1, alt: 'team member photo'},
      {id: 2, name: 'Kasia Kowalski', image: User2, alt: 'team member photo'},
      {id: 3, name: 'Tymek Kowalski', image: User1, alt: 'team member photo'},
      {id: 4, name: 'Kinga Kowalski', image: User3, alt: 'team member photo'},
      {id: 5, name: 'Zdzich Kowalski', image: User1, alt: 'team member photo'},
      {id: 6, name: 'Anna Kowalski', image: User2, alt: 'team member photo'},

    ];


    const listMembers = member.map((member) =>
      <div className="team_item" key={ member.id }>
        <img src={member.image} className="team_item__icon" alt={member.alt} />
        <div className="team_item__name">{ member.name }</div>
      </div>
    );

    return (
      <div className="container">
        <div className="team_container">{ listMembers }</div>
      </div>
    );
  }
}
export default Team
