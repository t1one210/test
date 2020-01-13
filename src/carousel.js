import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="images/1.png" alt={"text"} width="33%" height = "33%"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="images/2.png" alt={"text"} width="33%" height = "33%"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="images/3.png" alt={"text"} width="33%" height = "33%"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
ReactDOM.render(<DemoCarousel />, document.getElementById('root'));