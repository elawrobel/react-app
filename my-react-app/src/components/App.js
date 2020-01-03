import React from 'react';
import Menu from './Menu';
import Hero from './Hero';
import Title from './Title';
import Featured from './Featured';
import About from './About';
import Team from './Team';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';



import '../style/general.css';

class App extends React.Component{
  render(){
    return(
      <div>
        <Menu />
        <Hero  />
        <Title title="Featured"/>
        <Featured />
        <Title title="About us"/>
        <About />
        <Title title="Our team"/>
        <Team />
        <Gallery />
        <Title title="Contact"/>
        <Contact />
        <Footer />
      </div>
    )
  }
}
export default App;
