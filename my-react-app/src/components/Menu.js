import React from 'react';
import '../style/menu.css';

class Menu extends React.Component{
  render(){

    const items = [ 'Featured', 'About us', 'Our team', 'Contact', 'Facebook'];

    const listItems = items.map((items) =>
      <li className="menu_list__item" key={items}><a href={'#' + items}>{ items }</a></li>
    );

    return (
      <ul className="menu_list">{ listItems }</ul>
    );
  }
}
export default Menu
