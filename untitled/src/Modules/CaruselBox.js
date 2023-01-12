import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";

class CaruselBox extends Component {
    render() {
        return (
            <Carousel className="">
                <Carousel.Item>
                    <Carousel.Caption>
                        <div className="text-danger">
                            <h2>Control</h2>
                            <h4>Контролируй свою жизнь с помощью записей.</h4>
                            <h4>Time management, всё в твоих руках.</h4>
                        </div>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src="https://img.youscreen.ru/wall/14977245323895/14977245323895_1920x1200.jpg"
                        height="640"

                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CaruselBox;