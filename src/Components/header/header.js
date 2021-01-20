import {Component} from 'react'
import {Container, Form, Image, Nav, Navbar} from "react-bootstrap";


import './header.css'
import instaLogo from '../../assets/images/insta_logo.png'
import Search from "./search";
import Home from './home'
import Message from "./message";
import Explore from "./explore";
import Activity from "./activity";
import Profile from "./profile";


class Header extends Component {
    render() {
        return (
            <Navbar id="navbar" expand="sm" fixed="top">
                <Container>
                    <Navbar.Brand href="#home"><img src={instaLogo} alt="logo"/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav id="nav">
                            <Form inline className="m-auto"><Search/></Form>
                            <Nav.Link href="#link"><Home/></Nav.Link>
                            <Nav.Link href="#link"><Message/></Nav.Link>
                            <Nav.Link href="#link"><Explore/></Nav.Link>
                            <Nav.Link href="#link"><Activity/></Nav.Link>
                            <Nav.Link href="#link"><Profile/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header
