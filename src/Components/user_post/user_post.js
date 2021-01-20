import { Component } from 'react'
import {Card} from "react-bootstrap";


class UserPost extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Img variant="top"/>
                <Card.Body>
                    <Card.Text>
                        Caption
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}


export default UserPost
