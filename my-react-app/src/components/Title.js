import React from 'react';
import '../style/general.css';


class Title extends React.Component{
  render(){

    const {title} = this.props

    return(

    <div id={title} className="container section">
      <h2 className="section_title">{title}</h2>
    </div>
    );
  }
}
export default Title
