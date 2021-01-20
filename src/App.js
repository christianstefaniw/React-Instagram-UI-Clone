import './App.css';
import {Col, Container, Row} from "react-bootstrap";

import Header from "./Components/header/header";
import UserPost from "./Components/user_post/user_post";
import SideBar from "./Components/side_suggestions/side_bar";


function App() {
    return (
        <div>
            <Header/>
            <Container id="posts">
                <Row>
                    <Col lg={8}>
                        <UserPost/>
                    </Col>
                    <Col>
                        <SideBar/>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}

export default App;
