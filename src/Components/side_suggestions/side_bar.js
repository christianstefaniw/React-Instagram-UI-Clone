import {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";

import profileImg from "../../assets/profiles/1/profile.jpg";
import SideSuggestion from "./side_suggestions";
import SideUser from "./side_user";


class SideBar extends Component {
    render() {
        return (
            <Container>
                <SideUser img={profileImg} username="Christian.601" name="Christian"/>
                <Row className="justify-content-between">
                    <p className="text-muted">Suggestions for you</p>
                    <p>See all</p>
                </Row>
                <SideSuggestion/>
                <SideSuggestion/>
                <SideSuggestion/>
                <SideSuggestion/>
            </Container>

        )
    }
}

export default SideBar
