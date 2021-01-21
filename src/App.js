import {Col, Container, Row} from "react-bootstrap";
import {Component} from "react";

import Header from "./components/header/header";
import Posts from "./components/user_post/posts";
import SideBar from "./components/side_suggestions/side_bar";
import Stories from './components/stories/stories'
import './components/global.css'
import './App.css';


class App extends Component {

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
                            <Stories/>
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
