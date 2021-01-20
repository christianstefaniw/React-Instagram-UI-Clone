import {Component} from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";

import './side.css'

class SideUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Image src={this.props.img} className="side-profile-img" roundedCircle/>
                <Col>
                    <p className="p-item">{this.props.username}</p>
                    <p className="text-muted p-item">{this.props.name}</p>
                </Col>
                <a className="link-item" href="https://www.google.com">Switch</a>
            </Row>
        )
    }
}


export default SideUser