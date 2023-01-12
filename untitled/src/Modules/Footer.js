import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="container">
                <footer
                    className="d-flex py-3 my-4 border-top">
                    <ul className="nav col-md-4 list-unstyled d-flex">
                        <li className="ms-3"><a href="https://www.instagram.com/___c.o.n.t.r.o.l___?r=nametag">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/180px-Instagram_logo_2016.svg.png"
                                 width="24" height="24"/>
                        </a>
                        </li>
                        <li className="ms-3"><a className="text-muted" href="https://vk.com/club183387985">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/2/21/20220813052549%21VK.com-logo.svg/120px-VK.com-logo.svg.png"
                                 width="24" height="24"/>
                            </a>
                            <h3></h3>
                        </li>
                    </ul>
                </footer>
            </div>
        );
    }
}

export default Footer;