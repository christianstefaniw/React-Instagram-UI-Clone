import {Component} from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";

import './side_suggestion.css'

class SideSuggestion extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Image src={this.props.img} className="side-profile-img" roundedCircle/>
                <Col>
                    <p className="p-item">{this.props.username}</p>
                    <p className="text-muted p-item">{this.props.whySuggested}</p>
                </Col>
                <a className="link-item" href="https://www.google.com">Follow</a>
            </Row>
        )
    }
}


export default SideSuggestion
