import React, {Component} from 'react';
import {Button, Card, Container, Image} from "react-bootstrap";

class Style1 extends Component {
    viewStyle2 () {
        window.location.assign('http://localhost:3000/style2');
    }

    render() {
        return (
            <div className="">
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col-auto d-none d-lg-block">
                        <Image
                            width="600"
                            src="https://cs13.pikabu.ru/avatars/398/x398393-1117678525.png"
                        />

                    </div>
                    <div className="col p-4 d-flex flex-column position-static">
                        <h3 className="mb-0">Style 1</h3>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural
                            lead-in to additional content.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 offset-md-9">
                        <Button variant="dark" onClick={event => this.viewStyle2(event)} className="m-2">
                            Следующий стиль
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Style1;