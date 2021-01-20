import {Component} from 'react'
import {Container, Form, Image, Nav, Navbar} from "react-bootstrap";


import './header.css'
import instaLogo from '../../assets/images/insta_logo.png'
import SearchInput from "../search_input/search_input";
import darkHome from '../../assets/icons/header/home/home_dark.png'
import lightHome from '../../assets/icons/header/home/home_light.png'
import darkMessage from '../../assets/icons/header/message/message_dark.png'
import lightMessage from '../../assets/icons/header/message/message_light.png'
import darkExplore from '../../assets/icons/header/explore/explore_dark.png'
import lightExplore from '../../assets/icons/header/explore/explore_light.png'
import lightActivity from '../../assets/icons/header/activity/activity_light.png'
import profileImg from '../../assets/profiles/1/profile.jpg'


class Header extends Component {
    render() {
        return (
            <Navbar id="navbar" expand="sm">
                <Container>
                    <Navbar.Brand href="#home"><img src={instaLogo} alt="logo"/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav id="nav">
                            <Form inline className="m-auto"><SearchInput className="search-input"
                                                                         text="🔍 Search"/></Form>
                            <Nav.Link href="#link"><img src={darkHome} className="icon" alt="home"/></Nav.Link>
                            <Nav.Link href="#link"><img src={lightMessage} className="icon" alt="home"/></Nav.Link>
                            <Nav.Link href="#link"><img src={lightExplore} className="icon" alt="home"/></Nav.Link>
                            <Nav.Link href="#link"><img src={lightActivity} className="icon" alt="home"/></Nav.Link>
                            <Nav.Link href="#link"><Image src={profileImg} className="profile-img"
                                                          roundedCircle/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header
