import React, {Component} from 'react'
import{ Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../logo.svg';
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "../Pages/Home";
import Style1 from "../Pages/Style1";
import Style2 from "../Pages/Style2";
import Style3 from "../Pages/Style3";
import Order from "../Pages/Order";
import Comments from "../Pages/Comments";



class Header extends Component {
    render() {
        return (
        <>
            <Navbar collapseOnSelect expanded="md" bg="white" variant="white" >
                <Container>
                    {/*<Navbar.Brand href="/">*/}
                    {/*    <img*/}
                    {/*        src=""*/}
                    {/*        height="100"*/}
                    {/*        width="100"*/}
                    {/*        className="d-inline-block align-top"*/}
                    {/*        alt="Logo"*/}
                    {/*    />*/}
                    {/*</Navbar.Brand>*/}
                    <Nav.Link href="/"><h3>Co</h3></Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto offset-md-8 ">
                            <Nav.Link href="/comments"> Оставь свой комментарий</Nav.Link>
                            <Nav.Link href="/order" >Заказ</Nav.Link>
                            <Nav.Link href="/" >На главную</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/style1" component={Style1}/>
                    <Route path="/style2" component={Style2}/>
                    <Route path="/style3" component={Style3}/>
                    {/*<Route path="/order" component={Order}/>*/}
                    <Route path="/comments" component={Comments}/>
                </Switch>
            </Router>
             </>
        );
    }
}

export default Header;