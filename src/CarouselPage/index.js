import React, { Component } from 'react';
import './index.css';
import imgBanner1 from './img/banner teste 1600x650.jpg'
import imgBanner2 from './img/banner teste 2 1600x650.jpg'
import { Carousel, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator } from 'mdbreact';

class CarouselPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 2
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render() {

    const { activeItem } = this.state;
    return (
        <Carousel
          activeItem={this.state.activeItem}
          next={this.next}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              {/* <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" alt="First slide" /> */}
              <img className="d-block w-100" src={imgBanner1} alt="First slide" />
            </CarouselItem>
            <CarouselItem itemId="2">
              {/* <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" alt="Second slide" /> */}
              <img className="d-block w-100" src={imgBanner2} alt="Second slide" />
            </CarouselItem>
            {/* <CarouselItem itemId="3">
              <img className="d-block w-100" src={imgBanner3} alt="Third slide" />
            </CarouselItem> */}
          </CarouselInner>
          <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
          <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
          <CarouselIndicators>
            <CarouselIndicator  active={activeItem === 1 ? true : false} onClick={() => { this.goToIndex(1); }}></CarouselIndicator>
            <CarouselIndicator  active={activeItem === 2 ? true : false} onClick={() => { this.goToIndex(2); }}></CarouselIndicator>
            {/* <CarouselIndicator  active={activeItem === 3 ? true : false} onClick={() => { this.goToIndex(3); }}></CarouselIndicator> */}
          </CarouselIndicators>
        </Carousel>
    );
  }
}

export default CarouselPage;