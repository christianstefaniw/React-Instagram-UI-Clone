import {Component} from "react";

import './stories.css'
import {Col, Image} from "react-bootstrap";

class Story extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col>
                <div className="border-gradient">
                    <Image className="story" src={this.props.img} alt="img"/>
                </div>
                <p className="story-text">{this.props.user}</p>
            </Col>

        )
    }
}

export default Story
