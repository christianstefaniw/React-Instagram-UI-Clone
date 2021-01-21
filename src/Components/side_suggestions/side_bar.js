import {Component} from "react";
import {Container, Row} from "react-bootstrap";

import profileImg from "../../assets/profiles/1/profile.png";
import SideSuggestion from "./side_suggestion";
import SideUser from "./side_user";
import './side.css'
import profileImg1 from '../../assets/profiles/2/profile.jpg'
import profileImg2 from '../../assets/profiles/3/profile.png'
import profileImg3 from '../../assets/profiles/4/profile.jpeg'


class SideBar extends Component {
    render() {
        return (
            <div id='sidebar'>
                <Container>
                    <SideUser img={profileImg} username="_christian.0" name="Christian"/>
                    <Row className="justify-content-between">
                        <p className="text-muted suggestions">Suggestions for you</p>
                        <p className="see-all-item">See all</p>
                    </Row>
                    <SideSuggestion img={profileImg1} username="squidward" whySuggested="New to Instagram"/>
                    <SideSuggestion img={profileImg2} username="someone" whySuggested="Followed by squidward"/>
                    <SideSuggestion img={profileImg3} username="deadpool" whySuggested="New to Instagram"/>
                </Container>
            </div>

        )
    }
}

export default SideBar
