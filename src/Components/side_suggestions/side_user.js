import {Component} from "react";
import {Col, Image, Row} from "react-bootstrap";

import './side.css'

class SideUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Image src={this.props.img} className="side-profile-img-user" roundedCircle/>
                <Col>
                    <p className="username-side">{this.props.username}</p>
                    <p className="text-muted sub-title-user">{this.props.name}</p>
                </Col>
                <a className="link-item" href="https://www.google.com">Switch</a>
            </Row>
        )
    }
}


export default SideUser
