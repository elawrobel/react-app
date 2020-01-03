import React from 'react';
import '../style/gallery.css';

import Gallery1 from '../images/gallery1.png';
import Gallery2 from '../images/gallery2.png';
import Gallery3 from '../images/gallery3.png';
import Gallery4 from '../images/gallery4.png';


class Gallery extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.handlePhotoHover = this.handlePhotoHover.bind(this);
  }

  handlePhotoHover() {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  render(){

    const photoActive = this.state.isHovered ? "hover" : "";

    const photo = [
      {id: 1, image: Gallery1, alt: 'photo 1'},
      {id: 2, image: Gallery2, alt: 'photo 2'},
      {id: 3, image: Gallery3, alt: 'photo 3'},
      {id: 4, image: Gallery4, alt: 'photo 4'},
      {id: 5, image: Gallery1, alt: 'photo 5'},
      {id: 6, image: Gallery2, alt: 'photo 6'},
    ];

    const listPhotos = photo.map((photo) =>
      <div
        id={photo.id}
        className="gallery_item"
        key={ photo.id }
        onMouseEnter={this.handlePhotoHover}
        onMouseLeave={this.handlePhotoHover}
      >
        <img className={"gallery_item__photo " + photoActive} src={photo.image} alt={photo.alt} />
{this.props.children}
      </div>
    );

    return (
      <div className="container--full">
        <div className="gallery_container">{ listPhotos }</div>
      </div>
    );
  }
}
export default Gallery
