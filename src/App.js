import {Col, Container, Row} from "react-bootstrap";
import {Component} from "react";

import Header from "./Components/header/header";
import Posts from "./Components/user_post/posts";
import SideBar from "./Components/side_suggestions/side_bar";
import './Components/global.css'
import './App.css';


class App extends Component{

    componentDidMount() {
        document.title = "Instagram Clone"
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <Row id="posts">
                        <Col lg={8}>
                            <Posts/>
                        </Col>
                        <Col>
                            <SideBar/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
