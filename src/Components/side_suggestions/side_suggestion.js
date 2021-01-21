import {Component} from "react";
import {Col, Image, Row} from "react-bootstrap";

import './side.css'

class SideSuggestion extends Component {
    render() {
        return (
            <Row>
                <Image src={this.props.img} className="side-profile-img-suggested" roundedCircle/>
                <Col>
                    <p className="username-side">{this.props.username}</p>
                    <p className="text-muted sub-title-suggested">{this.props.whySuggested}</p>
                </Col>
                <a className="link-item" href="https://www.google.com">Follow</a>
            </Row>
        )
    }
}


export default SideSuggestion
