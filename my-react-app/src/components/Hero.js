import React from 'react';
import '../style/hero.css';
import Background from '../images/hero.png';

class Hero extends React.Component{
  render(){

    return(
      <header>
        <div className="hero">
          <div className="hero_container" style={ {backgroundImage: "url(" + Background + ")"} }>
            <div className="hero_content__container">
              <h1 className="hero_content__title">
                <a href="https://www.">Lorem ipsum dolor sit amet</a>
              </h1>
              <a href="https://www." className="hero_content__text">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
              </a>
              <a className="hero_content__button" href="https://www.">
                <span className="sr-only">Read more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15"><title>Read more</title><path fill="none" stroke="#2B0A3D" strokeWidth="2" d="M1.455 1l7 6.5-7 6.5"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Hero
