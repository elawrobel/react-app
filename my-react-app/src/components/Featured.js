import React from 'react';
import '../style/featured.css';

import Route from '../images/route.png';
import Settings from '../images/settings.png';
import Stopwatch from '../images/stopwatch.png';
import Folder from '../images/folder.png';

class Featured extends React.Component{
  render(){

    const posts = [
      {id: 1, title: 'Featured 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: Route, alt: 'featurd icon'},
      {id: 2, title: 'Featured 2', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: Settings, alt: 'featurd icon'},
      {id: 3, title: 'Featured 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: Stopwatch, alt: 'featurd icon'},
      {id: 4, title: 'Featured 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: Folder, alt: 'featurd icon'}
    ];


    const listItems = posts.map((posts) =>
      <div className="featured_item" key={ posts.id }>
        <img src={posts.image} className="featured_item__icon" alt={posts.alt} />
        <div className="featured_item__title">{ posts.title }</div>
        <div className="featured_item__content">{ posts.content }</div>
      </div>
    );

    return (
      <div className="container">
        <div className="featured_container">{ listItems }</div>
      </div>
    );
  }
}
export default Featured
