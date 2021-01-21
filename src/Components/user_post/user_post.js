import {Component} from 'react'
import {Card, Container, Image, Row} from "react-bootstrap";
import {FaEllipsisH} from "react-icons/fa";

import likeOutline from '../../assets/icons/like.png'
import likeFilled from '../../assets/icons/like-filled.png'
import comment from '../../assets/icons/comment.png'
import share from '../../assets/icons/share.png'
import save from '../../assets/icons/save.png'
import './user_post.css'

class UserPost extends Component {
    render() {
        return (
            <Card className="post">
                <Container>
                    <Row className="d-flex header">
                        <div className={this.props.story ? "border-gradient" : null}>
                            <Image src={this.props.profileImg} className="post-profile-img"/>
                        </div>

                        <h1 className='username'>{this.props.username}</h1>
                        <FaEllipsisH className="settings ml-auto"/>
                    </Row>
                </Container>

                <Card.Img src={this.props.img} variant="top"/>
                <Container>
                    <Row className="d-flex actions">
                        <Image src={this.props.liked ? likeFilled : likeOutline} className="action" alt="like"/>
                        <Image src={comment} className="action" alt="comment"/>
                        <Image src={share} className="action" alt="share"/>
                        <Image src={save} className="action ml-auto" alt="save"/>
                    </Row>
                </Container>
                <Card.Body>
                    <Card.Text>
                        <p><span className="username-in-caption">{this.props.username} </span> <span
                            className="caption-content">{this.props.caption}</span></p>
                    </Card.Text>
                </Card.Body>


            </Card>
        )
    }
}


export default UserPost
