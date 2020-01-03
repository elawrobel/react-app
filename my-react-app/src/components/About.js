import React from 'react';
import '../style/about.css';

class About extends React.Component{
  render(){

    const title = "Alone We Are Smart Together We Are Awesome!";
    const content = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?";


    return(
      <div className="container--full">
        <div className="about_container">

            <div className="about_left">
              <div className="about_left__title">{title}</div>
            </div>
            <div className="about_right">
              <div className="about_right__content">{content}</div>
            </div>

        </div>
      </div>
    );
  }
}
export default About
